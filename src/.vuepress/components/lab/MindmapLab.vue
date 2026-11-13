<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from "vue";
import type { Markmap } from "markmap-view";
import { downloadText } from "./browser.js";

const examples = {
  git: "# Git 知识地图\n## 日常提交\n- git status：查看状态\n- git add：暂存改动\n- git commit：记录版本\n## 分支协作\n- git switch：切换分支\n- git merge：合并分支\n- git rebase：整理提交\n## 远程同步\n- git fetch：获取更新\n- git pull：拉取并整合\n- git push：推送提交\n## 找回改动\n- git log：浏览历史\n- git reflog：查找操作记录\n- git restore：恢复文件",
  linux: "# Linux 运维路线\n## 文件与目录\n- pwd / ls / cd\n- cp / mv / mkdir\n- find / rg\n## 权限与用户\n- chmod / chown\n- sudo\n## 服务与进程\n- ps / top\n- systemctl\n- journalctl\n## 网络排查\n- ip / ss\n- ping / curl\n## 部署\n- SSH\n- Nginx\n- Docker",
  blog: "# 博客内容地图\n## 代码笔记\n- JavaScript 与 TypeScript\n- Vue 与前端开发\n- Linux 与后端运维\n## 工具分享\n- 开发工具\n- 运维工具\n- AI 本地部署\n## 软件教程\n- VS Code\n- Git\n## 互动实验室\n- Markdown 导图\n- CSS 图案\n- 图片取色",
};
const selected = ref<keyof typeof examples>("git");
const source = ref(examples.git);
const rendered = ref("");
const svg = ref<SVGSVGElement>();
const busy = ref(false);
const ready = ref(false);
const error = ref("");
const status = ref("");
const changed = computed(() => ready.value && source.value.trim() !== rendered.value);
let map: Markmap | undefined;
let resize: ResizeObserver | undefined;
let preference: MediaQueryList | undefined;
let frame = 0;
let disposed = false;

function updateMotion() {
  map?.setOptions({ duration: preference?.matches ? 0 : 180 });
}

async function render() {
  if (busy.value || disposed) return;
  error.value = "";
  const markdown = source.value.trim();
  if (!markdown) {
    error.value = "请先输入 Markdown 标题或列表，也可以载入一个示例。";
    return;
  }
  if (markdown.length > 12000 || markdown.split("\n").length > 250) {
    error.value = "请将内容控制在 12,000 字符、250 行以内，较长笔记建议拆分为多个主题。";
    return;
  }
  busy.value = true;
  status.value = "正在生成导图…";
  try {
    const [{ Transformer }, { Markmap }, { default: DOMPurify }] = await Promise.all([
      import("markmap-lib/no-plugins"),
      import("markmap-view"),
      import("dompurify"),
    ]);
    if (disposed || !svg.value) return;
    const transformer = new Transformer();
    transformer.md.set({ html: false });
    transformer.md.disable("image");
    const { root } = transformer.transform(markdown);
    const queue = [root];
    let count = 0;
    while (queue.length) {
      const node = queue.pop()!;
      if (++count > 300) throw new Error("too-many-nodes");
      node.content = DOMPurify.sanitize(node.content, {
        ALLOWED_TAGS: ["p", "br", "strong", "em", "code", "del", "s", "sub", "sup", "mark"],
        ALLOWED_ATTR: [],
      });
      queue.push(...(node.children ?? []));
    }
    if (!map) {
      map = Markmap.create(svg.value, {
        duration: preference?.matches ? 0 : 180,
        maxWidth: 240,
        initialExpandLevel: 2,
        scrollForPan: true,
      });
    }
    const current = map;
    await current.setData(root);
    if (disposed) return;
    await current.fit();
    if (disposed) return;
    ready.value = true;
    rendered.value = markdown;
    status.value = `已生成 ${count} 个节点。`;
  } catch (reason) {
    if (disposed) return;
    error.value = reason instanceof Error && reason.message === "too-many-nodes"
      ? "节点过多，请拆分为 300 个节点以内的导图。"
      : "导图生成失败，请检查内容或网络连接后重试。";
    status.value = "";
  } finally {
    if (!disposed) busy.value = false;
  }
}

async function view(action: "fit" | "in" | "out") {
  if (!map || busy.value) return;
  try {
    if (action === "fit") await map.fit();
    else await map.rescale(action === "in" ? 1.25 : 0.8);
  } catch {
    if (!disposed) error.value = "视图调整失败，请重新生成导图。";
  }
}

function loadExample() {
  source.value = examples[selected.value];
  void render();
}

async function expandAll(expanded: boolean) {
  if (!map?.state.data || busy.value) return;
  busy.value = true;
  const current = map;
  try {
    const root = current.state.data!;
    const queue = [root];
    while (queue.length) {
      const node = queue.pop()!;
      node.payload = { ...node.payload, fold: expanded || node === root ? 0 : 1 };
      queue.push(...(node.children ?? []));
    }
    await current.renderData();
    if (disposed) return;
    await current.fit();
    if (!disposed) status.value = expanded ? "已展开全部节点。" : "已收起到一级分支。";
  } catch {
    if (!disposed) error.value = "展开状态调整失败，请重新生成导图。";
  } finally {
    if (!disposed) busy.value = false;
  }
}

function download() {
  if (!svg.value || !map) return;
  try {
    const clone = svg.value.cloneNode(true) as SVGSVGElement;
    const group = clone.querySelector("g");
    const { x1, x2, y1, y2 } = map.state.rect;
    const width = Math.ceil(x2 - x1 + 64);
    const height = Math.ceil(y2 - y1 + 64);
    clone.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    clone.setAttribute("width", String(width));
    clone.setAttribute("height", String(height));
    clone.setAttribute("viewBox", `${x1 - 32} ${y1 - 32} ${width} ${height}`);
    clone.setAttribute("style", "background:white;--markmap-text-color:#293342;--markmap-code-bg:#f0f0f0;--markmap-code-color:#333;--markmap-circle-open-bg:white");
    group?.removeAttribute("transform");
    downloadText(new XMLSerializer().serializeToString(clone), "mindmap.svg", "image/svg+xml;charset=utf-8");
    status.value = "已导出当前展开的节点，可在浏览器中打开 SVG。";
  } catch {
    error.value = "导出失败，请重新生成导图后再试。";
  }
}

onMounted(() => {
  preference = window.matchMedia("(prefers-reduced-motion: reduce)");
  preference.addEventListener("change", updateMotion);
  resize = new ResizeObserver(() => {
    cancelAnimationFrame(frame);
    frame = requestAnimationFrame(() => { if (ready.value) void view("fit"); });
  });
  if (svg.value) resize.observe(svg.value);
  void render();
});

onBeforeUnmount(() => {
  disposed = true;
  resize?.disconnect();
  cancelAnimationFrame(frame);
  preference?.removeEventListener("change", updateMotion);
  map?.destroy();
});
</script>

<template>
  <section class="lab lab-panel" aria-label="Markdown 导图工具" :aria-busy="busy">
    <div class="lab-toolbar">
      <label>示例
        <select v-model="selected" :disabled="busy">
          <option value="git">Git 知识地图</option>
          <option value="linux">Linux 运维路线</option>
          <option value="blog">博客内容地图</option>
        </select>
      </label>
      <button type="button" :disabled="busy" @click="loadExample">载入示例</button>
    </div>
    <label class="lab-field">Markdown 大纲
      <textarea v-model="source" :disabled="busy" maxlength="12000" spellcheck="false" aria-describedby="mindmap-help" />
    </label>
    <p id="mindmap-help" class="lab-help">使用 # 标题、## 子标题和 - 列表组织知识。最多 12,000 字符、250 行；修改后点击生成。</p>
    <div class="lab-toolbar">
      <button type="button" class="lab-primary" :disabled="busy" @click="render">{{ busy ? "生成中…" : "生成导图" }}</button>
      <button type="button" :disabled="!ready || busy" @click="view('fit')">适应画布</button>
      <button type="button" :disabled="!ready || busy" @click="view('in')">放大</button>
      <button type="button" :disabled="!ready || busy" @click="view('out')">缩小</button>
      <button type="button" :disabled="!ready || busy" @click="expandAll(true)">全部展开</button>
      <button type="button" :disabled="!ready || busy" @click="expandAll(false)">收起分支</button>
      <button type="button" :disabled="!ready || busy" @click="download">下载 SVG</button>
    </div>
    <p v-if="error" class="lab-error" role="alert">{{ error }}</p>
    <p v-if="changed" class="lab-help">文字已修改，画布仍显示上次生成的内容。</p>
    <div class="lab-preview">
      <svg ref="svg" class="lab-map" role="img" aria-label="Markdown 思维导图，文字内容见上方大纲" />
    </div>
    <p class="lab-status" role="status">{{ status }}</p>
    <p class="lab-help">点击分支圆点可折叠或展开；可拖动画布，也可使用上方按钮缩放。SVG 导出保留当前展开状态。</p>
  </section>
</template>

<style scoped>
.lab-map {
  display: block;
  width: 100%;
  height: 480px;
  --markmap-text-color: var(--text-color, #293342);
  --markmap-code-bg: var(--bg-color-secondary, #f5f7fa);
  --markmap-code-color: var(--text-color, #293342);
  --markmap-circle-open-bg: var(--bg-color, #fff);
}
@media (max-width: 640px) { .lab-map { height: 360px; } }
</style>

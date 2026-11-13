<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref, watch } from "vue";
import { useClipboard } from "./browser.js";

type DoodleElement = HTMLElement & { update: (styles?: string) => void };
const host = ref<HTMLElement>();
const preset = ref("petals");
const grid = ref(8);
const radius = ref(35);
const foreground = ref("#5c92d1");
const background = ref("#edf3fa");
const seed = ref(42);
const ready = ref(false);
const loading = ref(false);
const error = ref("");
const { copy, copyStatus } = useClipboard();
let doodle: DoodleElement | undefined;
let timer: ReturnType<typeof setTimeout> | undefined;
let disposed = false;

const rules = computed(() => {
  const shape = preset.value === "petals"
    ? `border-radius: @pick(100% 0, 0 100%, ${radius.value}%);\n  transform: rotate(@pick(0, 90, 180, 270)deg);`
    : preset.value === "dots"
      ? `border-radius: ${radius.value}%;\n  transform: scale(@rand(.25, .95));`
      : `border-radius: ${radius.value}% 0;\n  transform: rotate(@pick(0, 45, 90, 135)deg) scale(.7);`;
  return `:doodle {\n  @grid: ${grid.value} / 100%;\n  background: ${background.value};\n  gap: 4px;\n}\nbackground: ${foreground.value};\nopacity: @rand(.35, 1);\n${shape}`;
});
const code = computed(() => `<css-doodle seed="${seed.value}" style="display:block;width:360px;height:360px">\n${rules.value}\n</css-doodle>`);

function update() {
  if (!doodle || disposed) return;
  try {
    doodle.setAttribute("seed", String(seed.value));
    doodle.update(rules.value);
    error.value = "";
  } catch {
    error.value = "图案生成失败，请切换预设或重新载入。";
  }
}

async function initialize() {
  if (loading.value) return;
  loading.value = true;
  error.value = "";
  try {
    await import("css-doodle");
    if (disposed || !host.value) return;
    doodle = document.createElement("css-doodle") as DoodleElement;
    doodle.style.cssText = "display:block;width:100%;height:100%;";
    doodle.setAttribute("seed", String(seed.value));
    doodle.textContent = rules.value;
    host.value.replaceChildren(doodle);
    ready.value = true;
  } catch {
    error.value = "图案组件加载失败，请检查网络后重试。";
  } finally {
    if (!disposed) loading.value = false;
  }
}

watch([rules, seed], () => {
  copyStatus.value = "";
  clearTimeout(timer);
  timer = setTimeout(update, 100);
});
onMounted(initialize);
onBeforeUnmount(() => {
  disposed = true;
  clearTimeout(timer);
  doodle?.remove();
});
</script>

<template>
  <section class="lab lab-panel" aria-label="CSS 图案生成器">
    <div class="lab-split">
      <div>
        <label class="lab-field">图案预设
          <select v-model="preset">
            <option value="petals">几何花瓣</option>
            <option value="dots">散落圆点</option>
            <option value="tiles">旋转拼贴</option>
          </select>
        </label>
        <label class="lab-field">网格：{{ grid }} × {{ grid }}
          <input v-model.number="grid" type="range" min="3" max="16" />
        </label>
        <label class="lab-field">圆角：{{ radius }}%
          <input v-model.number="radius" type="range" min="0" max="50" />
        </label>
        <div class="lab-fields">
          <label class="lab-field">图形色 <input v-model="foreground" type="color" /></label>
          <label class="lab-field">背景色 <input v-model="background" type="color" /></label>
        </div>
        <div class="lab-toolbar">
          <button type="button" class="lab-primary" :disabled="!ready" @click="seed++">换一个图案</button>
          <button v-if="error && !ready" type="button" :disabled="loading" @click="initialize">重新载入</button>
        </div>
      </div>
      <div>
        <div ref="host" class="lab-preview lab-doodle" role="img" :aria-label="`${grid} × ${grid} 的${preset === 'petals' ? '几何花瓣' : preset === 'dots' ? '散落圆点' : '旋转拼贴'}图案`" />
        <p class="lab-help">{{ ready ? "修改参数即可更新预览。图案保持静止，可按需重新生成。" : "正在加载图案组件…" }}</p>
      </div>
    </div>
    <p v-if="error" class="lab-error" role="alert">{{ error }}</p>
    <details>
      <summary>查看与复制图案代码</summary>
      <p class="lab-help">将代码放入已加载 css-doodle 的页面。随机种子相同，图案即可复现。</p>
      <pre class="lab-source"><code>{{ code }}</code></pre>
      <button type="button" @click="copy(code)">复制代码</button>
      <p class="lab-status" role="status">{{ copyStatus }}</p>
    </details>
  </section>
</template>

<style scoped>
.lab-doodle { width: 100%; aspect-ratio: 1; }
</style>

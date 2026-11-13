<script setup lang="ts">
import { computed, onBeforeUnmount, ref, watch } from "vue";
import { useClipboard } from "./browser.js";

type Swatch = { hex: string; text: string };
const input = ref<HTMLInputElement>();
const preview = ref("");
const filename = ref("");
const colorCount = ref(6);
const palette = ref<Swatch[]>([]);
const dominant = ref<Swatch>();
const busy = ref(false);
const error = ref("");
const status = ref("");
const { copy, copyStatus } = useClipboard();
const css = computed(() => `:root {\n${palette.value.map((color, index) => `  --palette-${index + 1}: ${color.hex};`).join("\n")}\n}`);
let canvas: HTMLCanvasElement | undefined;
let job = 0;
let disposed = false;
const urls = new Set<string>();

function reset() {
  job++;
  canvas = undefined;
  preview.value = "";
  filename.value = "";
  palette.value = [];
  dominant.value = undefined;
  error.value = "";
  status.value = "";
  copyStatus.value = "";
  busy.value = false;
  for (const url of urls) URL.revokeObjectURL(url);
  urls.clear();
  if (input.value) input.value.value = "";
}

async function extract(current: number) {
  if (!canvas) return;
  const { getColorSync, getPaletteSync } = await import("colorthief");
  if (disposed || current !== job || !canvas) return;
  const options = { quality: 5, colorCount: colorCount.value, ignoreWhite: false };
  const colors = getPaletteSync(canvas, options);
  const primary = getColorSync(canvas, options);
  if (!colors?.length || !primary) throw new Error("empty-image");
  palette.value = [...new Map(colors.map(color => [color.hex(), { hex: color.hex().toUpperCase(), text: color.textColor }])).values()];
  dominant.value = { hex: primary.hex().toUpperCase(), text: primary.textColor };
  status.value = `已提取 ${palette.value.length} 种颜色。点击色块可复制 HEX。`;
}

async function processFile(event: Event) {
  const file = (event.target as HTMLInputElement).files?.[0];
  if (!file) return;
  reset();
  if (!["image/jpeg", "image/png", "image/webp", "image/avif"].includes(file.type)) {
    error.value = "请选择 JPG、PNG、WebP 或 AVIF 图片。";
    return;
  }
  if (file.size > 10 * 1024 * 1024) {
    error.value = "图片超过 10 MB，请压缩后再选择。";
    return;
  }
  busy.value = true;
  status.value = "正在读取图片并提取颜色…";
  const current = ++job;
  const url = URL.createObjectURL(file);
  urls.add(url);
  try {
    const image = new Image();
    image.src = url;
    await image.decode();
    if (disposed || current !== job) return;
    if (!image.naturalWidth || !image.naturalHeight || image.naturalWidth * image.naturalHeight > 32000000) {
      throw new Error("image-size");
    }
    const scale = Math.min(1, 640 / Math.max(image.naturalWidth, image.naturalHeight));
    canvas = document.createElement("canvas");
    canvas.width = Math.max(1, Math.round(image.naturalWidth * scale));
    canvas.height = Math.max(1, Math.round(image.naturalHeight * scale));
    const context = canvas.getContext("2d");
    if (!context) throw new Error("canvas-unavailable");
    context.drawImage(image, 0, 0, canvas.width, canvas.height);
    preview.value = canvas.toDataURL("image/png");
    filename.value = file.name;
    await extract(current);
  } catch (reason) {
    if (disposed || current !== job) return;
    error.value = reason instanceof Error && reason.message === "image-size"
      ? "图片尺寸过大，请缩小到 3200 万像素以内后再试。"
      : reason instanceof Error && reason.message === "empty-image"
        ? "没有找到可用颜色，请选择不是全透明的图片。"
        : "图片无法读取或取色组件加载失败，请换一张图片或重试。";
    status.value = "";
  } finally {
    URL.revokeObjectURL(url);
    urls.delete(url);
    if (!disposed && current === job) busy.value = false;
  }
}

async function recolor() {
  if (!canvas || busy.value) return;
  const current = ++job;
  busy.value = true;
  error.value = "";
  copyStatus.value = "";
  palette.value = [];
  dominant.value = undefined;
  try {
    await extract(current);
  } catch {
    if (!disposed && current === job) {
      error.value = "未能提取颜色，请选择其他图片或重试。";
      status.value = "";
    }
  } finally {
    if (!disposed && current === job) busy.value = false;
  }
}

async function demo() {
  reset();
  canvas = document.createElement("canvas");
  canvas.width = 640;
  canvas.height = 400;
  const context = canvas.getContext("2d");
  if (!context) {
    error.value = "当前浏览器不支持图片绘制，请换一个浏览器。";
    return;
  }
  const colors = ["#17324d", "#5c92d1", "#82b8b0", "#f4d49a", "#d88670"];
  colors.forEach((color, index) => {
    context.fillStyle = color;
    context.fillRect(index * 128, 0, 128, 400);
  });
  context.fillStyle = "#f9f4e8";
  context.beginPath();
  context.arc(320, 200, 100, 0, Math.PI * 2);
  context.fill();
  preview.value = canvas.toDataURL("image/png");
  filename.value = "实验室示例配色";
  await recolor();
}

watch(colorCount, recolor);
onBeforeUnmount(() => {
  disposed = true;
  job++;
  for (const url of urls) URL.revokeObjectURL(url);
  canvas = undefined;
});
</script>

<template>
  <section class="lab lab-panel" aria-label="图片取色工具" :aria-busy="busy">
    <label class="lab-field">选择本地图片
      <input ref="input" type="file" accept="image/jpeg,image/png,image/webp,image/avif" :disabled="busy" aria-describedby="color-help" @change="processFile" />
    </label>
    <p id="color-help" class="lab-help">支持 JPG、PNG、WebP、AVIF，最大 10 MB。图片只在当前浏览器中处理，不会上传；刷新或离开页面后清除。</p>
    <div class="lab-toolbar">
      <label>色板数量
        <select v-model.number="colorCount" :disabled="busy">
          <option :value="4">4 色</option>
          <option :value="6">6 色</option>
          <option :value="8">8 色</option>
          <option :value="10">10 色</option>
        </select>
      </label>
      <button type="button" :disabled="busy" @click="demo">试用示例图片</button>
      <button v-if="preview || busy" type="button" @click="reset">清除图片</button>
      <button v-if="error && preview" type="button" :disabled="busy" @click="recolor">重新取色</button>
    </div>
    <p v-if="error" class="lab-error" role="alert">{{ error }}</p>
    <div v-if="preview" class="lab-preview lab-image">
      <img :src="preview" :alt="filename" />
    </div>
    <p v-else class="lab-empty">从一张照片、一幅插画或一张截图开始。也可以先试用示例图片。</p>
    <p class="lab-status" role="status">{{ status }}</p>
    <template v-if="dominant">
      <h2>主色</h2>
      <button type="button" class="lab-dominant" :style="{ backgroundColor: dominant.hex, color: dominant.text }" :aria-label="`复制主色 ${dominant.hex}`" @click="copy(dominant.hex)">{{ dominant.hex }}</button>
    </template>
    <template v-if="palette.length">
      <h2>配色色板</h2>
      <div class="lab-swatches">
        <div v-for="color in palette" :key="color.hex" class="lab-swatch">
          <button type="button" :style="{ backgroundColor: color.hex, color: color.text }" :aria-label="`复制色值 ${color.hex}`" @click="copy(color.hex)">复制</button>
          <code>{{ color.hex }}</code>
        </div>
      </div>
      <div class="lab-toolbar">
        <button type="button" @click="copy(palette.map(color => color.hex).join(', '))">复制全部 HEX</button>
        <button type="button" @click="copy(css)">复制 CSS 变量</button>
      </div>
      <p class="lab-status" role="status">{{ copyStatus }}</p>
      <details>
        <summary>查看 CSS 变量</summary>
        <pre class="lab-source"><code>{{ css }}</code></pre>
      </details>
      <p class="lab-help">颜色来自缩略图采样，适合配色参考。纯色图片可能少于所选色数，透明像素不参与取色。</p>
    </template>
  </section>
</template>

<style scoped>
.lab-image { display: grid; place-items: center; min-height: 160px; padding: 1rem; }
.lab-image img { display: block; max-width: 100%; max-height: 360px; object-fit: contain; }
.lab-empty { padding: 3rem 1rem; border: 1px dashed var(--lab-border); border-radius: 10px; text-align: center; line-height: 1.8; }
.lab-dominant { width: 100%; min-height: 88px; font-family: monospace; font-size: 1.2rem; }
.lab-swatches { display: grid; grid-template-columns: repeat(auto-fit, minmax(90px, 1fr)); gap: 0.75rem; }
.lab-swatch { min-width: 0; text-align: center; }
.lab-swatch button { width: 100%; min-height: 88px; margin-bottom: 0.5rem; }
.lab-swatch code { user-select: all; font-size: 0.85rem; }
</style>

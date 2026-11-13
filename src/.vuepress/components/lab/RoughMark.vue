<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref, watch } from "vue";
import type { RoughAnnotation } from "rough-notation/lib/model.js";

const props = withDefaults(defineProps<{
  type?: "underline" | "circle" | "highlight" | "box";
  color?: string;
}>(), { type: "underline" });
const target = ref<HTMLElement>();
let annotation: RoughAnnotation | undefined;
let annotate: typeof import("rough-notation").annotate | undefined;
let observer: ResizeObserver | undefined;
let preference: MediaQueryList | undefined;
let frame = 0;
let disposed = false;

function draw(animate = false) {
  if (!target.value || !annotate || disposed) return;
  annotation?.remove();
  annotation = annotate(target.value, {
    type: props.type,
    color: props.color ?? (props.type === "highlight" ? "var(--lab-highlight)" : "currentColor"),
    multiline: true,
    padding: 2,
    strokeWidth: 1.5,
    animationDuration: 500,
    animate: animate && !preference?.matches,
  });
  annotation.show();
}

function redraw() {
  cancelAnimationFrame(frame);
  frame = requestAnimationFrame(() => draw());
}

onMounted(async () => {
  preference = window.matchMedia("(prefers-reduced-motion: reduce)");
  preference.addEventListener("change", redraw);
  try {
    ({ annotate } = await import("rough-notation"));
    if (disposed) return;
    draw(true);
    observer = new ResizeObserver(redraw);
    if (target.value) observer.observe(target.value);
    void document.fonts.ready.then(() => { if (!disposed) redraw(); });
  } catch {
    // The article text remains readable if the optional decoration cannot load.
  }
});

watch(() => [props.type, props.color], redraw);
onBeforeUnmount(() => {
  disposed = true;
  cancelAnimationFrame(frame);
  observer?.disconnect();
  preference?.removeEventListener("change", redraw);
  annotation?.remove();
});
</script>

<template>
  <span class="lab-annotation"><span ref="target"><slot /></span></span>
</template>

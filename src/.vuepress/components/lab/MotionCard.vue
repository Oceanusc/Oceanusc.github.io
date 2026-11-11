<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from "vue";
import { useMotion } from "@vueuse/motion";

const target = ref<HTMLElement>();
const motion = useMotion(target, {}, {
  lifeCycleHooks: false,
  visibilityHooks: false,
  eventListeners: false,
});
let preference: MediaQueryList | undefined;

function respectPreference() {
  if (preference?.matches) {
    motion.stop();
    motion.set({ y: 0 });
  }
}

function lift(active: boolean) {
  if (!preference || preference.matches) return;
  void motion.apply({ y: active ? -3 : 0, transition: { duration: 180 } });
}

onMounted(() => {
  preference = window.matchMedia("(prefers-reduced-motion: reduce)");
  preference.addEventListener("change", respectPreference);
  if (!preference.matches) {
    motion.set({ y: 8 });
    void motion.apply({ y: 0, transition: { duration: 240 } });
  }
});

onBeforeUnmount(() => {
  preference?.removeEventListener("change", respectPreference);
  motion.stop();
});
</script>

<template>
  <div ref="target" class="lab-motion" @mouseenter="lift(true)" @mouseleave="lift(false)" @focusin="lift(true)" @focusout="lift(false)">
    <slot />
  </div>
</template>

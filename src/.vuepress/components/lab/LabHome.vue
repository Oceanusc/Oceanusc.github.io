<script setup lang="ts">
import { RouteLink } from "vuepress/client";
import MotionCard from "./MotionCard.vue";
import RoughMark from "./RoughMark.vue";

const tools = [
  { number: "01", title: "专题导图", path: "/lab/mindmap.html", tag: "Markmap", text: "把 Markdown 大纲变成一张能展开、缩放的知识地图。", action: "整理一张导图" },
  { number: "02", title: "CSS 实验室", path: "/lab/doodle.html", tag: "css-doodle", text: "调节颜色、网格和形状，生成属于自己的几何图案。", action: "玩一张图案" },
  { number: "03", title: "图片取色", path: "/lab/colors.html", tag: "Color Thief", text: "从喜欢的图片中提取主色和色板，把灵感变成配色。", action: "提取一组颜色" },
  { number: "04", title: "文章里的小交互", path: "/lab/annotations.html", tag: "Rough Notation · VueUse Motion", text: "手绘重点标注与轻量卡片动效，让知识更容易被看见。", action: "查看效果与用法" },
];
</script>

<template>
  <section class="lab" aria-label="互动实验室">
    <p class="lab-intro">把笔记变成<RoughMark>可以动手玩的东西</RoughMark>。选一个工具，从一个小想法开始。</p>
    <div class="lab-cards">
      <MotionCard v-for="tool in tools" :key="tool.path">
        <RouteLink :to="tool.path" class="lab-card">
          <span class="lab-eyebrow">{{ tool.number }} / {{ tool.tag }}</span>
          <h2>{{ tool.title }}</h2>
          <p>{{ tool.text }}</p>
          <span class="lab-card-action">{{ tool.action }} <span aria-hidden="true">→</span></span>
        </RouteLink>
      </MotionCard>
    </div>
    <p class="lab-help">导图文字与图片均在浏览器中处理，无需账号。</p>
  </section>
</template>

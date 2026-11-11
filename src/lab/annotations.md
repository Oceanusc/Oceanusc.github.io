---
title: 文章里的小交互
icon: pen
article: false
---

# 文章里的小交互

让重点更容易被看见，也让工具入口多一点反馈。

## 手绘重点标注

写笔记时，可以给<RoughMark>需要记住的结论</RoughMark>加一条手绘下划线；也可以用<RoughMark type="circle">圈选</RoughMark>突出关键词。

<RoughMark type="highlight">先理解工作区、暂存区和版本库，再记忆 Git 命令。</RoughMark>

本站文章中可以直接使用：

```vue
<RoughMark>手绘下划线</RoughMark>
<RoughMark type="circle">圈选关键词</RoughMark>
<RoughMark type="highlight">荧光笔高亮</RoughMark>
<RoughMark type="box">方框标注</RoughMark>
```

支持跨行文本，窗口大小变化时重新定位。适合标注一句结论或少量关键词。

## 卡片动效

<div class="lab">
  <MotionCard>
    <div class="lab-panel">
      <strong>把知识变成一张地图</strong>
      <p>这张卡片在出现时轻轻进入；鼠标悬停或键盘聚焦内部链接时略微上浮。</p>
      <RouteLink to="/lab/mindmap.html">打开专题导图 →</RouteLink>
    </div>
  </MotionCard>
</div>

```vue
<MotionCard>
  <div class="lab-panel">
    <strong>卡片标题</strong>
    <p>卡片内容</p>
  </div>
</MotionCard>
```

动效遵循系统的「减少动态效果」设置。普通文章正文保持原有阅读方式，只在明确使用组件的位置增加效果。

分别基于 [Rough Notation](https://github.com/rough-stuff/rough-notation) 与 [VueUse Motion](https://github.com/vueuse/motion)。

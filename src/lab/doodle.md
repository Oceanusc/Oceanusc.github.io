---
title: CSS 实验室
icon: palette
article: false
---

# CSS 实验室

用网格、颜色和几何形状探索图案。可以为文章封面、个人主页或卡片背景寻找灵感。

<ClientOnly>
  <DoodleLab />
  <template #fallback><p>CSS 实验室正在加载，请启用 JavaScript。</p></template>
</ClientOnly>

## 把图案带到自己的页面

复制工具生成的代码，并在你的页面项目中安装、加载 `css-doodle`。代码中的 `seed` 保存了随机种子，重新打开时可以复现图案。

```js
import "css-doodle";
```

在 Vue 中使用时，需要将 `css-doodle` 声明为自定义元素；也可以像本站一样，在客户端挂载后通过 DOM 创建元素。更多示例见 [css-doodle 文档](https://css-doodle.com/)。

想了解背后的布局与样式，可以继续阅读 [CSS 笔记](../code/website/css/)。

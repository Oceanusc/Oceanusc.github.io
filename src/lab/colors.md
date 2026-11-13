---
title: 图片取色
icon: eye-dropper
article: false
---

# 图片取色

从照片、插画或截图中提取主色与配色色板。点击色块复制 HEX，也可以一次复制整组 CSS 变量。

<ClientOnly>
  <ColorLab />
  <template #fallback><p>图片取色工具正在加载，请启用 JavaScript。</p></template>
</ClientOnly>

## 如何使用配色

选一个颜色作为主色，其他颜色用于辅助色和背景。正文与背景的对比度需要单独确认，不建议直接将整组颜色都用于正文。

图片只在浏览器本地处理，无需上传服务器。由 [Color Thief](https://github.com/lokesh/color-thief) 提供颜色提取能力。

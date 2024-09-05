import { defineUserConfig } from "vuepress";
import { getDirname, path } from "vuepress/utils";
import { oml2dPlugin } from 'vuepress-plugin-oh-my-live2d';
const __dirname = getDirname(import.meta.url);
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "博客演示",
  description: "vuepress-theme-hope 的博客演示",

  theme,
  alias: {
    "@theme-hope/modules/blog/components/BlogHero": path.resolve(
      __dirname,
      "./components/BlogHero.vue",
    ),
  },
  plugins: [
    oml2dPlugin({
      // 在这里配置选项
      models: [
        {
          "path": "https://model.oml2d.com/HK416-1-normal/model.json",
          "position": [0, 60],
          "scale": 0.08,
          "stageStyle": {
            "height": 450
          }
        },
        {
          "path": "https://model.oml2d.com/cat-black/model.json",
          "scale": 0.15,
          "position": [0, 20],
          "stageStyle": {
            "height": 350
          }
        }
      ]
    })

    //  ...other plugins
  ]
  // 和 PWA 一起启用
  // shouldPrefetch: false,
});

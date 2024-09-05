import { defineUserConfig } from "vuepress";
import { getDirname, path } from "vuepress/utils";
import { oml2dPlugin } from 'vuepress-plugin-oh-my-live2d';
const __dirname = getDirname(import.meta.url);
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "link",
  description: "link的博客主页",

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

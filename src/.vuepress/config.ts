import type { UserConfig } from "vuepress";
import { defineUserConfig } from "vuepress";
import { searchProPlugin } from "vuepress-plugin-search-pro";
import theme from "./theme.js";

export default <UserConfig>defineUserConfig({
  dest: "dist",

  head: [
    [
      "link",
      {
        rel: "mask-icon",
        href: "/assets/safari-pinned-tab.svg",
        color: "#5c92d1",
      },
    ],
  ],

  locales: {
    "/": {
      lang: "zh-CN",
      title: "oceanusc",
      description: "记录开发实践、AI 工具与可以动手玩的知识。分享编程笔记、软件教程、本地部署经验和互动实验。",
    },
  },

  theme,

  plugins: [
    searchProPlugin({
      indexContent: true,
      locales: {
        "/": {
          placeholder: "搜索文章、命令与工具",
          emptyResult: "没有找到结果，试试 Git、Docker 或 Ollama 等关键词。",
        },
      },
    }),
  ],

  shouldPrefetch: false,
});

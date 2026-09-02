import { hopeTheme } from "vuepress-theme-hope";

import { enNavbarConfig, zhNavbarConfig } from "./navbar.js";
import { enSidebarConfig, zhSidebarConfig } from "./sidebar/index.js";

export default hopeTheme(
  {
    hostname: "https://daiding.site",

    author: {
      name: "oceanusc",
      url: "https://daiding.site",
    },

    favicon: "/favicon.ico",

    iconAssets: "//at.alicdn.com/t/font_2410206_vuzkjonf4s9.css",

    logo: "/logo.png",
    fullscreen: true,

    repo: "Oceanusc/Oceanusc.github.io",

    repoDisplay: false,

    docsDir: "src",

    locales: {
      "/": {
        navbar: zhNavbarConfig,

        sidebar: zhSidebarConfig,

        copyright: "基于 MIT 协议，© 2022-至今 oceanusc",

        blog: {
          description: "不生产知识，主要负责收藏、整理和忘记。",
          medias: {
            GitHub: "https://github.com/oceanusc",
            Gmail: "che4ac@outlook.com",
          },
        },
      },
    },

    displayFooter: true,
    copyright: "Copyright © 2022-present oceanusc",

    plugins: {
      blog: {
        excerptLength: 0,
      },
    },
  },
  false
);

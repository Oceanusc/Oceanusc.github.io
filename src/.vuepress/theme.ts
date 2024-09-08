import { hopeTheme } from "vuepress-theme-hope";

import { enNavbarConfig, zhNavbarConfig } from "./navbar.js";
import { enSidebarConfig, zhSidebarConfig } from "./sidebar/index.js";

export default hopeTheme(
  {
    hostname: "https://mister-hope.com",

    author: {
      name: "Ocean",
      url: "https://mister-hope.com",
    },

    favicon: "/favicon.ico",

    iconAssets: "//at.alicdn.com/t/font_2410206_vuzkjonf4s9.css",

    logo: "/logo.svg",

    repo: "Mister-Hope/Mister-Hope.github.io",

    repoDisplay: false,

    docsDir: "src",

    locales: {
      "/": {
        navbar: zhNavbarConfig,
        sidebar: zhSidebarConfig,

        footer:
          '主题使用 <a href="https://theme-hope.vuejs.press/zh/">VuePress Theme Hope</a>',
        copyright: "基于 MIT 协议，© 2023-至今 Ocean",

        blog: {
          description: "一个前端开发者",
          intro: "/about/",
          medias: {
            GitHub: "https://github.com/Mister-Hope",
            BiliBili: "https://space.bilibili.com/630395917",
            QQ: "http://wpa.qq.com/msgrd?v=3&uin=1178522294&site=qq&menu=yes",
            Qzone: "https://1178522294.qzone.qq.com/",
            Gmail: "mailto:mister-hope@outlook.com",
            Zhihu: "https://www.zhihu.com/people/mister-hope",
            Steam: "https://steamcommunity.com/id/Mr-Hope/",
            Weibo: "https://weibo.com/misterhope",
            Gitee: "https://gitee.com/Mister-Hope",
            Twitter: "https://twitter.com/Mister_Hope",
            Telegram: "https://t.me/Mister_Hope",
          },
        },
      },
    },

    displayFooter: true,
    copyright: "Copyright © 2023-present Ocean",

    plugins: {
      searchPro: true,
      blog: {
        excerptLength: 0,
      },
      comment: {
        provider: "Giscus",
        repo: "hahaDxg/hahaDxg.github.io",
        repoId: "R_kgDOMtJFCA",
        category: "Announcements",
        categoryId: "DIC_kwDOMtJFCM4CiN6L",
      },

      feed: {
        atom: true,
        json: true,
        rss: true,
      },

      mdEnhance: {
        align: true,
        codetabs: true,
        demo: true,
        figure: true,
        flowchart: true,
        footnote: true,
        imgLazyload: true,
        imgMark: true,
        imgSize: true,
        mathjax: true,
        mermaid: true,
        revealJs: true,
        sub: true,
        sup: true,
        vPre: true,
      },

      pwa: {
        themeColor: "#5c92d1",
        cacheHTML: false,
        maxSize: 3072,
        apple: {
          icon: "/assets/icon/apple-touch-icon.png",
          statusBarColor: "white",
        },
        msTile: {
          image: "/assets/icon/ms-icon-144.png",
          color: "#ffffff",
        },
        manifest: {
          name: "Ocean 的个人博客",
          short_name: "Ocean Blog",
          description: "Ocean 的个人博客",
          theme_color: "#5c92d1",
          icons: [
            {
              src: "/assets/icon/chrome-192.png",
              sizes: "192x192",
              type: "image/png",
            },
            {
              src: "/assets/icon/chrome-512.png",
              sizes: "512x512",
              type: "image/png",
            },
            {
              src: "/assets/icon/chrome-mask-192.png",
              sizes: "192x192",
              purpose: "maskable",
              type: "image/png",
            },
            {
              src: "/assets/icon/chrome-mask-512.png",
              sizes: "512x512",
              purpose: "maskable",
              type: "image/png",
            },
          ],
          shortcuts: [
            {
              name: "分类",
              short_name: "分类",
              icons: [
                {
                  src: "/assets/icon/category-maskable.png",
                  sizes: "192x192",
                  purpose: "maskable",
                  type: "image/png",
                },
              ],
              url: "/category/",
              description: "文章分类分组",
            },
            {
              name: "标签",
              short_name: "标签",
              icons: [
                {
                  src: "/assets/icon/tag-maskable.png",
                  sizes: "192x192",
                  purpose: "maskable",
                  type: "image/png",
                },
              ],
              url: "/tag/",
              description: "文章标签分组",
            },
            {
              name: "时间线",
              short_name: "时间线",
              icons: [
                {
                  src: "/assets/icon/timeline-maskable.png",
                  sizes: "192x192",
                  purpose: "maskable",
                  type: "image/png",
                },
              ],
              url: "/timeline/",
              description: "时间线文章列表",
            },
            {
              name: "个人介绍",
              short_name: "个人介绍",
              icons: [
                {
                  src: "/assets/icon/about-maskable.png",
                  sizes: "192x192",
                  purpose: "maskable",
                  type: "image/png",
                },
              ],
              url: "/about/",
              description: "个人介绍",
            },
          ],
        },
      },

      shiki: {
        lineNumbers: 10,
        langAlias: {
          conf: "ini",
        },
      },
    },
  },
  false
);

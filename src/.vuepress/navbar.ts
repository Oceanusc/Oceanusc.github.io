import { navbar } from "vuepress-theme-hope";

export const zhNavbarConfig = navbar([
  "/",
  {
    text: "代码笔记",
    icon: "code",
    children: [
      {
        text: "代码笔记",
        icon: "code",
        link: "/code/",
        activeMatch: "^/code/$",
      },
      {
        text: "产品设计",
        children: ["/design/"],
      },
      {
        text: "后端运维",
        children: ["/linux/"],
      },
    ],
  },
  {
    text: "工具分享",
    icon: "fa-brands fa-twitter",
    prefix: "/note/",
    children: [
      { text: "工具分享", link: "", icon: "note", activeMatch: "^/note/$" },
      "node-js/",
    ],
  },
  {
    text: "软件教程",
    icon: "software",
    prefix: "/software/",
    children: [
      {
        text: "软件教程",
        icon: "software",
        link: "",
        activeMatch: "^/software/$",
      },
      "vscode/",
      "git/",
    ],
  },
]);

export const enNavbarConfig = navbar([
  "/en/",
  "/en/note/",
  "/en/code/",
  "/en/software/",
]);

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
      "development/",
      "operations/",
      "ai-local/",
    ],
  },
  {
    text: "互动实验室",
    icon: "flask",
    prefix: "/lab/",
    children: [
      { text: "实验室首页", link: "" },
      { text: "专题导图", link: "mindmap" },
      { text: "CSS 实验室", link: "doodle" },
      { text: "图片取色", link: "colors" },
      { text: "文章里的小交互", link: "annotations" },
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

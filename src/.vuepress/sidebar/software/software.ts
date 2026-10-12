import { arraySidebar } from "vuepress-theme-hope";

export const software = arraySidebar([
  "",
  "editor",
  "vscode/",
  "chrome",
  "git/",
  {
    text: "工具软件",
    icon: "tool",
    prefix: "tool/",
    children: [
      "",
      "power-toys",
      "powershell",
      {
        text: "Terminal",
        icon: "shell",
        link: "terminal/",
        prefix: "terminal/",
        children: ["get-started", "settings"],
      },
    ],
  },
  "apache",
  "nginx",
  "postman",
  "mysql/",
  {
    text: "开源软件",
    icon: "software",
    children: ["rustdesk", "immich", "stirling-pdf"],
  },
  {
    text: "AI Agent",
    icon: "software",
    children: [
      { text: "REA", icon: "robot", link: "rea" },
      { text: "DeepSeek Harness", icon: "robot", link: "deepseek-harness" },
      { text: "nanobot", icon: "robot", link: "nanobot" },
      { text: "Laya", icon: "robot", link: "laya-model" },
      { text: "Jev", icon: "robot", link: "jev-model" },
      {
        text: "Microsoft Agent Framework",
        icon: "robot",
        link: "microsoft-agent-framework",
      },
    ],
  },
]);

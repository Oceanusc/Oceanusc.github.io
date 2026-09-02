import type { UserConfig } from "vuepress";
import { defineUserConfig } from "vuepress";
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
      description: "All men by nature desire knowledge.",
    },
  },

  theme,

  shouldPrefetch: false,
});

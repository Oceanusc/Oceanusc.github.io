import { appendDatePlugin } from "@vuepress/plugin-append-date";
import type { UserConfig } from "vuepress";
import { hopeTheme } from "vuepress-theme-hope";
import { defineUserConfig } from "vuepress";
import { getDirname, path } from "vuepress/utils";
import theme from "./theme.js";
const __dirname = getDirname(import.meta.url);
export default <UserConfig>defineUserConfig({
  dest: "dist",

  alias: {
    "@theme-hope/modules/blog/components/BlogHero": path.resolve(
      __dirname,
      "./components/BlogHero.vue"
    ),
  },
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

  plugins: [appendDatePlugin()],

  shouldPrefetch: false,
});

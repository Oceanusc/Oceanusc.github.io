import { defineClientConfig } from "vuepress/client";
import { setupSnowFall } from "vuepress-theme-hope/presets/SnowFall.js";
import { setupTransparentNavbar } from "vuepress-theme-hope/presets/transparentNavbar.js";
import { setupRunningTimeFooter } from "vuepress-theme-hope/presets/footerRunningTime.js";

import "vuepress-theme-hope/presets/hr-driving-car.scss"
import"vuepress-theme-hope/presets/bounce-icon.scss"
import"vuepress-theme-hope/presets/round-blogger-avatar.scss"
export default defineClientConfig({
  setup: () => {
    setupTransparentNavbar({ type: "homepage" });
    setupSnowFall();
    setupRunningTimeFooter(
        new Date("2022-01-01"),
        {
          "/": "已运行 :day 天 :hour 小时 :minute 分钟 :second 秒",
          "/zh/": "已运行 :day 天 :hour 小时 :minute 分钟 :second 秒",
        },
        true,
      );
  },
});
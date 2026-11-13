import { defineClientConfig } from "vuepress/client";
import { defineAsyncComponent } from "vue";
import "./styles/lab.scss";

export default defineClientConfig({
  enhance({ app }) {
    app.component("LabHome", defineAsyncComponent(() => import("./components/lab/LabHome.vue")));
    app.component("MindmapLab", defineAsyncComponent(() => import("./components/lab/MindmapLab.vue")));
    app.component("DoodleLab", defineAsyncComponent(() => import("./components/lab/DoodleLab.vue")));
    app.component("ColorLab", defineAsyncComponent(() => import("./components/lab/ColorLab.vue")));
    app.component("RoughMark", defineAsyncComponent(() => import("./components/lab/RoughMark.vue")));
    app.component("MotionCard", defineAsyncComponent(() => import("./components/lab/MotionCard.vue")));
  },
});

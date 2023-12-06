import { defineClientConfig } from "@vuepress/client";
import slot_share from "./layouts/slot-share.vue";

import "vuepress-theme-hope/presets/shinning-feature-panel.scss";

export default defineClientConfig({
  // enhance(context): void {
  // },
  layouts: { slot_share },
});

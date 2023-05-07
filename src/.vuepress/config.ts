import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "TopGeeky",
  description: "专注于技术分享, 面试宝典",

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});

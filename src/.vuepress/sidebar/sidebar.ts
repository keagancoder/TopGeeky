import { sidebar } from "vuepress-theme-hope";
import { interviewGuide } from "./interview";
export default sidebar({
  "/docs/interview": interviewGuide,
  "/": [
    {
      icon: "discover",
      text: "案例",
      prefix: "demo/",
      link: "demo/",
      children: "structure",
    },
    {
      text: "文档1",
      icon: "note",
      prefix: "guiasdde/",
      children: "structure",
    }
  ]
});

import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
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
  ],
  "/interview/interview-prepare": [
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
    },
    {
      text: "文档2",
      icon: "note",
      prefix: "guiasde/",
      children: "structure",
    },
    {
      text: "文档3",
      icon: "note",
      prefix: "guidase/",
      children: "structure",
    }
  ]
});

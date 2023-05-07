import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  { 
    text: "面试宝典", 
    icon: "discover", 
    link: "/docs/interview" },
  {
    text: "进阶之路",
    icon: "creative",
    prefix: "/progression",
    link: "/docs/progression"
  },
  {
    text: "学习路线",
    icon: "creative",
    children: [
      {
        text: "计算机网络",
        icon: "creative",
        prefix: "network/",
        link: "/docs/network"
      }
    ],
  },
  {
    text: "程序员软技能",
    icon: "creative",
    prefix: "softskill/",
    link: "/docs/softskill"
  },
]);

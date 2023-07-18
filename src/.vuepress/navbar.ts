import { navbar } from "vuepress-theme-hope";

export default navbar([
  { 
    text: "面试宝典", 
    icon: "discover", 
    link: "/docs/interview"
  },
  {
    text: "进阶之路",
    icon: "creative",
    prefix: "/progression",
    link: "/docs/progression"
  },
  {
    text: "程序员第一课",
    icon: "creative",
    prefix: "/first-hand",
    link: "/docs/first-hand"
  },
  {
    text: "Hello系列教程",
    icon: "creative",
    children: [
      {
        text: "Hello! 计算机组成原理",
        icon: "creative",
        prefix: "components/",
        link: "/docs/components"
      },
      {
        text: "Hello! 计算机网络",
        icon: "creative",
        prefix: "network/",
        link: "/docs/network"
      },
      {
        text: "Hello! 操作系统",
        icon: "creative",
        prefix: "os/",
        link: "/docs/os"
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

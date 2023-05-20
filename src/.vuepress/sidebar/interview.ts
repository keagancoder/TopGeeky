import { arraySidebar } from "vuepress-theme-hope";

export const interviewGuide = arraySidebar([
    {
        text: "面试准备",
        icon: "interview",
        collapsible: true,
        prefix: "preparation/",
        children: [
          "prepare-interview",
          "resume-guide",
          "key-points-of-interview",
          "interview-experience",
          "reverse-interview-and-hr-interview",
        ],
    }
])
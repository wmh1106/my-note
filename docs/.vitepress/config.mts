import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/my-note",
  title: "记录",
  description: "零散的知识",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Examples", link: "/markdown-examples" },
    ],

    sidebar: [
      {
        text: "前端",
        items: [
          { text: "HTML", link: "/前端/HTML" },
          {
            text: "CSS",
            link: "/前端/CSS",

            items: [{ text: "浮动", link: "/前端/CSS/浮动.md" }],
          },
        ],
      },
      {
        text: "后端",
        items: [
          { text: "Java", link: "/后端/Java" },
          { text: "Nginx", link: "/后端/Nginx" },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },
});

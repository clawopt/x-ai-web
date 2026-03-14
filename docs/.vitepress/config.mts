import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "ByteTech",
  description: "面向 AI 时代的计算机学习入口",
  lang: 'zh-CN',
  base: '/ops-scripts/',
  head: [
    ['link', { rel: 'icon', href: '/ops-scripts/favicon.ico' }],
    ['meta', { name: 'keywords', content: '计算机教程,编程学习,Java,C++,Git,AI,机器学习,深度学习,数据结构,算法' }],
    ['meta', { name: 'author', content: 'ByteTech' }],
    ['script', { src: 'https://cdn.tailwindcss.com' }],
    ['script', { src: 'https://code.iconify.design/3/3.1.1/iconify.min.js' }],
    ['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@300;400;500;700&display=swap' }],
  ],
  themeConfig: {
    logo: '🚀',
    siteTitle: 'ByteTech',
    search: { provider: 'local' },
    appearance: true,
    
    nav: [
      { text: '首页', link: '/' },
      { text: '计算机语言', link: '/计算机语言' },
      { text: '专业技能', link: '/专业技能' },
      { text: 'AI时代', link: '/AI时代' },
      { text: 'GitHub', link: 'https://github.com/clawopt/ops-scripts', icon: 'github' }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/clawopt/ops-scripts' }
    ],

    footer: {
      message: '探索 AI 时代的无限可能',
      copyright: '© 2026 ByteTech. 保留所有权利.'
    },

    sidebar: [
      {
        text: '💻 计算机语言',
        collapsed: false,
        items: [
          { text: '编程语言', link: '/计算机语言' },
          { text: '构建工具', link: '/计算机语言' }
        ]
      },
      {
        text: '🛠️ 专业技能',
        collapsed: false,
        items: [
          { text: '专业技能', link: '/专业技能' }
        ]
      },
      {
        text: '🤖 AI时代',
        collapsed: false,
        items: [
          { text: 'AI时代', link: '/AI时代' }
        ]
      }
    ]
  }
})

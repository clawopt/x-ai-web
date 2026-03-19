import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "x-AI教程",
  description: "让AI成为你的智能生产力",
  lang: 'zh-CN',
  base: '/x-ai-web/',
  appearance: false,
  head: [
    ['link', { rel: 'icon', href: '/x-ai-web/favicon.svg', type: 'image/svg+xml' }],
    ['meta', { name: 'keywords', content: 'AI教程,AI工具,AI赛道,AI案例,智能生产力' }],
    ['meta', { name: 'author', content: 'x-AI教程' }],
    ['script', { src: 'https://cdn.tailwindcss.com' }],
    ['script', { src: 'https://code.iconify.design/3/3.1.1/iconify.min.js' }],
    ['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@300;400;500;700&display=swap' }],
  ],
  themeConfig: {
    logo: 'X',
    siteTitle: 'x-AI教程',
    search: { provider: 'local' },
    
    nav: [
      { text: '首页', link: '/' },
      { 
        text: '视频图像', 
        items: [
          { text: '剪映AI教程', link: 'https://ai-bot.cn/app/10296.html' },
          { text: '即梦AI教程', link: 'https://jimengai.com/' },
          { text: 'Midjourney教程', link: 'https://www.midjourney.com/' },
          { text: 'StableDiffusion教程', link: 'https://stability.ai/' },
          { text: 'Runway教程', link: 'https://runwayml.com/' }
        ]
      },
      { 
        text: '高效工具', 
        items: [
          { text: 'DeepSeek教程', link: 'https://www.deepseek.com/' },
          { text: 'OpenClaw教程', link: 'https://github.com/OpenClaw' },
          { text: 'Trae教程', link: 'https://www.trae.ai/' },
          { text: 'Cursor教程', link: 'https://cursor.sh/' },
          { text: 'ClaudeCode教程', link: 'https://claude.ai/' }
        ]
      },
      { 
        text: '商业落地', 
        items: [
          { text: '漫剧短剧', link: '/drama-comic' },
          { text: '直播带货', link: '/digital-human' },
          { text: '副业变现', link: '/side-business' }
        ]
      },
      { text: '最新博客', link: '/blog' }
    ],

    footer: {
      message: '探索 AI 时代的无限可能',
      copyright: '© 2026 x-AI教程. 保留所有权利.'
    }
  }
})

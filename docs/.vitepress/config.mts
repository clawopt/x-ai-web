import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "x-AI教程",
  description: "让AI成为你的智能生产力",
  lang: 'zh-CN',
  base: '/x-ai-web/',
  appearance: false,
  head: [
    ['link', { rel: 'icon', href: '/x-ai-web/images/favicon.svg', type: 'image/svg+xml' }],
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
          { text: '剪映AI教程', link: '/capcut/' },
          { text: '即梦AI教程', link: '/dreamina/' },
          { text: 'Midjourney教程', link: '/midjourney/' },
          { text: 'StableDiffusion教程', link: '/sd/' },
          { text: 'Runway教程', link: '/runway/' }
        ]
      },
      { 
        text: '高效工具', 
        items: [
          { text: 'DeepSeek教程', link: '/deepseek/' },
          { text: 'OpenClaw教程', link: '/openclaw/' },
          { text: 'Trae教程', link: '/trae/' },
          { text: 'Cursor教程', link: '/cursor/' },
          { text: 'ClaudeCode教程', link: '/claude/' }
        ]
      },
      { 
        text: '商业落地', 
        items: [
          { text: '漫剧短剧', link: '/drama-comic/' },
          { text: '直播带货', link: '/digital-human/' },
          { text: '副业变现', link: '/side-business/' }
        ]
      },
      { text: '最新博客', link: '/blog' }
    ],

    footer: {
      message: '探索 AI 时代的无限可能',
      copyright: '© 2026 x-AI教程. 保留所有权利.'
    },

    sidebar: {
      '/capcut/': [
        {
          text: '剪映AI教程',
          collapsed: false,
          items: [
            { text: '工具介绍', link: '/capcut/' },
            { text: '学习教程', link: '/capcut/tutorial' },
            { text: '视频教程', link: '/capcut/videos' },
            { text: '实战项目', link: '/capcut/projects' }
          ]
        }
      ],
      '/dreamina/': [
        {
          text: '即梦AI教程',
          collapsed: false,
          items: [
            { text: '工具介绍', link: '/dreamina/' },
            { text: '学习教程', link: '/dreamina/tutorial' },
            { text: '视频教程', link: '/dreamina/videos' },
            { text: '实战项目', link: '/dreamina/projects' }
          ]
        }
      ],
      '/midjourney/': [
        {
          text: 'Midjourney教程',
          collapsed: false,
          items: [
            { text: '工具介绍', link: '/midjourney/' },
            { text: '学习教程', link: '/midjourney/tutorial' },
            { text: '视频教程', link: '/midjourney/videos' },
            { text: '实战项目', link: '/midjourney/projects' }
          ]
        }
      ],
      '/sd/': [
        {
          text: 'Stable Diffusion教程',
          collapsed: false,
          items: [
            { text: '工具介绍', link: '/sd/' },
            { text: '学习教程', link: '/sd/tutorial' },
            { text: '视频教程', link: '/sd/videos' },
            { text: '实战项目', link: '/sd/projects' }
          ]
        }
      ],
      '/runway/': [
        {
          text: 'Runway教程',
          collapsed: false,
          items: [
            { text: '工具介绍', link: '/runway/' },
            { text: '学习教程', link: '/runway/tutorial' },
            { text: '视频教程', link: '/runway/videos' },
            { text: '实战项目', link: '/runway/projects' }
          ]
        }
      ],
      '/deepseek/': [
        {
          text: 'DeepSeek教程',
          collapsed: false,
          items: [
            { text: '工具介绍', link: '/deepseek/' },
            { text: '学习教程', link: '/deepseek/tutorial' },
            { text: '视频教程', link: '/deepseek/videos' },
            { text: '实战项目', link: '/deepseek/projects' }
          ]
        }
      ],
      '/openclaw/': [
        {
          text: 'OpenClaw教程',
          collapsed: false,
          items: [
            { text: '工具介绍', link: '/openclaw/' },
            { text: '学习教程', link: '/openclaw/tutorial' },
            { text: '视频教程', link: '/openclaw/videos' },
            { text: '实战项目', link: '/openclaw/projects' }
          ]
        }
      ],
      '/trae/': [
        {
          text: 'Trae教程',
          collapsed: false,
          items: [
            { text: '工具介绍', link: '/trae/' },
            { text: '学习教程', link: '/trae/tutorial' },
            { text: '视频教程', link: '/trae/videos' },
            { text: '实战项目', link: '/trae/projects' }
          ]
        }
      ],
      '/cursor/': [
        {
          text: 'Cursor教程',
          collapsed: false,
          items: [
            { text: '工具介绍', link: '/cursor/' },
            { text: '学习教程', link: '/cursor/tutorial' },
            { text: '视频教程', link: '/cursor/videos' },
            { text: '实战项目', link: '/cursor/projects' }
          ]
        }
      ],
      '/claude/': [
        {
          text: 'Claude Code教程',
          collapsed: false,
          items: [
            { text: '工具介绍', link: '/claude/' },
            { text: '学习教程', link: '/claude/tutorial' },
            { text: '视频教程', link: '/claude/videos' },
            { text: '实战项目', link: '/claude/projects' }
          ]
        }
      ],
      '/drama-comic/': [
        {
          text: '短剧漫剧教程',
          collapsed: false,
          items: [
            { text: '工具介绍', link: '/drama-comic/' },
            { text: '学习教程', link: '/drama-comic/tutorial' },
            { text: '视频教程', link: '/drama-comic/videos' },
            { text: '实践项目', link: '/drama-comic/projects' }
          ]
        }
      ],
      '/digital-human/': [
        {
          text: '直播带货教程',
          collapsed: false,
          items: [
            { text: '工具介绍', link: '/digital-human/' },
            { text: '学习教程', link: '/digital-human/tutorial' },
            { text: '视频教程', link: '/digital-human/videos' },
            { text: '实践项目', link: '/digital-human/projects' }
          ]
        }
      ],
      '/side-business/': [
        {
          text: '副业变现教程',
          collapsed: false,
          items: [
            { text: '工具介绍', link: '/side-business/' },
            { text: '学习教程', link: '/side-business/tutorial' },
            { text: '视频教程', link: '/side-business/videos' },
            { text: '实践项目', link: '/side-business/projects' }
          ]
        }
      ]
    },

    outline: false
  }
})

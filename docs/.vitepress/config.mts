import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "OpsTools - 运维脚本库",
  description: "500+运维工具一键安装脚本库，支持Docker、NginxRedis、K3s、MySQL、等",
  lang: 'zh-CN',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'keywords', content: '运维脚本,Docker安装,Nginx安装,MySQL安装,Redis安装,1Panel,宝塔面板,K3s安装,Linux安装脚本,DevOps' }],
    ['meta', { name: 'author', content: 'clawopt' }],
  ],
  themeConfig: {
    logo: '⚡',
    siteTitle: 'OpsTools',
    search: { provider: 'local' },
    
    nav: [
      { text: '🏠 首页', link: '/' },
      { text: '📦 脚本分类', link: '/容器/' },
      { text: '⭐ GitHub', link: 'https://github.com/clawopt/ops-scripts' }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/clawopt/ops-scripts' }
    ],

    footer: {
      message: 'MIT License',
      copyright: '© 2026 OpsTools. Built with VitePress.'
    },

    sidebar: [
      {
        text: '🐳 容器',
        collapsed: false,
        items: [
          { text: 'Docker', link: '/容器/docker' },
          { text: 'Docker Compose', link: '/容器/docker-compose' },
          { text: 'K3s', link: '/容器/k3s' },
          { text: 'Portainer', link: '/容器/portainer' },
          { text: 'Podman', link: '/容器/podman' },
          { text: 'Containerd', link: '/容器/containerd' }
        ]
      },
      {
        text: '🌐 Web服务器',
        collapsed: false,
        items: [
          { text: 'Nginx', link: '/Web服务器/nginx' },
          { text: 'Caddy', link: '/Web服务器/caddy' },
          { text: 'Apache', link: '/Web服务器/apache2' },
          { text: 'Traefik', link: '/Web服务器/traefik' },
          { text: 'OpenResty', link: '/Web服务器/openresty' }
        ]
      },
      {
        text: '🗄️ 数据库',
        collapsed: false,
        items: [
          { text: 'MySQL', link: '/数据库/mysql' },
          { text: 'PostgreSQL', link: '/数据库/postgresql' },
          { text: 'Redis', link: '/数据库/redis' },
          { text: 'MongoDB', link: '/数据库/mongodb' },
          { text: 'ClickHouse', link: '/数据库/clickhouse' },
          { text: 'Elasticsearch', link: '/数据库/elasticsearch' }
        ]
      },
      {
        text: '🎛️ 面板工具',
        collapsed: false,
        items: [
          { text: '1Panel', link: '/面板工具/1panel' },
          { text: '宝塔面板', link: '/面板工具/baota' },
          { text: 'Nginx Proxy Manager', link: '/面板工具/nginx-proxy-manager' },
          { text: 'Cockpit', link: '/面板工具/cockpit' }
        ]
      },
      {
        text: '🔄 CI/CD',
        collapsed: false,
        items: [
          { text: 'Jenkins', link: '/CI_CD/jenkins' },
          { text: 'GitLab', link: '/CI_CD/gitlab' },
          { text: 'Argo CD', link: '/CI_CD/argo' },
          { text: 'Tekton', link: '/CI_CD/tekton' }
        ]
      },
      {
        text: '📊 监控运维',
        collapsed: false,
        items: [
          { text: 'Prometheus + Grafana', link: '/监控运维/prometheus-grafana' },
          { text: 'Zabbix', link: '/监控运维/zabbix' },
          { text: 'ELK', link: '/监控运维/elk' }
        ]
      },
      {
        text: '🌍 内网穿透',
        collapsed: false,
        items: [
          { text: 'frp', link: '/内网穿透/frps' },
          { text: 'nps', link: '/内网穿透/nps' },
          { text: 'ngrok', link: '/内网穿透/ngrok' }
        ]
      },
      {
        text: '📦 其他工具',
        collapsed: false,
        items: [
          { text: 'RabbitMQ', link: '/其他/rabbitmq' },
          { text: 'Node.js', link: '/其他/nodejs' },
          { text: 'Python', link: '/其他/python' },
          { text: 'Go', link: '/其他/go' }
        ]
      }
    ]
  }
})

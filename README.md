# 🚀 运维一键安装脚本库

> 常用运维/开发软件一键安装脚本，支持 Linux (Ubuntu/Debian/CentOS)

## 📦 包含软件 (20个)

### 🐳 容器
| 软件 | 描述 | 脚本 |
|------|------|------|
| Docker | 容器引擎 | [docker.sh](./容器/docker.sh) |
| Docker Compose | 容器编排 | [docker-compose.sh](./容器/docker-compose.sh) |
| K3s | 轻量级Kubernetes | [k3s.sh](./容器/k3s.sh) |
| Portainer | Docker可视化管理 | [portainer.sh](./容器/portainer.sh) |

### 🌐 Web服务器
| 软件 | 描述 | 脚本 |
|------|------|------|
| Nginx | 高性能HTTP服务器 | [nginx.sh](./Web服务器/nginx.sh) |
| Caddy | 自动HTTPS的Web服务器 | [caddy.sh](./Web服务器/caddy.sh) |

### 🗄️ 数据库
| 软件 | 描述 | 脚本 |
|------|------|------|
| MySQL 8.0 | 关系型数据库 | [mysql.sh](./数据库/mysql.sh) |
| PostgreSQL | 高级关系型数据库 | [postgresql.sh](./数据库/postgresql.sh) |
| Redis | 内存数据库 | [redis.sh](./数据库/redis.sh) |
| MongoDB 7.0 | NoSQL数据库 | [mongodb.sh](./数据库/mongodb.sh) |
| ClickHouse | 列式数据库 | [clickhouse.sh](./数据库/clickhouse.sh) |

### 🎛️ 面板工具
| 软件 | 描述 | 脚本 |
|------|------|------|
| 1Panel | 新一代Linux面板 | [1panel.sh](./面板工具/1panel.sh) |
| 宝塔面板 | 受欢迎的面板 | [baota.sh](./面板工具/baota.sh) |
| Nginx Proxy Manager | 反向代理管理 | [nginx-proxy-manager.sh](./面板工具/nginx-proxy-manager.sh) |

### 🔄 CI/CD
| 软件 | 描述 | 脚本 |
|------|------|------|
| Jenkins | 持续集成 | [jenkins.sh](./CI_CD/jenkins.sh) |
| GitLab | 代码仓库 | [gitlab.sh](./CI_CD/gitlab.sh) |

### 📊 监控运维
| 软件 | 描述 | 脚本 |
|------|------|------|
| Prometheus + Grafana | 监控 + 可视化 | [prometheus-grafana.sh](./监控运维/prometheus-grafana.sh) |
| Zabbix | 企业级监控 | [zabbix.sh](./监控运维/zabbix.sh) |

### 🌍 内网穿透
| 软件 | 描述 | 脚本 |
|------|------|------|
| frp | 内网穿透服务端 | [frps.sh](./内网穿透/frps.sh) |

### 📨 消息队列
| 软件 | 描述 | 脚本 |
|------|------|------|
| RabbitMQ | 消息队列 | [rabbitmq.sh](./其他/rabbitmq.sh) |

## 🚀 使用方法

```bash
# 1. 下载脚本
curl -fsSL https://raw.githubusercontent.com/你的用户名/ops-scripts/main/容器/docker.sh -o docker.sh

# 2. 添加执行权限
chmod +x docker.sh

# 3. 运行脚本
sudo ./docker.sh
```

## 📝 支持的系统

- ✅ Ubuntu 20.04+
- ✅ Debian 11+
- ✅ CentOS 7+
- ✅ Rocky Linux 8+

## 🤝 贡献

欢迎提交PR添加更多脚本！

## 📄 License

MIT License

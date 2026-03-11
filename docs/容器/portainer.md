# portainer.sh

```bash
#!/bin/bash
# Portainer 一键安装脚本 (Docker)

set -e

echo "=========================================="
echo "  Portainer 一键安装脚本"
echo "=========================================="

if [ "$EUID" -ne 0 ]; then
  echo "请使用root用户运行此脚本"
  exit 1
fi

# 检查Docker
echo "[1/3] 检查Docker..."
if ! command -v docker &> /dev/null; then
  echo "Docker未安装，正在安装Docker..."
  apt update && apt install -y docker.io
fi

# 创建数据目录
echo "[2/3] 创建数据目录..."
mkdir -p /opt/portainer/data /opt/portainer/portainer

# 启动Portainer
echo "[3/3] 启动Portainer..."
docker run -d \
  --name portainer \
  --restart=always \
  -p 9000:9000 \
  -p 8000:8000 \
  -v /var/run/docker.sock:/var/run/docker.sock \
  -v /opt/portainer/data:/data \
  portainer/portainer-ce:latest

echo ""
echo "=========================================="
echo "  Portainer 安装完成!"
echo "=========================================="
echo ""
echo "访问方式:"
echo "  面板地址: http://你的服务器IP:9000"
echo "  首次登录需要创建管理员账号"
echo ""
echo "常用命令:"
echo "  docker restart portainer       重启"
echo "  docker logs -f portainer      查看日志"
echo ""

```


---

[![Download Script](https://img.shields.io/badge/Download-Script-blue?style=flat-square)](https://raw.githubusercontent.com/clawopt/ops-scripts/main/容器/portainer.sh)

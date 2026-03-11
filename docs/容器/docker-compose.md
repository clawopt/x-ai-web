# docker-compose.sh

```bash
#!/bin/bash
# Docker Compose 一键安装脚本

set -e

echo "=========================================="
echo "  Docker Compose 一键安装脚本"
echo "=========================================="

if [ "$EUID" -ne 0 ]; then
  echo "请使用root用户运行此脚本"
  exit 1
fi

# 检查Docker
echo "[1/4] 检查Docker..."
if ! command -v docker &> /dev/null; then
  echo "请先安装Docker"
  exit 1
fi

# 获取最新版本
echo "[2/4] 获取最新版本..."
DOCKER_COMPOSE_VERSION=$(curl -s https://api.github.com/repos/docker/compose/releases/latest | grep -o '"tag_name": "v[^"]*' | cut -d'"' -f4 | sed 's/v//')
echo "最新版本: v${DOCKER_COMPOSE_VERSION}"

# 下载Docker Compose
echo "[3/4] 下载Docker Compose..."
curl -L "https://github.com/docker/compose/releases/download/v${DOCKER_COMPOSE_VERSION}/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
chmod +x /usr/local/bin/docker-compose

# 创建软链接
echo "[4/4] 创建软链接..."
ln -sf /usr/local/bin/docker-compose /usr/bin/docker-compose

# 验证
docker-compose --version

echo ""
echo "=========================================="
echo "  Docker Compose 安装完成!"
echo "=========================================="
echo ""
echo "常用命令:"
echo "  docker compose up -d           启动服务"
echo "  docker compose down            停止服务"
echo "  docker compose logs -f         查看日志"
echo "  docker compose ps              查看状态"
echo ""

```


---

[![Download Script](https://img.shields.io/badge/Download-Script-blue?style=flat-square)](https://raw.githubusercontent.com/clawopt/ops-scripts/main/容器/docker-compose.sh)

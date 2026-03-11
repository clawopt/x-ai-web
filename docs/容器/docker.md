# docker.sh

```bash
#!/bin/bash
# Docker 一键安装脚本 (Ubuntu/Debian)
# 支持: Ubuntu 20.04+ / Debian 11+

set -e

echo "=========================================="
echo "  Docker 一键安装脚本"
echo "=========================================="

# 检查是否为root用户
if [ "$EUID" -ne 0 ]; then
  echo "请使用root用户运行此脚本"
  exit 1
fi

# 更新系统
echo "[1/5] 更新系统包..."
apt update && apt upgrade -y

# 安装依赖
echo "[2/5] 安装依赖..."
apt install -y apt-transport-https ca-certificates curl gnupg lsb-release

# 添加Docker官方GPG密钥
echo "[3/5] 添加Docker官方GPG密钥..."
mkdir -p /etc/apt/keyrings
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | gpg --dearmor -o /etc/apt/keyrings/docker.gpg

# 添加Docker仓库
echo "[4/5] 添加Docker仓库..."
echo "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" | tee /etc/apt/sources.list.d/docker.list > /dev/null

# 安装Docker
echo "[5/5] 安装Docker..."
apt update
apt install -y docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin

# 启动Docker
systemctl start docker
systemctl enable docker

# 验证安装
docker --version
docker compose version

echo ""
echo "=========================================="
echo "  Docker 安装完成!"
echo "=========================================="
echo ""
echo "常用命令:"
echo "  docker run -d --name myapp nginx    运行容器"
echo "  docker ps                            查看运行中的容器"
echo "  docker compose up -d                 启动Docker Compose"
echo "  docker logs -f myapp                查看容器日志"
echo ""

```

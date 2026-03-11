# nginx-proxy-manager.sh

```bash
#!/bin/bash
# Nginx Proxy Manager 一键安装脚本 (Docker)

set -e

echo "=========================================="
echo "  Nginx Proxy Manager 一键安装脚本"
echo "=========================================="

if [ "$EUID" -ne 0 ]; then
  echo "请使用root用户运行此脚本"
  exit 1
fi

# 检查Docker
echo "[1/5] 检查Docker..."
if ! command -v docker &> /dev/null; then
  echo "Docker未安装，正在安装Docker..."
  apt update && apt install -y docker.io
fi

# 检查Docker Compose
echo "[2/5] 检查Docker Compose..."
if ! command -v docker compose &> /dev/null; then
  apt install -y docker-compose-plugin
fi

# 创建目录
echo "[3/5] 创建目录..."
mkdir -p /opt/nginx-proxy-manager
cd /opt/nginx-proxy-manager

# 创建docker-compose.yml
echo "[4/5] 创建配置文件..."
cat > docker-compose.yml << 'EOF'
version: '3.8'
services:
  app:
    image: 'jc21/nginx-proxy-manager:latest'
    restart: unless-stopped
    ports:
      - '80:80'
      - '443:443'
      - '81:81'
    environment:
      - DB_MYSQL_HOST=db
      - DB_MYSQL_PORT=3306
      - DB_MYSQL_USER=npm
      - DB_MYSQL_PASSWORD=npm
      - DB_MYSQL_NAME=npm
    volumes:
      - ./data:/data
      - ./letsencrypt:/etc/letsencrypt

  db:
    image: 'jc21/mariadb:latest'
    restart: unless-stopped
    environment:
      - MYSQL_ROOT_PASSWORD=npm
      - MYSQL_DATABASE=npm
      - MYSQL_USER=npm
      - MYSQL_PASSWORD=npm
    volumes:
      - ./mysql:/var/lib/mysql

networks:
  default:
    name: npm-network
EOF

# 启动
echo "[5/5] 启动Nginx Proxy Manager..."
docker compose up -d

echo ""
echo "=========================================="
echo "  Nginx Proxy Manager 安装完成!"
echo "=========================================="
echo ""
echo "访问方式:"
echo "  管理面板: http://你的服务器IP:81"
echo "  默认账号: admin@example.com"
echo "  默认密码: changeme"
echo ""
echo "首次登录后请立即修改密码!"
echo ""

```


---

[![Download Script](https://img.shields.io/badge/Download-Script-blue?style=flat-square)](https://raw.githubusercontent.com/clawopt/ops-scripts/main/面板工具/nginx-proxy-manager.sh)

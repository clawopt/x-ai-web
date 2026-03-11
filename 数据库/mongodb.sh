#!/bin/bash
# MongoDB 7.0 一键安装脚本 (Ubuntu)

set -e

echo "=========================================="
echo "  MongoDB 7.0 一键安装脚本"
echo "=========================================="

if [ "$EUID" -ne 0 ]; then
  echo "请使用root用户运行此脚本"
  exit 1
fi

# 安装依赖
echo "[1/5] 安装依赖..."
apt update
apt install -y curl gnupg

# 添加MongoDB GPG密钥
echo "[2/5] 添加MongoDB GPG密钥..."
curl -fsSL https://www.mongodb.org/static/pgp/server-7.0.asc | gpg --dearmor -o /usr/share/keyrings/mongodb-server-7.0.gpg

# 添加MongoDB仓库
echo "[3/5] 添加MongoDB仓库..."
echo "deb [ signed-by=/usr/share/keyrings/mongodb-server-7.0.gpg ] http://repo.mongodb.org/apt/debian bookworm/mongodb-org/7.0 main" | tee /etc/apt/sources.list.d/mongodb-org-7.0.list

# 安装MongoDB
echo "[4/5] 安装MongoDB..."
apt update
apt install -y mongodb-org

# 创建数据目录
mkdir -p /var/lib/mongodb
mkdir -p /var/log/mongodb
chown -R mongodb:mongodb /var/lib/mongodb /var/log/mongodb

# 配置MongoDB
echo "[5/5] 配置MongoDB..."
cat > /etc/mongod.conf << 'EOF'
net:
  port: 27017
  bindIp: 0.0.0.0

storage:
  dbPath: /var/lib/mongodb

systemLog:
  destination: file
  path: /var/log/mongodb/mongod.log
EOF

# 启动MongoDB
systemctl enable mongod
systemctl start mongod

echo ""
echo "=========================================="
echo "  MongoDB 安装完成!"
echo "=========================================="
echo ""
echo "常用命令:"
echo "  mongosh                     登录MongoDB"
echo "  systemctl status mongod      查看状态"
echo ""
echo "默认端口: 27017"
echo "配置文件: /etc/mongod.conf"
echo ""

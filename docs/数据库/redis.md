# redis.sh

```bash
#!/bin/bash
# Redis 一键安装脚本 (Ubuntu/Debian)

set -e

echo "=========================================="
echo "  Redis 一键安装脚本"
echo "=========================================="

if [ "$EUID" -ne 0 ]; then
  echo "请使用root用户运行此脚本"
  exit 1
fi

# 更新系统
echo "[1/5] 更新系统包..."
apt update && apt upgrade -y

# 安装Redis
echo "[2/5] 安装Redis..."
apt install -y redis-server

# 配置Redis
echo "[3/5] 配置Redis..."
cat > /etc/redis/redis.conf << 'EOF'
# 绑定地址 (0.0.0.0 允许远程连接)
bind 0.0.0.0
# 端口
port 6379
# 密码认证
requirepass your_redis_password
# 持久化 RDB
save 900 1
save 300 10
save 60 10000
# 最大内存
maxmemory 256mb
# 内存淘汰策略
maxmemory-policy allkeys-lru
EOF

# 启动Redis
echo "[4/5] 启动Redis..."
systemctl enable redis-server
systemctl restart redis-server

# 验证
echo "[5/5] 验证安装..."
redis-server --version

echo ""
echo "=========================================="
echo "  Redis 安装完成!"
echo "=========================================="
echo ""
echo "常用命令:"
echo "  redis-cli -a your_redis_password  登录"
echo "  redis-cli ping                     测试连接"
echo "  systemctl status redis-server      查看状态"
echo ""
echo "默认端口: 6379"
echo "配置文件: /etc/redis/redis.conf"
echo ""

```

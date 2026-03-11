#!/bin/bash
# Nginx 一键安装脚本 (Ubuntu/Debian)

set -e

echo "=========================================="
echo "  Nginx 一键安装脚本"
echo "=========================================="

if [ "$EUID" -ne 0 ]; then
  echo "请使用root用户运行此脚本"
  exit 1
fi

# 更新系统
echo "[1/4] 更新系统包..."
apt update && apt upgrade -y

# 安装Nginx
echo "[2/4] 安装Nginx..."
apt install -y nginx

# 启动Nginx
echo "[3/4] 启动Nginx..."
systemctl enable nginx
systemctl start nginx

# 验证
echo "[4/4] 验证安装..."
nginx -v

echo ""
echo "=========================================="
echo "  Nginx 安装完成!"
echo "=========================================="
echo ""
echo "常用命令:"
echo "  nginx -t                  测试配置"
echo "  nginx -s reload          重载配置"
echo "  systemctl restart nginx  重启Nginx"
echo "  systemctl status nginx   查看状态"
echo ""
echo "默认配置目录: /etc/nginx/"
echo "网站根目录: /var/www/html/"
echo ""

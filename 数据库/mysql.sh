#!/bin/bash
# MySQL 8.0 一键安装脚本 (Ubuntu/Debian)

set -e

echo "=========================================="
echo "  MySQL 8.0 一键安装脚本"
echo "=========================================="

if [ "$EUID" -ne 0 ]; then
  echo "请使用root用户运行此脚本"
  exit 1
fi

# 更新系统
echo "[1/6] 更新系统包..."
apt update && apt upgrade -y

# 安装MySQL
echo "[2/6] 安装MySQL Server..."
apt install -y mysql-server

# 初始化MySQL
echo "[3/6] 初始化MySQL..."
mysql_install_db --user=mysql --datadir=/var/lib/mysql

# 启动MySQL
echo "[4/6] 启动MySQL..."
systemctl enable mysql
systemctl start mysql

# 安全设置
echo "[5/6] 安全设置..."
mysql_secure_installation <<EOF

n
y
y
y
y
EOF

# 验证
echo "[6/6] 验证安装..."
mysql --version

echo ""
echo "=========================================="
echo "  MySQL 安装完成!"
echo "=========================================="
echo ""
echo "常用命令:"
echo "  mysql -u root -p              登录MySQL"
echo "  systemctl status mysql         查看状态"
echo "  systemctl restart mysql        重启"
echo ""
echo "默认端口: 3306"
echo "数据目录: /var/lib/mysql/"
echo ""

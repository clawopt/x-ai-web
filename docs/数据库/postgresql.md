# postgresql.sh

```bash
#!/bin/bash
# PostgreSQL 一键安装脚本 (Ubuntu/Debian)

set -e

echo "=========================================="
echo "  PostgreSQL 一键安装脚本"
echo "=========================================="

if [ "$EUID" -ne 0 ]; then
  echo "请使用root用户运行此脚本"
  exit 1
fi

# 更新系统
echo "[1/5] 更新系统包..."
apt update && apt upgrade -y

# 安装PostgreSQL
echo "[2/5] 安装PostgreSQL..."
apt install -y postgresql postgresql-contrib

# 启动PostgreSQL
echo "[3/5] 启动PostgreSQL..."
systemctl enable postgresql
systemctl start postgresql

# 配置远程连接
echo "[4/5] 配置远程连接..."
cat >> /etc/postgresql/16/main/pg_hba.conf << 'EOF'
# 允许远程连接
host all all 0.0.0.0/0 md5
EOF

sed -i "s/#listen_addresses = 'localhost'/listen_addresses = '*'/" /etc/postgresql/16/main/postgresql.conf

# 重启
echo "[5/5] 重启PostgreSQL..."
systemctl restart postgresql

echo ""
echo "=========================================="
echo "  PostgreSQL 安装完成!"
echo "=========================================="
echo ""
echo "常用命令:"
echo "  sudo -u postgres psql     登录PostgreSQL"
echo "  systemctl status postgresql  查看状态"
echo ""
echo "默认端口: 5432"
echo "默认用户: postgres"
echo "配置文件: /etc/postgresql/16/main/"
echo ""

```


---

[![Download Script](https://img.shields.io/badge/Download-Script-blue?style=flat-square)](https://raw.githubusercontent.com/clawopt/ops-scripts/main/数据库/postgresql.sh)

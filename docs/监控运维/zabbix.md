# zabbix.sh

```bash
#!/bin/bash
# Zabbix 6.0 一键安装脚本 (Ubuntu/Debian)

set -e

echo "=========================================="
echo "  Zabbix 6.0 一键安装脚本"
echo "=========================================="

if [ "$EUID" -ne 0 ]; then
  echo "请使用root用户运行此脚本"
  exit 1
fi

# 安装依赖
echo "[1/6] 安装依赖..."
apt update
apt install -y wget curl

# 添加Zabbix仓库
echo "[2/6] 添加Zabbix仓库..."
wget https://repo.zabbix.com/zabbix-release_6.0-2+ubuntu$(lsb_release -rs)+all.deb
dpkg -i zabbix-release_6.0-2+ubuntu$(lsb_release -rs)+all.deb
apt update

# 安装Zabbix
echo "[3/6] 安装Zabbix..."
apt install -y zabbix-server-mysql zabbix-frontend-php zabbix-apache-conf zabbix-agent

# 配置数据库
echo "[4/6] 配置数据库..."
apt install -y mariadb-server
systemctl enable mariadb
systemctl start mariadb

mysql -e "create database zabbix character set utf8mb4 collate utf8mb4_bin;"
mysql -e "create user 'zabbix'@'localhost' identified by 'zabbix';"
mysql -e "grant all privileges on zabbix.* to 'zabbix'@'localhost';"
mysql -e "set global log_bin_trust_function_creators = 1;"

zcat /usr/share/zabbix-sql-scripts/mysql/server.sql.gz | mysql -uzabbix -pzabbix zabbix
mysql -e "set global log_bin_trust_function_creators = 0;"

# 配置Zabbix
echo "[5/6] 配置Zabbix..."
sed -i "s/# DBPassword=/DBPassword=zabbix/" /etc/zabbix/zabbix_server.conf

cat > /etc/zabbix/web/zabbix.conf.php << 'EOF'
<?php
$DB['TYPE']     = 'MYSQL';
$DB['SERVER']   = 'localhost';
$DB['PORT']     = '3306';
$DB['DATABASE'] = 'zabbix';
$DB['USER']     = 'zabbix';
$DB['PASSWORD'] = 'zabbix';
$ZBX_SERVER      = 'localhost';
$ZBX_SERVER_PORT = '10051';
$ZBX_SERVER_NAME = 'Zabbix Server';
EOF

# 启动服务
echo "[6/6] 启动服务..."
systemctl enable zabbix-server zabbix-agent apache2
systemctl start zabbix-server zabbix-agent apache2

echo ""
echo "=========================================="
echo "  Zabbix 安装完成!"
echo "=========================================="
echo ""
echo "访问方式:"
echo "  面板地址: http://你的服务器IP/zabbix"
echo "  默认账号: Admin / zabbix"
echo ""
echo "数据库配置:"
echo "  数据库: zabbix"
echo "  用户: zabbix"
echo "  密码: zabbix"
echo ""

```


---

[![Download Script](https://img.shields.io/badge/Download-Script-blue?style=flat-square)](https://raw.githubusercontent.com/clawopt/ops-scripts/main/监控运维/zabbix.sh)

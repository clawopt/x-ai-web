# clickhouse.sh

```bash
#!/bin/bash
# ClickHouse 一键安装脚本 (Ubuntu/Debian)

set -e

echo "=========================================="
echo "  ClickHouse 一键安装脚本"
echo "=========================================="

if [ "$EUID" -ne 0 ]; then
  echo "请使用root用户运行此脚本"
  exit 1
fi

# 安装依赖
echo "[1/5] 安装依赖..."
apt update
apt install -y apt-transport-https ca-certificates dirmngr

# 添加ClickHouse GPG密钥
echo "[2/5] 添加ClickHouse GPG密钥..."
apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 8919F6BD2B48D754

# 添加ClickHouse仓库
echo "[3/5] 添加ClickHouse仓库..."
echo "deb https://packages.clickhouse.com/deb stable main" | tee /etc/apt/sources.list.d/clickhouse.list

# 安装ClickHouse
echo "[4/5] 安装ClickHouse..."
apt update
apt install -y clickhouse-server clickhouse-client

# 启动ClickHouse
echo "[5/5] 启动ClickHouse..."
systemctl enable clickhouse-server
systemctl start clickhouse-server

echo ""
echo "=========================================="
echo "  ClickHouse 安装完成!"
echo "=========================================="
echo ""
echo "常用命令:"
echo "  clickhouse-client             登录ClickHouse"
echo "  clickhouse-server             启动服务"
echo "  systemctl status clickhouse-server"
echo ""
echo "默认端口: 8123 (HTTP) / 9000 (Native)"
echo "配置文件: /etc/clickhouse-server/"
echo ""

```


---

[![Download Script](https://img.shields.io/badge/Download-Script-blue?style=flat-square)](https://raw.githubusercontent.com/clawopt/ops-scripts/main/数据库/clickhouse.sh)

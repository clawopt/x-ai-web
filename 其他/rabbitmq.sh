#!/bin/bash
# RabbitMQ 一键安装脚本 (Ubuntu/Debian)

set -e

echo "=========================================="
echo "  RabbitMQ 一键安装脚本"
echo "=========================================="

if [ "$EUID" -ne 0 ]; then
  echo "请使用root用户运行此脚本"
  exit 1
fi

# 安装依赖
echo "[1/5] 安装依赖..."
apt update
apt install -y curl wget gnupg

# 添加Erlang仓库
echo "[2/5] 添加Erlang仓库..."
wget -q -O /usr/share/keyrings/rabbitmq-erlang.gpg https://packagecloud.io/rabbitmq/erlang/gpgkey
echo "deb [signed-by=/usr/share/keyrings/rabbitmq-erlang.gpg] https://packagecloud.io/rabbitmq/erlang/debian $(lsb_release -cs) main" | tee /etc/apt/sources.list.d/rabbitmq-erlang.list

# 添加RabbitMQ仓库
echo "[3/5] 添加RabbitMQ仓库..."
wget -q -O /usr/share/keyrings/rabbitmq.gpg https://packagecloud.io/rabbitmq/rabbitmq-server/gpgkey
echo "deb [signed-by=/usr/share/keyrings/rabbitmq.gpg] https://packagecloud.io/rabbitmq/rabbitmq-server/debian $(lsb_release -cs) main" | tee /etc/apt/sources.list.d/rabbitmq.list

# 安装RabbitMQ
echo "[4/5] 安装RabbitMQ..."
apt update
apt install -y erlang-base erlang-dev erlang-parsetools erlang-syntax-tools
apt install -y rabbitmq-server

# 启动RabbitMQ
echo "[5/5] 启动RabbitMQ..."
systemctl enable rabbitmq-server
systemctl start rabbitmq-server

# 启用管理插件
rabbitmq-plugins enable rabbitmq_management

echo ""
echo "=========================================="
echo "  RabbitMQ 安装完成!"
echo "=========================================="
echo ""
echo "常用命令:"
echo "  rabbitmqctl status              查看状态"
echo "  rabbitmqctl add_user admin admin  创建用户"
echo "  rabbitmqctl set_permissions -p / admin \".*\" \".*\" \".*\"  授权"
echo ""
echo "访问方式:"
echo "  管理面板: http://你的服务器IP:15672"
echo "  默认端口: 5672"
echo ""

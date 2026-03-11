#!/bin/bash
# frp 内网穿透一键安装脚本 (服务端)

set -e

echo "=========================================="
echo "  frp 内网穿透服务端一键安装脚本"
echo "=========================================="

if [ "$EUID" -ne 0 ]; then
  echo "请使用root用户运行此脚本"
  exit 1
fi

# 获取最新版本
echo "[1/5] 获取frp最新版本..."
FRP_VERSION=$(curl -s https://api.github.com/repos/fatedier/frp/releases/latest | grep -o '"tag_name": "v[^"]*' | cut -d'"' -f4 | sed 's/v//')
echo "最新版本: v${FRP_VERSION}"

# 下载frp
echo "[2/5] 下载frp..."
cd /tmp
wget -q https://github.com/fatedier/frp/releases/download/v${FRP_VERSION}/frp_${FRP_VERSION}_linux_amd64.tar.gz
tar xvf frp_${FRP_VERSION}_linux_amd64.tar.gz
cd frp_${FRP_VERSION}_linux_amd64

# 安装frp
echo "[3/5] 安装frp..."
cp frps /usr/local/bin/
mkdir -p /etc/frp
cp frps.ini /etc/frp/

# 配置frps服务
echo "[4/5] 配置frps服务..."
cat > /etc/systemd/system/frps.service << 'EOF'
[Unit]
Description=FRP Server
After=network.target

[Service]
ExecStart=/usr/local/bin/frps -c /etc/frp/frps.ini
Restart=on-failure
RestartSec=5s

[Install]
WantedBy=multi-user.target
EOF

# 启动frp
echo "[5/5] 启动frp..."
systemctl enable frps
systemctl start frps

echo ""
echo "=========================================="
echo "  frp 服务端 安装完成!"
echo "=========================================="
echo ""
echo "服务端配置: /etc/frp/frps.ini"
echo ""
echo "客户端配置示例:"
echo "  [common]"
echo "  server_addr = 你的服务器IP"
echo "  server_port = 7000"
echo "  token = your_token"
echo ""
echo "  [ssh]"
echo "  type = tcp"
echo "  local_ip = 127.0.0.1"
echo "  local_port = 22"
echo "  remote_port = 6000"
echo ""

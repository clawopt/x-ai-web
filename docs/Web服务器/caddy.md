# caddy.sh

```bash
#!/bin/bash
# Caddy 一键安装脚本 (Ubuntu/Debian)

set -e

echo "=========================================="
echo "  Caddy Web Server 一键安装脚本"
echo "=========================================="

if [ "$EUID" -ne 0 ]; then
  echo "请使用root用户运行此脚本"
  exit 1
fi

# 安装依赖
echo "[1/4] 安装依赖..."
apt update
apt install -y debian-keyring debian-archive-keyring apt-transport-https curl

# 添加Caddy仓库
echo "[2/4] 添加Caddy仓库..."
curl -1sLf 'https://dl.cloudsmith.io/public/caddy/stable/gpg.key' | gpg --dearmor -o /usr/share/keyrings/caddy-stable-archive-keyring.gpg
curl -1sLf 'https://dl.cloudsmith.io/public/caddy/stable/debian-version-pool.gpg' | gpg --dearmor -o /usr/share/keyrings/caddy-stable-deb-version-pool.gpg
echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/caddy-stable-archive-keyring.gpg] https://dl.cloudsmith.io/public/caddy/stable/debian any-version stable" | tee /etc/apt/sources.list.d/caddy-stable.list

# 安装Caddy
echo "[3/4] 安装Caddy..."
apt update
apt install -y caddy

# 启动Caddy
echo "[4/4] 启动Caddy..."
systemctl enable caddy
systemctl start caddy

echo ""
echo "=========================================="
echo "  Caddy 安装完成!"
echo "=========================================="
echo ""
echo "常用命令:"
echo "  caddy validate              验证配置"
echo "  caddy reload                重载配置"
echo "  systemctl restart caddy     重启"
echo ""
echo "访问方式:"
echo "  面板地址: http://你的服务器IP:2019"
echo "  网站根目录: /var/www/html/"
echo "  配置目录: /etc/caddy/"
echo ""

```

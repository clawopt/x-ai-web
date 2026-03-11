# 1panel.sh

```bash
#!/bin/bash
# 1Panel 一键安装脚本 (Linux)

set -e

echo "=========================================="
echo "  1Panel 一键安装脚本"
echo "=========================================="

if [ "$EUID" -ne 0 ]; then
  echo "请使用root用户运行此脚本"
  exit 1
fi

# 检查系统
echo "[1/6] 检查系统环境..."
if [ ! -f /etc/os-release ]; then
  echo "不支持此操作系统"
  exit 1
fi

. /etc/os-release
if [ "$ID" != "ubuntu" ] && [ "$ID" != "debian" ] && [ "$ID" != "centos" ] && [ "$ID" != "rocky" ]; then
  echo "不支持的操作系统: $ID"
  echo "支持: Ubuntu / Debian / CentOS / Rocky Linux"
  exit 1
fi

echo "检测到系统: $PRETTY_NAME"

# 安装依赖
echo "[2/6] 安装依赖..."
if [ "$ID" == "ubuntu" ] || [ "$ID" == "debian" ]; then
  apt update
  apt install -y curl wget
else
  yum install -y curl wget
fi

# 下载安装脚本
echo "[3/6] 下载1Panel安装脚本..."
curl -sSL https://get.1panel.cn -o /tmp/1panel.sh

# 运行时指定参数（非交互式安装）
echo "[4/6] 运行安装脚本..."
bash /tmp/1panel.sh <<EOF
y
y
EOF

# 获取安装信息
echo "[5/6] 获取安装信息..."
if [ -f /opt/1panel/password ]; then
  echo ""
  echo "=========================================="
  echo "  1Panel 安装完成!"
  echo "=========================================="
  echo ""
  cat /opt/1panel/password
  echo ""
fi

echo "[6/6] 完成!"
echo ""
echo "访问方式:"
echo "  面板地址: http://你的服务器IP:随机端口"
echo "  用户名: admin"
echo "  密码: 请查看 /opt/1panel/password"
echo ""

```


---

[![Download Script](https://img.shields.io/badge/Download-Script-blue?style=flat-square)](https://raw.githubusercontent.com/clawopt/ops-scripts/main/面板工具/1panel.sh)

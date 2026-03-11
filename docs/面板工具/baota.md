# baota.sh

```bash
#!/bin/bash
# 宝塔面板一键安装脚本 (CentOS/Rocky/Alibaba Cloud)

set -e

echo "=========================================="
echo "  宝塔面板一键安装脚本"
echo "=========================================="

if [ "$EUID" -ne 0 ]; then
  echo "请使用root用户运行此脚本"
  exit 1
fi

# 检查系统
echo "[1/5] 检查系统环境..."
if [ ! -f /etc/os-release ]; then
  echo "不支持此操作系统"
  exit 1
fi

. /etc/os-release
if [ "$ID" != "centos" ] && [ "$ID" != "rocky" ] && [ "$ID" != "alma" ] && [ "$ID" != "ubuntu" ] && [ "$ID" != "debian" ]; then
  echo "不支持的操作系统: $ID"
  echo "支持: CentOS / Rocky / AlmaLinux / Ubuntu / Debian"
  exit 1
fi

echo "检测到系统: $PRETTY_NAME"

# 安装依赖
echo "[2/5] 安装依赖..."
if [ "$ID" == "centos" ] || [ "$ID" == "rocky" ] || [ "$ID" == "alma" ]; then
  yum install -y wget
else
  apt update && apt install -y wget
fi

# 下载安装脚本
echo "[3/5] 下载宝塔安装脚本..."
if [ "$ID" == "centos" ] || [ "$ID" == "rocky" ] || [ "$ID" == "alma" ]; then
  wget -O /tmp/btpanel.sh https://download.bt.cn/install/install_panel.sh
else
  wget -O /tmp/btpanel.sh https://download.bt.cn/install/install_panel.sh
fi

# 运行安装（默认安装）
echo "[4/5] 运行安装脚本..."
echo "y" | bash /tmp/btpanel.sh

# 获取安装信息
echo "[5/5] 获取安装信息..."
echo ""
echo "=========================================="
echo "  宝塔面板 安装完成!"
echo "=========================================="
echo ""
echo "请等待1-2分钟面板配置完成..."
echo ""
echo "访问方式:"
echo "  面板地址: http://你的服务器IP:8888"
echo "  用户名: admin"
echo "  密码: 请运行以下命令查看:"
echo "    bt default"
echo ""

```

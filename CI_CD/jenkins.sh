#!/bin/bash
# Jenkins 一键安装脚本 (Ubuntu/Debian)

set -e

echo "=========================================="
echo "  Jenkins 一键安装脚本"
echo "=========================================="

if [ "$EUID" -ne 0 ]; then
  echo "请使用root用户运行此脚本"
  exit 1
fi

# 更新系统
echo "[1/6] 更新系统包..."
apt update && apt upgrade -y

# 安装Java
echo "[2/6] 安装Java..."
apt install -y openjdk-17-jdk

# 添加Jenkins仓库
echo "[3/6] 添加Jenkins仓库..."
wget -q -O - https://pkg.jenkins.io/debian/jenkins.io.key | apt-key add -
sh -c 'echo deb http://pkg.jenkins.io/debian binary/ > /etc/apt/sources.list.d/jenkins.list'

# 安装Jenkins
echo "[4/6] 安装Jenkins..."
apt update
apt install -y jenkins

# 启动Jenkins
echo "[5/6] 启动Jenkins..."
systemctl enable jenkins
systemctl start jenkins

# 获取初始密码
echo "[6/6] 获取初始密码..."
echo ""
echo "=========================================="
echo "  Jenkins 安装完成!"
echo "=========================================="
echo ""
echo "常用命令:"
echo "  systemctl status jenkins   查看状态"
echo "  systemctl restart jenkins 重启"
echo ""
echo "访问方式:"
echo "  面板地址: http://你的服务器IP:8080"
echo "  初始密码: $(cat /var/lib/jenkins/secrets/initialAdminPassword)"
echo ""

# gitlab.sh

```bash
#!/bin/bash
# GitLab CE 一键安装脚本 (Ubuntu/Debian)

set -e

echo "=========================================="
echo "  GitLab CE 一键安装脚本"
echo "=========================================="

if [ "$EUID" -ne 0 ]; then
  echo "请使用root用户运行此脚本"
  exit 1
fi

# 更新系统
echo "[1/6] 更新系统包..."
apt update && apt upgrade -y

# 安装依赖
echo "[2/6] 安装依赖..."
apt install -y curl openssh-server ca-certificates tzdata perl

# 添加GitLab仓库
echo "[3/6] 添加GitLab仓库..."
curl -fsSL https://packages.gitlab.com/install/repositories/gitlab/gitlab-ce/script.deb.sh | bash

# 安装GitLab
echo "[4/6] 安装GitLab..."
apt install -y gitlab-ce

# 配置GitLab
echo "[5/6] 配置GitLab..."
gitlab-ctl reconfigure

# 启动GitLab
echo "[6/6] 启动GitLab..."
gitlab-ctl start

echo ""
echo "=========================================="
echo "  GitLab 安装完成!"
echo "=========================================="
echo ""
echo "常用命令:"
echo "  gitlab-ctl status          查看状态"
echo "  gitlab-ctl restart        重启"
echo "  gitlab-ctl reconfigure    重新配置"
echo ""
echo "访问方式:"
echo "  面板地址: http://你的服务器IP"
echo "  首次访问需要设置管理员密码"
echo ""
echo "配置文件: /etc/gitlab/gitlab.rb"

```


---

[![Download Script](https://img.shields.io/badge/Download-Script-blue?style=flat-square)](https://raw.githubusercontent.com/clawopt/ops-scripts/main/CI_CD/gitlab.sh)

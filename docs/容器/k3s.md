# k3s.sh

```bash
#!/bin/bash
# K3s (轻量级Kubernetes) 一键安装脚本

set -e

echo "=========================================="
echo "  K3s 一键安装脚本"
echo "=========================================="

if [ "$EUID" -ne 0 ]; then
  echo "请使用root用户运行此脚本"
  exit 1
fi

# 安装K3s
echo "[1/3] 安装K3s..."
curl -sfL https://get.k3s.io | INSTALL_K3S_EXEC="--disable=traefik" sh -

# 等待K3s启动
echo "[2/3] 等待K3s启动..."
sleep 5

# 获取节点信息
echo "[3/3] 获取K3s信息..."
echo ""
echo "=========================================="
echo "  K3s 安装完成!"
echo "=========================================="
echo ""
echo "常用命令:"
echo "  kubectl get nodes              查看节点"
echo "  kubectl get pods -A           查看所有Pod"
echo "  kubectl get svc -A            查看服务"
echo ""
echo "配置文件:"
echo "  /etc/rancher/k3s/k3s.yaml"
echo ""
echo "Master节点Token:"
cat /var/lib/rancher/k3s/server/node-token
echo ""
echo ""
echo "如需加入其他节点，运行以下命令:"
echo "  curl -sfL https://get.k3s.io | K3S_URL=https://master_ip:6443 K3S_TOKEN=NODE_TOKEN sh -"
echo ""

```

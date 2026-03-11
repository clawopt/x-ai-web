#!/bin/bash
# Prometheus + Grafana 一键安装脚本 (Ubuntu/Debian)

set -e

echo "=========================================="
echo "  Prometheus + Grafana 一键安装脚本"
echo "=========================================="

if [ "$EUID" -ne 0 ]; then
  echo "请使用root用户运行此脚本"
  exit 1
fi

# 更新系统
echo "[1/8] 更新系统包..."
apt update && apt upgrade -y

# 安装Node Exporter依赖
echo "[2/8] 安装基础依赖..."
apt install -y wget curl

# 安装Prometheus
echo "[3/8] 安装Prometheus..."
useradd --no-create-home --shell /bin/false prometheus
mkdir -p /etc/prometheus /var/lib/prometheus
cd /tmp
wget https://github.com/prometheus/prometheus/releases/download/v2.47.0/prometheus-2.47.0.linux-amd64.tar.gz
tar xvf prometheus-2.47.0.linux-amd64.tar.gz
cp prometheus-2.47.0.linux-amd64/prometheus /usr/local/bin/
cp prometheus-2.47.0.linux-amd64/promtool /usr/local/bin/
cp -r prometheus-2.47.0.linux-amd64/consoles /etc/prometheus/
cp -r prometheus-2.47.0.linux-amd64/console_libraries /etc/prometheus/

# 配置Prometheus
echo "[4/8] 配置Prometheus..."
cat > /etc/prometheus/prometheus.yml << 'EOF'
global:
  scrape_interval: 15s

scrape_configs:
  - job_name: 'prometheus'
    static_configs:
      - targets: ['localhost:9090']
  - job_name: 'node'
    static_configs:
      - targets: ['localhost:9100']
EOF

# 创建Systemd服务
echo "[5/8] 创建Systemd服务..."
cat > /etc/systemd/system/prometheus.service << 'EOF'
[Unit]
Description=Prometheus
After=network.target

[Service]
User=prometheus
ExecStart=/usr/local/bin/prometheus --config.file=/etc/prometheus/prometheus.yml --storage.tsdb.path=/var/lib/prometheus
Restart=on-failure

[Install]
WantedBy=multi-user.target
EOF

# 安装Node Exporter
echo "[6/8] 安装Node Exporter..."
wget https://github.com/prometheus/node_exporter/releases/download/v1.6.1/node_exporter-1.6.1.linux-amd64.tar.gz
tar xvf node_exporter-1.6.1.linux-amd64.tar.gz
cp node_exporter-1.6.1.linux-amd64/node_exporter /usr/local/bin/

cat > /etc/systemd/system/node_exporter.service << 'EOF'
[Unit]
Description=Node Exporter
After=network.target

[Service]
ExecStart=/usr/local/bin/node_exporter
Restart=on-failure

[Install]
WantedBy=multi-user.target
EOF

# 安装Grafana
echo "[7/8] 安装Grafana..."
wget -q -O /usr/local/bin/grafana-repo https://packages.grafana.com/gpg.key
apt-key add /usr/local/bin/grafana-repo
echo "deb https://packages.grafana.com/oss/deb stable main" > /etc/apt/sources.list.d/grafana.list
apt update
apt install -y grafana

# 启动服务
echo "[8/8] 启动服务..."
systemctl daemon-reload
systemctl enable prometheus node_exporter grafana-server
systemctl start prometheus node_exporter grafana-server

echo ""
echo "=========================================="
echo "  Prometheus + Grafana 安装完成!"
echo "=========================================="
echo ""
echo "访问方式:"
echo "  Prometheus: http://你的服务器IP:9090"
echo "  Grafana:   http://你的服务器IP:3000"
echo "  默认账号: admin / admin"
echo ""

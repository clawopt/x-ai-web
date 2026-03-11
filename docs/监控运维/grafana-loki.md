# grafana-loki.sh

```bash
#!/bin/bash
# Install grafana-loki
# Description: Auto-generated install script for grafana-loki

echo "Installing grafana-loki..."

if [ -x "$(command -v apt-get)" ]; then
    sudo apt-get update
    sudo apt-get install -y grafana-loki
elif [ -x "$(command -v yum)" ]; then
    sudo yum install -y grafana-loki
elif [ -x "$(command -v dnf)" ]; then
    sudo dnf install -y grafana-loki
elif [ -x "$(command -v apk)" ]; then
    sudo apk add grafana-loki
else
    echo "Unsupported package manager. Please install grafana-loki manually."
    exit 1
fi

```


---

[![Download Script](https://img.shields.io/badge/Download-Script-blue?style=flat-square)](https://raw.githubusercontent.com/clawopt/ops-scripts/main/监控运维/grafana-loki.sh)

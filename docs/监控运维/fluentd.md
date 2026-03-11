# fluentd.sh

```bash
#!/bin/bash
# Install fluentd
# Description: Auto-generated install script for fluentd

echo "Installing fluentd..."

if [ -x "$(command -v apt-get)" ]; then
    sudo apt-get update
    sudo apt-get install -y fluentd
elif [ -x "$(command -v yum)" ]; then
    sudo yum install -y fluentd
elif [ -x "$(command -v dnf)" ]; then
    sudo dnf install -y fluentd
elif [ -x "$(command -v apk)" ]; then
    sudo apk add fluentd
else
    echo "Unsupported package manager. Please install fluentd manually."
    exit 1
fi

```


---

[![Download Script](https://img.shields.io/badge/Download-Script-blue?style=flat-square)](https://raw.githubusercontent.com/clawopt/ops-scripts/main/监控运维/fluentd.sh)

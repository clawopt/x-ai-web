# alertmanager.sh

```bash
#!/bin/bash
# Install alertmanager
# Description: Auto-generated install script for alertmanager

echo "Installing alertmanager..."

if [ -x "$(command -v apt-get)" ]; then
    sudo apt-get update
    sudo apt-get install -y alertmanager
elif [ -x "$(command -v yum)" ]; then
    sudo yum install -y alertmanager
elif [ -x "$(command -v dnf)" ]; then
    sudo dnf install -y alertmanager
elif [ -x "$(command -v apk)" ]; then
    sudo apk add alertmanager
else
    echo "Unsupported package manager. Please install alertmanager manually."
    exit 1
fi

```


---

[![Download Script](https://img.shields.io/badge/Download-Script-blue?style=flat-square)](https://raw.githubusercontent.com/clawopt/ops-scripts/main/监控运维/alertmanager.sh)

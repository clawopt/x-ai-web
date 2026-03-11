# vestacp.sh

```bash
#!/bin/bash
# Install vestacp
# Description: Auto-generated install script for vestacp

echo "Installing vestacp..."

if [ -x "$(command -v apt-get)" ]; then
    sudo apt-get update
    sudo apt-get install -y vestacp
elif [ -x "$(command -v yum)" ]; then
    sudo yum install -y vestacp
elif [ -x "$(command -v dnf)" ]; then
    sudo dnf install -y vestacp
elif [ -x "$(command -v apk)" ]; then
    sudo apk add vestacp
else
    echo "Unsupported package manager. Please install vestacp manually."
    exit 1
fi

```


---

[![Download Script](https://img.shields.io/badge/Download-Script-blue?style=flat-square)](https://raw.githubusercontent.com/clawopt/ops-scripts/main/面板工具/vestacp.sh)

# nps.sh

```bash
#!/bin/bash
# Install nps
# Description: Auto-generated install script for nps

echo "Installing nps..."

if [ -x "$(command -v apt-get)" ]; then
    sudo apt-get update
    sudo apt-get install -y nps
elif [ -x "$(command -v yum)" ]; then
    sudo yum install -y nps
elif [ -x "$(command -v dnf)" ]; then
    sudo dnf install -y nps
elif [ -x "$(command -v apk)" ]; then
    sudo apk add nps
else
    echo "Unsupported package manager. Please install nps manually."
    exit 1
fi

```


---

[![Download Script](https://img.shields.io/badge/Download-Script-blue?style=flat-square)](https://raw.githubusercontent.com/clawopt/ops-scripts/main/内网穿透/nps.sh)

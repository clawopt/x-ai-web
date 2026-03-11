# ats.sh

```bash
#!/bin/bash
# Install ats
# Description: Auto-generated install script for ats

echo "Installing ats..."

if [ -x "$(command -v apt-get)" ]; then
    sudo apt-get update
    sudo apt-get install -y ats
elif [ -x "$(command -v yum)" ]; then
    sudo yum install -y ats
elif [ -x "$(command -v dnf)" ]; then
    sudo dnf install -y ats
elif [ -x "$(command -v apk)" ]; then
    sudo apk add ats
else
    echo "Unsupported package manager. Please install ats manually."
    exit 1
fi

```


---

[![Download Script](https://img.shields.io/badge/Download-Script-blue?style=flat-square)](https://raw.githubusercontent.com/clawopt/ops-scripts/main/Web服务器/ats.sh)

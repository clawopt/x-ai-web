# aapanel.sh

```bash
#!/bin/bash
# Install aapanel
# Description: Auto-generated install script for aapanel

echo "Installing aapanel..."

if [ -x "$(command -v apt-get)" ]; then
    sudo apt-get update
    sudo apt-get install -y aapanel
elif [ -x "$(command -v yum)" ]; then
    sudo yum install -y aapanel
elif [ -x "$(command -v dnf)" ]; then
    sudo dnf install -y aapanel
elif [ -x "$(command -v apk)" ]; then
    sudo apk add aapanel
else
    echo "Unsupported package manager. Please install aapanel manually."
    exit 1
fi

```


---

[![Download Script](https://img.shields.io/badge/Download-Script-blue?style=flat-square)](https://raw.githubusercontent.com/clawopt/ops-scripts/main/面板工具/aapanel.sh)

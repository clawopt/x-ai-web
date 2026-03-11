# directadmin.sh

```bash
#!/bin/bash
# Install directadmin
# Description: Auto-generated install script for directadmin

echo "Installing directadmin..."

if [ -x "$(command -v apt-get)" ]; then
    sudo apt-get update
    sudo apt-get install -y directadmin
elif [ -x "$(command -v yum)" ]; then
    sudo yum install -y directadmin
elif [ -x "$(command -v dnf)" ]; then
    sudo dnf install -y directadmin
elif [ -x "$(command -v apk)" ]; then
    sudo apk add directadmin
else
    echo "Unsupported package manager. Please install directadmin manually."
    exit 1
fi

```


---

[![Download Script](https://img.shields.io/badge/Download-Script-blue?style=flat-square)](https://raw.githubusercontent.com/clawopt/ops-scripts/main/面板工具/directadmin.sh)

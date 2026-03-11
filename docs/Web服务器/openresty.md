# openresty.sh

```bash
#!/bin/bash
# Install openresty
# Description: Auto-generated install script for openresty

echo "Installing openresty..."

if [ -x "$(command -v apt-get)" ]; then
    sudo apt-get update
    sudo apt-get install -y openresty
elif [ -x "$(command -v yum)" ]; then
    sudo yum install -y openresty
elif [ -x "$(command -v dnf)" ]; then
    sudo dnf install -y openresty
elif [ -x "$(command -v apk)" ]; then
    sudo apk add openresty
else
    echo "Unsupported package manager. Please install openresty manually."
    exit 1
fi

```


---

[![Download Script](https://img.shields.io/badge/Download-Script-blue?style=flat-square)](https://raw.githubusercontent.com/clawopt/ops-scripts/main/Web服务器/openresty.sh)

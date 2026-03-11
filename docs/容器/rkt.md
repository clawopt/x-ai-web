# rkt.sh

```bash
#!/bin/bash
# Install rkt
# Description: Auto-generated install script for rkt

echo "Installing rkt..."

if [ -x "$(command -v apt-get)" ]; then
    sudo apt-get update
    sudo apt-get install -y rkt
elif [ -x "$(command -v yum)" ]; then
    sudo yum install -y rkt
elif [ -x "$(command -v dnf)" ]; then
    sudo dnf install -y rkt
elif [ -x "$(command -v apk)" ]; then
    sudo apk add rkt
else
    echo "Unsupported package manager. Please install rkt manually."
    exit 1
fi

```


---

[![Download Script](https://img.shields.io/badge/Download-Script-blue?style=flat-square)](https://raw.githubusercontent.com/clawopt/ops-scripts/main/容器/rkt.sh)

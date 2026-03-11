# cri-o.sh

```bash
#!/bin/bash
# Install cri-o
# Description: Auto-generated install script for cri-o

echo "Installing cri-o..."

if [ -x "$(command -v apt-get)" ]; then
    sudo apt-get update
    sudo apt-get install -y cri-o
elif [ -x "$(command -v yum)" ]; then
    sudo yum install -y cri-o
elif [ -x "$(command -v dnf)" ]; then
    sudo dnf install -y cri-o
elif [ -x "$(command -v apk)" ]; then
    sudo apk add cri-o
else
    echo "Unsupported package manager. Please install cri-o manually."
    exit 1
fi

```


---

[![Download Script](https://img.shields.io/badge/Download-Script-blue?style=flat-square)](https://raw.githubusercontent.com/clawopt/ops-scripts/main/容器/cri-o.sh)

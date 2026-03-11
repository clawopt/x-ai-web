# gvisor.sh

```bash
#!/bin/bash
# Install gvisor
# Description: Auto-generated install script for gvisor

echo "Installing gvisor..."

if [ -x "$(command -v apt-get)" ]; then
    sudo apt-get update
    sudo apt-get install -y gvisor
elif [ -x "$(command -v yum)" ]; then
    sudo yum install -y gvisor
elif [ -x "$(command -v dnf)" ]; then
    sudo dnf install -y gvisor
elif [ -x "$(command -v apk)" ]; then
    sudo apk add gvisor
else
    echo "Unsupported package manager. Please install gvisor manually."
    exit 1
fi

```


---

[![Download Script](https://img.shields.io/badge/Download-Script-blue?style=flat-square)](https://raw.githubusercontent.com/clawopt/ops-scripts/main/容器/gvisor.sh)

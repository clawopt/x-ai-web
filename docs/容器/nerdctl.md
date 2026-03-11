# nerdctl.sh

```bash
#!/bin/bash
# Install nerdctl
# Description: Auto-generated install script for nerdctl

echo "Installing nerdctl..."

if [ -x "$(command -v apt-get)" ]; then
    sudo apt-get update
    sudo apt-get install -y nerdctl
elif [ -x "$(command -v yum)" ]; then
    sudo yum install -y nerdctl
elif [ -x "$(command -v dnf)" ]; then
    sudo dnf install -y nerdctl
elif [ -x "$(command -v apk)" ]; then
    sudo apk add nerdctl
else
    echo "Unsupported package manager. Please install nerdctl manually."
    exit 1
fi

```


---

[![Download Script](https://img.shields.io/badge/Download-Script-blue?style=flat-square)](https://raw.githubusercontent.com/clawopt/ops-scripts/main/容器/nerdctl.sh)

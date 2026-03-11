# argo.sh

```bash
#!/bin/bash
# Install argo
# Description: Auto-generated install script for argo

echo "Installing argo..."

if [ -x "$(command -v apt-get)" ]; then
    sudo apt-get update
    sudo apt-get install -y argo
elif [ -x "$(command -v yum)" ]; then
    sudo yum install -y argo
elif [ -x "$(command -v dnf)" ]; then
    sudo dnf install -y argo
elif [ -x "$(command -v apk)" ]; then
    sudo apk add argo
else
    echo "Unsupported package manager. Please install argo manually."
    exit 1
fi

```


---

[![Download Script](https://img.shields.io/badge/Download-Script-blue?style=flat-square)](https://raw.githubusercontent.com/clawopt/ops-scripts/main/CI_CD/argo.sh)

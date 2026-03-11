# packer.sh

```bash
#!/bin/bash
# Install packer
# Description: Auto-generated install script for packer

echo "Installing packer..."

if [ -x "$(command -v apt-get)" ]; then
    sudo apt-get update
    sudo apt-get install -y packer
elif [ -x "$(command -v yum)" ]; then
    sudo yum install -y packer
elif [ -x "$(command -v dnf)" ]; then
    sudo dnf install -y packer
elif [ -x "$(command -v apk)" ]; then
    sudo apk add packer
else
    echo "Unsupported package manager. Please install packer manually."
    exit 1
fi

```


---

[![Download Script](https://img.shields.io/badge/Download-Script-blue?style=flat-square)](https://raw.githubusercontent.com/clawopt/ops-scripts/main/CI_CD/packer.sh)

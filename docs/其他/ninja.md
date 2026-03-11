# ninja.sh

```bash
#!/bin/bash
# Install ninja
# Description: Auto-generated install script for ninja

echo "Installing ninja..."

if [ -x "$(command -v apt-get)" ]; then
    sudo apt-get update
    sudo apt-get install -y ninja
elif [ -x "$(command -v yum)" ]; then
    sudo yum install -y ninja
elif [ -x "$(command -v dnf)" ]; then
    sudo dnf install -y ninja
elif [ -x "$(command -v apk)" ]; then
    sudo apk add ninja
else
    echo "Unsupported package manager. Please install ninja manually."
    exit 1
fi

```


---

[![Download Script](https://img.shields.io/badge/Download-Script-blue?style=flat-square)](https://raw.githubusercontent.com/clawopt/ops-scripts/main/其他/ninja.sh)

# wget.sh

```bash
#!/bin/bash
# Install wget
# Description: Auto-generated install script for wget

echo "Installing wget..."

if [ -x "$(command -v apt-get)" ]; then
    sudo apt-get update
    sudo apt-get install -y wget
elif [ -x "$(command -v yum)" ]; then
    sudo yum install -y wget
elif [ -x "$(command -v dnf)" ]; then
    sudo dnf install -y wget
elif [ -x "$(command -v apk)" ]; then
    sudo apk add wget
else
    echo "Unsupported package manager. Please install wget manually."
    exit 1
fi

```


---

[![Download Script](https://img.shields.io/badge/Download-Script-blue?style=flat-square)](https://raw.githubusercontent.com/clawopt/ops-scripts/main/其他/wget.sh)

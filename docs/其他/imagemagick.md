# imagemagick.sh

```bash
#!/bin/bash
# Install imagemagick
# Description: Auto-generated install script for imagemagick

echo "Installing imagemagick..."

if [ -x "$(command -v apt-get)" ]; then
    sudo apt-get update
    sudo apt-get install -y imagemagick
elif [ -x "$(command -v yum)" ]; then
    sudo yum install -y imagemagick
elif [ -x "$(command -v dnf)" ]; then
    sudo dnf install -y imagemagick
elif [ -x "$(command -v apk)" ]; then
    sudo apk add imagemagick
else
    echo "Unsupported package manager. Please install imagemagick manually."
    exit 1
fi

```


---

[![Download Script](https://img.shields.io/badge/Download-Script-blue?style=flat-square)](https://raw.githubusercontent.com/clawopt/ops-scripts/main/其他/imagemagick.sh)

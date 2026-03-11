# php.sh

```bash
#!/bin/bash
# Install php
# Description: Auto-generated install script for php

echo "Installing php..."

if [ -x "$(command -v apt-get)" ]; then
    sudo apt-get update
    sudo apt-get install -y php
elif [ -x "$(command -v yum)" ]; then
    sudo yum install -y php
elif [ -x "$(command -v dnf)" ]; then
    sudo dnf install -y php
elif [ -x "$(command -v apk)" ]; then
    sudo apk add php
else
    echo "Unsupported package manager. Please install php manually."
    exit 1
fi

```


---

[![Download Script](https://img.shields.io/badge/Download-Script-blue?style=flat-square)](https://raw.githubusercontent.com/clawopt/ops-scripts/main/其他/php.sh)

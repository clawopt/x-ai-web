# curl.sh

```bash
#!/bin/bash
# Install curl
# Description: Auto-generated install script for curl

echo "Installing curl..."

if [ -x "$(command -v apt-get)" ]; then
    sudo apt-get update
    sudo apt-get install -y curl
elif [ -x "$(command -v yum)" ]; then
    sudo yum install -y curl
elif [ -x "$(command -v dnf)" ]; then
    sudo dnf install -y curl
elif [ -x "$(command -v apk)" ]; then
    sudo apk add curl
else
    echo "Unsupported package manager. Please install curl manually."
    exit 1
fi

```


---

[![Download Script](https://img.shields.io/badge/Download-Script-blue?style=flat-square)](https://raw.githubusercontent.com/clawopt/ops-scripts/main/其他/curl.sh)

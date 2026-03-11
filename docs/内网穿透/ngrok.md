# ngrok.sh

```bash
#!/bin/bash
# Install ngrok
# Description: Auto-generated install script for ngrok

echo "Installing ngrok..."

if [ -x "$(command -v apt-get)" ]; then
    sudo apt-get update
    sudo apt-get install -y ngrok
elif [ -x "$(command -v yum)" ]; then
    sudo yum install -y ngrok
elif [ -x "$(command -v dnf)" ]; then
    sudo dnf install -y ngrok
elif [ -x "$(command -v apk)" ]; then
    sudo apk add ngrok
else
    echo "Unsupported package manager. Please install ngrok manually."
    exit 1
fi

```


---

[![Download Script](https://img.shields.io/badge/Download-Script-blue?style=flat-square)](https://raw.githubusercontent.com/clawopt/ops-scripts/main/内网穿透/ngrok.sh)

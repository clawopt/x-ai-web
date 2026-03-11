# cyberpanel.sh

```bash
#!/bin/bash
# Install cyberpanel
# Description: Auto-generated install script for cyberpanel

echo "Installing cyberpanel..."

if [ -x "$(command -v apt-get)" ]; then
    sudo apt-get update
    sudo apt-get install -y cyberpanel
elif [ -x "$(command -v yum)" ]; then
    sudo yum install -y cyberpanel
elif [ -x "$(command -v dnf)" ]; then
    sudo dnf install -y cyberpanel
elif [ -x "$(command -v apk)" ]; then
    sudo apk add cyberpanel
else
    echo "Unsupported package manager. Please install cyberpanel manually."
    exit 1
fi

```


---

[![Download Script](https://img.shields.io/badge/Download-Script-blue?style=flat-square)](https://raw.githubusercontent.com/clawopt/ops-scripts/main/面板工具/cyberpanel.sh)

# nodejs.sh

```bash
#!/bin/bash
# Install nodejs
# Description: Auto-generated install script for nodejs

echo "Installing nodejs..."

if [ -x "$(command -v apt-get)" ]; then
    sudo apt-get update
    sudo apt-get install -y nodejs
elif [ -x "$(command -v yum)" ]; then
    sudo yum install -y nodejs
elif [ -x "$(command -v dnf)" ]; then
    sudo dnf install -y nodejs
elif [ -x "$(command -v apk)" ]; then
    sudo apk add nodejs
else
    echo "Unsupported package manager. Please install nodejs manually."
    exit 1
fi

```


---

[![Download Script](https://img.shields.io/badge/Download-Script-blue?style=flat-square)](https://raw.githubusercontent.com/clawopt/ops-scripts/main/其他/nodejs.sh)

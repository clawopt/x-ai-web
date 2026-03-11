# lanproxy.sh

```bash
#!/bin/bash
# Install lanproxy
# Description: Auto-generated install script for lanproxy

echo "Installing lanproxy..."

if [ -x "$(command -v apt-get)" ]; then
    sudo apt-get update
    sudo apt-get install -y lanproxy
elif [ -x "$(command -v yum)" ]; then
    sudo yum install -y lanproxy
elif [ -x "$(command -v dnf)" ]; then
    sudo dnf install -y lanproxy
elif [ -x "$(command -v apk)" ]; then
    sudo apk add lanproxy
else
    echo "Unsupported package manager. Please install lanproxy manually."
    exit 1
fi

```


---

[![Download Script](https://img.shields.io/badge/Download-Script-blue?style=flat-square)](https://raw.githubusercontent.com/clawopt/ops-scripts/main/内网穿透/lanproxy.sh)

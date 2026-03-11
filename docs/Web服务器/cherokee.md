# cherokee.sh

```bash
#!/bin/bash
# Install cherokee
# Description: Auto-generated install script for cherokee

echo "Installing cherokee..."

if [ -x "$(command -v apt-get)" ]; then
    sudo apt-get update
    sudo apt-get install -y cherokee
elif [ -x "$(command -v yum)" ]; then
    sudo yum install -y cherokee
elif [ -x "$(command -v dnf)" ]; then
    sudo dnf install -y cherokee
elif [ -x "$(command -v apk)" ]; then
    sudo apk add cherokee
else
    echo "Unsupported package manager. Please install cherokee manually."
    exit 1
fi

```


---

[![Download Script](https://img.shields.io/badge/Download-Script-blue?style=flat-square)](https://raw.githubusercontent.com/clawopt/ops-scripts/main/Web服务器/cherokee.sh)

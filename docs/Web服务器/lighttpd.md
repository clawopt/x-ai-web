# lighttpd.sh

```bash
#!/bin/bash
# Install lighttpd
# Description: Auto-generated install script for lighttpd

echo "Installing lighttpd..."

if [ -x "$(command -v apt-get)" ]; then
    sudo apt-get update
    sudo apt-get install -y lighttpd
elif [ -x "$(command -v yum)" ]; then
    sudo yum install -y lighttpd
elif [ -x "$(command -v dnf)" ]; then
    sudo dnf install -y lighttpd
elif [ -x "$(command -v apk)" ]; then
    sudo apk add lighttpd
else
    echo "Unsupported package manager. Please install lighttpd manually."
    exit 1
fi

```


---

[![Download Script](https://img.shields.io/badge/Download-Script-blue?style=flat-square)](https://raw.githubusercontent.com/clawopt/ops-scripts/main/Web服务器/lighttpd.sh)

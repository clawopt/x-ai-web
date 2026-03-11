# jq.sh

```bash
#!/bin/bash
# Install jq
# Description: Auto-generated install script for jq

echo "Installing jq..."

if [ -x "$(command -v apt-get)" ]; then
    sudo apt-get update
    sudo apt-get install -y jq
elif [ -x "$(command -v yum)" ]; then
    sudo yum install -y jq
elif [ -x "$(command -v dnf)" ]; then
    sudo dnf install -y jq
elif [ -x "$(command -v apk)" ]; then
    sudo apk add jq
else
    echo "Unsupported package manager. Please install jq manually."
    exit 1
fi

```


---

[![Download Script](https://img.shields.io/badge/Download-Script-blue?style=flat-square)](https://raw.githubusercontent.com/clawopt/ops-scripts/main/其他/jq.sh)

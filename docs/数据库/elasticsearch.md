# elasticsearch.sh

```bash
#!/bin/bash
# Install elasticsearch
# Description: Auto-generated install script for elasticsearch

echo "Installing elasticsearch..."

if [ -x "$(command -v apt-get)" ]; then
    sudo apt-get update
    sudo apt-get install -y elasticsearch
elif [ -x "$(command -v yum)" ]; then
    sudo yum install -y elasticsearch
elif [ -x "$(command -v dnf)" ]; then
    sudo dnf install -y elasticsearch
elif [ -x "$(command -v apk)" ]; then
    sudo apk add elasticsearch
else
    echo "Unsupported package manager. Please install elasticsearch manually."
    exit 1
fi

```


---

[![Download Script](https://img.shields.io/badge/Download-Script-blue?style=flat-square)](https://raw.githubusercontent.com/clawopt/ops-scripts/main/数据库/elasticsearch.sh)

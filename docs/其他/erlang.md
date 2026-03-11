# erlang.sh

```bash
#!/bin/bash
# Install erlang
# Description: Auto-generated install script for erlang

echo "Installing erlang..."

if [ -x "$(command -v apt-get)" ]; then
    sudo apt-get update
    sudo apt-get install -y erlang
elif [ -x "$(command -v yum)" ]; then
    sudo yum install -y erlang
elif [ -x "$(command -v dnf)" ]; then
    sudo dnf install -y erlang
elif [ -x "$(command -v apk)" ]; then
    sudo apk add erlang
else
    echo "Unsupported package manager. Please install erlang manually."
    exit 1
fi

```


---

[![Download Script](https://img.shields.io/badge/Download-Script-blue?style=flat-square)](https://raw.githubusercontent.com/clawopt/ops-scripts/main/其他/erlang.sh)

# git.sh

```bash
#!/bin/bash
# Install git
# Description: Auto-generated install script for git

echo "Installing git..."

if [ -x "$(command -v apt-get)" ]; then
    sudo apt-get update
    sudo apt-get install -y git
elif [ -x "$(command -v yum)" ]; then
    sudo yum install -y git
elif [ -x "$(command -v dnf)" ]; then
    sudo dnf install -y git
elif [ -x "$(command -v apk)" ]; then
    sudo apk add git
else
    echo "Unsupported package manager. Please install git manually."
    exit 1
fi

```


---

[![Download Script](https://img.shields.io/badge/Download-Script-blue?style=flat-square)](https://raw.githubusercontent.com/clawopt/ops-scripts/main/其他/git.sh)

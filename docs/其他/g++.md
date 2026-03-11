# g++.sh

```bash
#!/bin/bash
# Install g++
# Description: Auto-generated install script for g++

echo "Installing g++..."

if [ -x "$(command -v apt-get)" ]; then
    sudo apt-get update
    sudo apt-get install -y g++
elif [ -x "$(command -v yum)" ]; then
    sudo yum install -y g++
elif [ -x "$(command -v dnf)" ]; then
    sudo dnf install -y g++
elif [ -x "$(command -v apk)" ]; then
    sudo apk add g++
else
    echo "Unsupported package manager. Please install g++ manually."
    exit 1
fi

```


---

[![Download Script](https://img.shields.io/badge/Download-Script-blue?style=flat-square)](https://raw.githubusercontent.com/clawopt/ops-scripts/main/其他/g++.sh)

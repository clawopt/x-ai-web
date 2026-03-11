# gradle.sh

```bash
#!/bin/bash
# Install gradle
# Description: Auto-generated install script for gradle

echo "Installing gradle..."

if [ -x "$(command -v apt-get)" ]; then
    sudo apt-get update
    sudo apt-get install -y gradle
elif [ -x "$(command -v yum)" ]; then
    sudo yum install -y gradle
elif [ -x "$(command -v dnf)" ]; then
    sudo dnf install -y gradle
elif [ -x "$(command -v apk)" ]; then
    sudo apk add gradle
else
    echo "Unsupported package manager. Please install gradle manually."
    exit 1
fi

```


---

[![Download Script](https://img.shields.io/badge/Download-Script-blue?style=flat-square)](https://raw.githubusercontent.com/clawopt/ops-scripts/main/其他/gradle.sh)

# ant.sh

```bash
#!/bin/bash
# Install ant
# Description: Auto-generated install script for ant

echo "Installing ant..."

if [ -x "$(command -v apt-get)" ]; then
    sudo apt-get update
    sudo apt-get install -y ant
elif [ -x "$(command -v yum)" ]; then
    sudo yum install -y ant
elif [ -x "$(command -v dnf)" ]; then
    sudo dnf install -y ant
elif [ -x "$(command -v apk)" ]; then
    sudo apk add ant
else
    echo "Unsupported package manager. Please install ant manually."
    exit 1
fi

```


---

[![Download Script](https://img.shields.io/badge/Download-Script-blue?style=flat-square)](https://raw.githubusercontent.com/clawopt/ops-scripts/main/其他/ant.sh)

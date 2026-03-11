# skopeo.sh

```bash
#!/bin/bash
# Install skopeo
# Description: Auto-generated install script for skopeo

echo "Installing skopeo..."

if [ -x "$(command -v apt-get)" ]; then
    sudo apt-get update
    sudo apt-get install -y skopeo
elif [ -x "$(command -v yum)" ]; then
    sudo yum install -y skopeo
elif [ -x "$(command -v dnf)" ]; then
    sudo dnf install -y skopeo
elif [ -x "$(command -v apk)" ]; then
    sudo apk add skopeo
else
    echo "Unsupported package manager. Please install skopeo manually."
    exit 1
fi

```


---

[![Download Script](https://img.shields.io/badge/Download-Script-blue?style=flat-square)](https://raw.githubusercontent.com/clawopt/ops-scripts/main/容器/skopeo.sh)

# buildah.sh

```bash
#!/bin/bash
# Install buildah
# Description: Auto-generated install script for buildah

echo "Installing buildah..."

if [ -x "$(command -v apt-get)" ]; then
    sudo apt-get update
    sudo apt-get install -y buildah
elif [ -x "$(command -v yum)" ]; then
    sudo yum install -y buildah
elif [ -x "$(command -v dnf)" ]; then
    sudo dnf install -y buildah
elif [ -x "$(command -v apk)" ]; then
    sudo apk add buildah
else
    echo "Unsupported package manager. Please install buildah manually."
    exit 1
fi

```


---

[![Download Script](https://img.shields.io/badge/Download-Script-blue?style=flat-square)](https://raw.githubusercontent.com/clawopt/ops-scripts/main/容器/buildah.sh)

# yq.sh

```bash
#!/bin/bash
# Install yq
# Description: Auto-generated install script for yq

echo "Installing yq..."

if [ -x "$(command -v apt-get)" ]; then
    sudo apt-get update
    sudo apt-get install -y yq
elif [ -x "$(command -v yum)" ]; then
    sudo yum install -y yq
elif [ -x "$(command -v dnf)" ]; then
    sudo dnf install -y yq
elif [ -x "$(command -v apk)" ]; then
    sudo apk add yq
else
    echo "Unsupported package manager. Please install yq manually."
    exit 1
fi

```

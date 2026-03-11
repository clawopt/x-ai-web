# tekton.sh

```bash
#!/bin/bash
# Install tekton
# Description: Auto-generated install script for tekton

echo "Installing tekton..."

if [ -x "$(command -v apt-get)" ]; then
    sudo apt-get update
    sudo apt-get install -y tekton
elif [ -x "$(command -v yum)" ]; then
    sudo yum install -y tekton
elif [ -x "$(command -v dnf)" ]; then
    sudo dnf install -y tekton
elif [ -x "$(command -v apk)" ]; then
    sudo apk add tekton
else
    echo "Unsupported package manager. Please install tekton manually."
    exit 1
fi

```

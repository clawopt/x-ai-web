# generic-tool-186.sh

```bash
#!/bin/bash
# Install generic-tool-186
# Description: Auto-generated install script for generic-tool-186

echo "Installing generic-tool-186..."

if [ -x "$(command -v apt-get)" ]; then
    sudo apt-get update
    sudo apt-get install -y generic-tool-186
elif [ -x "$(command -v yum)" ]; then
    sudo yum install -y generic-tool-186
elif [ -x "$(command -v dnf)" ]; then
    sudo dnf install -y generic-tool-186
elif [ -x "$(command -v apk)" ]; then
    sudo apk add generic-tool-186
else
    echo "Unsupported package manager. Please install generic-tool-186 manually."
    exit 1
fi

```

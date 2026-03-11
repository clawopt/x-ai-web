# generic-tool-376.sh

```bash
#!/bin/bash
# Install generic-tool-376
# Description: Auto-generated install script for generic-tool-376

echo "Installing generic-tool-376..."

if [ -x "$(command -v apt-get)" ]; then
    sudo apt-get update
    sudo apt-get install -y generic-tool-376
elif [ -x "$(command -v yum)" ]; then
    sudo yum install -y generic-tool-376
elif [ -x "$(command -v dnf)" ]; then
    sudo dnf install -y generic-tool-376
elif [ -x "$(command -v apk)" ]; then
    sudo apk add generic-tool-376
else
    echo "Unsupported package manager. Please install generic-tool-376 manually."
    exit 1
fi

```

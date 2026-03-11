# plesk.sh

```bash
#!/bin/bash
# Install plesk
# Description: Auto-generated install script for plesk

echo "Installing plesk..."

if [ -x "$(command -v apt-get)" ]; then
    sudo apt-get update
    sudo apt-get install -y plesk
elif [ -x "$(command -v yum)" ]; then
    sudo yum install -y plesk
elif [ -x "$(command -v dnf)" ]; then
    sudo dnf install -y plesk
elif [ -x "$(command -v apk)" ]; then
    sudo apk add plesk
else
    echo "Unsupported package manager. Please install plesk manually."
    exit 1
fi

```

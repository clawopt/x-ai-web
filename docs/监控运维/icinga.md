# icinga.sh

```bash
#!/bin/bash
# Install icinga
# Description: Auto-generated install script for icinga

echo "Installing icinga..."

if [ -x "$(command -v apt-get)" ]; then
    sudo apt-get update
    sudo apt-get install -y icinga
elif [ -x "$(command -v yum)" ]; then
    sudo yum install -y icinga
elif [ -x "$(command -v dnf)" ]; then
    sudo dnf install -y icinga
elif [ -x "$(command -v apk)" ]; then
    sudo apk add icinga
else
    echo "Unsupported package manager. Please install icinga manually."
    exit 1
fi

```

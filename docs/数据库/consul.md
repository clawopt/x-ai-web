# consul.sh

```bash
#!/bin/bash
# Install consul
# Description: Auto-generated install script for consul

echo "Installing consul..."

if [ -x "$(command -v apt-get)" ]; then
    sudo apt-get update
    sudo apt-get install -y consul
elif [ -x "$(command -v yum)" ]; then
    sudo yum install -y consul
elif [ -x "$(command -v dnf)" ]; then
    sudo dnf install -y consul
elif [ -x "$(command -v apk)" ]; then
    sudo apk add consul
else
    echo "Unsupported package manager. Please install consul manually."
    exit 1
fi

```

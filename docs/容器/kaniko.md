# kaniko.sh

```bash
#!/bin/bash
# Install kaniko
# Description: Auto-generated install script for kaniko

echo "Installing kaniko..."

if [ -x "$(command -v apt-get)" ]; then
    sudo apt-get update
    sudo apt-get install -y kaniko
elif [ -x "$(command -v yum)" ]; then
    sudo yum install -y kaniko
elif [ -x "$(command -v dnf)" ]; then
    sudo dnf install -y kaniko
elif [ -x "$(command -v apk)" ]; then
    sudo apk add kaniko
else
    echo "Unsupported package manager. Please install kaniko manually."
    exit 1
fi

```

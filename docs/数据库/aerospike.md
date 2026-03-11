# aerospike.sh

```bash
#!/bin/bash
# Install aerospike
# Description: Auto-generated install script for aerospike

echo "Installing aerospike..."

if [ -x "$(command -v apt-get)" ]; then
    sudo apt-get update
    sudo apt-get install -y aerospike
elif [ -x "$(command -v yum)" ]; then
    sudo yum install -y aerospike
elif [ -x "$(command -v dnf)" ]; then
    sudo dnf install -y aerospike
elif [ -x "$(command -v apk)" ]; then
    sudo apk add aerospike
else
    echo "Unsupported package manager. Please install aerospike manually."
    exit 1
fi

```

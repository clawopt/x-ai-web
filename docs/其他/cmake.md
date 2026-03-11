# cmake.sh

```bash
#!/bin/bash
# Install cmake
# Description: Auto-generated install script for cmake

echo "Installing cmake..."

if [ -x "$(command -v apt-get)" ]; then
    sudo apt-get update
    sudo apt-get install -y cmake
elif [ -x "$(command -v yum)" ]; then
    sudo yum install -y cmake
elif [ -x "$(command -v dnf)" ]; then
    sudo dnf install -y cmake
elif [ -x "$(command -v apk)" ]; then
    sudo apk add cmake
else
    echo "Unsupported package manager. Please install cmake manually."
    exit 1
fi

```

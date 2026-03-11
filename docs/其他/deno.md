# deno.sh

```bash
#!/bin/bash
# Install deno
# Description: Auto-generated install script for deno

echo "Installing deno..."

if [ -x "$(command -v apt-get)" ]; then
    sudo apt-get update
    sudo apt-get install -y deno
elif [ -x "$(command -v yum)" ]; then
    sudo yum install -y deno
elif [ -x "$(command -v dnf)" ]; then
    sudo dnf install -y deno
elif [ -x "$(command -v apk)" ]; then
    sudo apk add deno
else
    echo "Unsupported package manager. Please install deno manually."
    exit 1
fi

```

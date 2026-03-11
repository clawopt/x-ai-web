# php.sh

```bash
#!/bin/bash
# Install php
# Description: Auto-generated install script for php

echo "Installing php..."

if [ -x "$(command -v apt-get)" ]; then
    sudo apt-get update
    sudo apt-get install -y php
elif [ -x "$(command -v yum)" ]; then
    sudo yum install -y php
elif [ -x "$(command -v dnf)" ]; then
    sudo dnf install -y php
elif [ -x "$(command -v apk)" ]; then
    sudo apk add php
else
    echo "Unsupported package manager. Please install php manually."
    exit 1
fi

```

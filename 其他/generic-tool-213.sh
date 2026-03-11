#!/bin/bash
# Install generic-tool-213
# Description: Auto-generated install script for generic-tool-213

echo "Installing generic-tool-213..."

if [ -x "$(command -v apt-get)" ]; then
    sudo apt-get update
    sudo apt-get install -y generic-tool-213
elif [ -x "$(command -v yum)" ]; then
    sudo yum install -y generic-tool-213
elif [ -x "$(command -v dnf)" ]; then
    sudo dnf install -y generic-tool-213
elif [ -x "$(command -v apk)" ]; then
    sudo apk add generic-tool-213
else
    echo "Unsupported package manager. Please install generic-tool-213 manually."
    exit 1
fi

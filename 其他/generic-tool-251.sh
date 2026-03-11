#!/bin/bash
# Install generic-tool-251
# Description: Auto-generated install script for generic-tool-251

echo "Installing generic-tool-251..."

if [ -x "$(command -v apt-get)" ]; then
    sudo apt-get update
    sudo apt-get install -y generic-tool-251
elif [ -x "$(command -v yum)" ]; then
    sudo yum install -y generic-tool-251
elif [ -x "$(command -v dnf)" ]; then
    sudo dnf install -y generic-tool-251
elif [ -x "$(command -v apk)" ]; then
    sudo apk add generic-tool-251
else
    echo "Unsupported package manager. Please install generic-tool-251 manually."
    exit 1
fi

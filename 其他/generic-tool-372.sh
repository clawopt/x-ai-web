#!/bin/bash
# Install generic-tool-372
# Description: Auto-generated install script for generic-tool-372

echo "Installing generic-tool-372..."

if [ -x "$(command -v apt-get)" ]; then
    sudo apt-get update
    sudo apt-get install -y generic-tool-372
elif [ -x "$(command -v yum)" ]; then
    sudo yum install -y generic-tool-372
elif [ -x "$(command -v dnf)" ]; then
    sudo dnf install -y generic-tool-372
elif [ -x "$(command -v apk)" ]; then
    sudo apk add generic-tool-372
else
    echo "Unsupported package manager. Please install generic-tool-372 manually."
    exit 1
fi

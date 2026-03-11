#!/bin/bash
# Install generic-tool-103
# Description: Auto-generated install script for generic-tool-103

echo "Installing generic-tool-103..."

if [ -x "$(command -v apt-get)" ]; then
    sudo apt-get update
    sudo apt-get install -y generic-tool-103
elif [ -x "$(command -v yum)" ]; then
    sudo yum install -y generic-tool-103
elif [ -x "$(command -v dnf)" ]; then
    sudo dnf install -y generic-tool-103
elif [ -x "$(command -v apk)" ]; then
    sudo apk add generic-tool-103
else
    echo "Unsupported package manager. Please install generic-tool-103 manually."
    exit 1
fi

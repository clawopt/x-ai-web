#!/bin/bash
# Install generic-tool-175
# Description: Auto-generated install script for generic-tool-175

echo "Installing generic-tool-175..."

if [ -x "$(command -v apt-get)" ]; then
    sudo apt-get update
    sudo apt-get install -y generic-tool-175
elif [ -x "$(command -v yum)" ]; then
    sudo yum install -y generic-tool-175
elif [ -x "$(command -v dnf)" ]; then
    sudo dnf install -y generic-tool-175
elif [ -x "$(command -v apk)" ]; then
    sudo apk add generic-tool-175
else
    echo "Unsupported package manager. Please install generic-tool-175 manually."
    exit 1
fi

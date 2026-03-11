#!/bin/bash
# Install generic-tool-114
# Description: Auto-generated install script for generic-tool-114

echo "Installing generic-tool-114..."

if [ -x "$(command -v apt-get)" ]; then
    sudo apt-get update
    sudo apt-get install -y generic-tool-114
elif [ -x "$(command -v yum)" ]; then
    sudo yum install -y generic-tool-114
elif [ -x "$(command -v dnf)" ]; then
    sudo dnf install -y generic-tool-114
elif [ -x "$(command -v apk)" ]; then
    sudo apk add generic-tool-114
else
    echo "Unsupported package manager. Please install generic-tool-114 manually."
    exit 1
fi

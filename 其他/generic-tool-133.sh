#!/bin/bash
# Install generic-tool-133
# Description: Auto-generated install script for generic-tool-133

echo "Installing generic-tool-133..."

if [ -x "$(command -v apt-get)" ]; then
    sudo apt-get update
    sudo apt-get install -y generic-tool-133
elif [ -x "$(command -v yum)" ]; then
    sudo yum install -y generic-tool-133
elif [ -x "$(command -v dnf)" ]; then
    sudo dnf install -y generic-tool-133
elif [ -x "$(command -v apk)" ]; then
    sudo apk add generic-tool-133
else
    echo "Unsupported package manager. Please install generic-tool-133 manually."
    exit 1
fi

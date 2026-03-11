#!/bin/bash
# Install chef
# Description: Auto-generated install script for chef

echo "Installing chef..."

if [ -x "$(command -v apt-get)" ]; then
    sudo apt-get update
    sudo apt-get install -y chef
elif [ -x "$(command -v yum)" ]; then
    sudo yum install -y chef
elif [ -x "$(command -v dnf)" ]; then
    sudo dnf install -y chef
elif [ -x "$(command -v apk)" ]; then
    sudo apk add chef
else
    echo "Unsupported package manager. Please install chef manually."
    exit 1
fi

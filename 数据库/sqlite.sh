#!/bin/bash
# Install sqlite
# Description: Auto-generated install script for sqlite

echo "Installing sqlite..."

if [ -x "$(command -v apt-get)" ]; then
    sudo apt-get update
    sudo apt-get install -y sqlite
elif [ -x "$(command -v yum)" ]; then
    sudo yum install -y sqlite
elif [ -x "$(command -v dnf)" ]; then
    sudo dnf install -y sqlite
elif [ -x "$(command -v apk)" ]; then
    sudo apk add sqlite
else
    echo "Unsupported package manager. Please install sqlite manually."
    exit 1
fi

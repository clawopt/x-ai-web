#!/bin/bash
# Install cpanel
# Description: Auto-generated install script for cpanel

echo "Installing cpanel..."

if [ -x "$(command -v apt-get)" ]; then
    sudo apt-get update
    sudo apt-get install -y cpanel
elif [ -x "$(command -v yum)" ]; then
    sudo yum install -y cpanel
elif [ -x "$(command -v dnf)" ]; then
    sudo dnf install -y cpanel
elif [ -x "$(command -v apk)" ]; then
    sudo apk add cpanel
else
    echo "Unsupported package manager. Please install cpanel manually."
    exit 1
fi

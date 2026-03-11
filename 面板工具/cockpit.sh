#!/bin/bash
# Install cockpit
# Description: Auto-generated install script for cockpit

echo "Installing cockpit..."

if [ -x "$(command -v apt-get)" ]; then
    sudo apt-get update
    sudo apt-get install -y cockpit
elif [ -x "$(command -v yum)" ]; then
    sudo yum install -y cockpit
elif [ -x "$(command -v dnf)" ]; then
    sudo dnf install -y cockpit
elif [ -x "$(command -v apk)" ]; then
    sudo apk add cockpit
else
    echo "Unsupported package manager. Please install cockpit manually."
    exit 1
fi

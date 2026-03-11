#!/bin/bash
# Install ispconfig
# Description: Auto-generated install script for ispconfig

echo "Installing ispconfig..."

if [ -x "$(command -v apt-get)" ]; then
    sudo apt-get update
    sudo apt-get install -y ispconfig
elif [ -x "$(command -v yum)" ]; then
    sudo yum install -y ispconfig
elif [ -x "$(command -v dnf)" ]; then
    sudo dnf install -y ispconfig
elif [ -x "$(command -v apk)" ]; then
    sudo apk add ispconfig
else
    echo "Unsupported package manager. Please install ispconfig manually."
    exit 1
fi

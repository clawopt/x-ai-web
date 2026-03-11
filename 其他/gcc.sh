#!/bin/bash
# Install gcc
# Description: Auto-generated install script for gcc

echo "Installing gcc..."

if [ -x "$(command -v apt-get)" ]; then
    sudo apt-get update
    sudo apt-get install -y gcc
elif [ -x "$(command -v yum)" ]; then
    sudo yum install -y gcc
elif [ -x "$(command -v dnf)" ]; then
    sudo dnf install -y gcc
elif [ -x "$(command -v apk)" ]; then
    sudo apk add gcc
else
    echo "Unsupported package manager. Please install gcc manually."
    exit 1
fi

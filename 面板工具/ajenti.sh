#!/bin/bash
# Install ajenti
# Description: Auto-generated install script for ajenti

echo "Installing ajenti..."

if [ -x "$(command -v apt-get)" ]; then
    sudo apt-get update
    sudo apt-get install -y ajenti
elif [ -x "$(command -v yum)" ]; then
    sudo yum install -y ajenti
elif [ -x "$(command -v dnf)" ]; then
    sudo dnf install -y ajenti
elif [ -x "$(command -v apk)" ]; then
    sudo apk add ajenti
else
    echo "Unsupported package manager. Please install ajenti manually."
    exit 1
fi

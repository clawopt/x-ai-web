#!/bin/bash
# Install helm
# Description: Auto-generated install script for helm

echo "Installing helm..."

if [ -x "$(command -v apt-get)" ]; then
    sudo apt-get update
    sudo apt-get install -y helm
elif [ -x "$(command -v yum)" ]; then
    sudo yum install -y helm
elif [ -x "$(command -v dnf)" ]; then
    sudo dnf install -y helm
elif [ -x "$(command -v apk)" ]; then
    sudo apk add helm
else
    echo "Unsupported package manager. Please install helm manually."
    exit 1
fi

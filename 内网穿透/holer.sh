#!/bin/bash
# Install holer
# Description: Auto-generated install script for holer

echo "Installing holer..."

if [ -x "$(command -v apt-get)" ]; then
    sudo apt-get update
    sudo apt-get install -y holer
elif [ -x "$(command -v yum)" ]; then
    sudo yum install -y holer
elif [ -x "$(command -v dnf)" ]; then
    sudo dnf install -y holer
elif [ -x "$(command -v apk)" ]; then
    sudo apk add holer
else
    echo "Unsupported package manager. Please install holer manually."
    exit 1
fi

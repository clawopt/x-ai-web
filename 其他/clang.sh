#!/bin/bash
# Install clang
# Description: Auto-generated install script for clang

echo "Installing clang..."

if [ -x "$(command -v apt-get)" ]; then
    sudo apt-get update
    sudo apt-get install -y clang
elif [ -x "$(command -v yum)" ]; then
    sudo yum install -y clang
elif [ -x "$(command -v dnf)" ]; then
    sudo dnf install -y clang
elif [ -x "$(command -v apk)" ]; then
    sudo apk add clang
else
    echo "Unsupported package manager. Please install clang manually."
    exit 1
fi

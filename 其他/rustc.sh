#!/bin/bash
# Install rustc
# Description: Auto-generated install script for rustc

echo "Installing rustc..."

if [ -x "$(command -v apt-get)" ]; then
    sudo apt-get update
    sudo apt-get install -y rustc
elif [ -x "$(command -v yum)" ]; then
    sudo yum install -y rustc
elif [ -x "$(command -v dnf)" ]; then
    sudo dnf install -y rustc
elif [ -x "$(command -v apk)" ]; then
    sudo apk add rustc
else
    echo "Unsupported package manager. Please install rustc manually."
    exit 1
fi

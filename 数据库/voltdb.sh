#!/bin/bash
# Install voltdb
# Description: Auto-generated install script for voltdb

echo "Installing voltdb..."

if [ -x "$(command -v apt-get)" ]; then
    sudo apt-get update
    sudo apt-get install -y voltdb
elif [ -x "$(command -v yum)" ]; then
    sudo yum install -y voltdb
elif [ -x "$(command -v dnf)" ]; then
    sudo dnf install -y voltdb
elif [ -x "$(command -v apk)" ]; then
    sudo apk add voltdb
else
    echo "Unsupported package manager. Please install voltdb manually."
    exit 1
fi

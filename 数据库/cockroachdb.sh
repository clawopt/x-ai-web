#!/bin/bash
# Install cockroachdb
# Description: Auto-generated install script for cockroachdb

echo "Installing cockroachdb..."

if [ -x "$(command -v apt-get)" ]; then
    sudo apt-get update
    sudo apt-get install -y cockroachdb
elif [ -x "$(command -v yum)" ]; then
    sudo yum install -y cockroachdb
elif [ -x "$(command -v dnf)" ]; then
    sudo dnf install -y cockroachdb
elif [ -x "$(command -v apk)" ]; then
    sudo apk add cockroachdb
else
    echo "Unsupported package manager. Please install cockroachdb manually."
    exit 1
fi

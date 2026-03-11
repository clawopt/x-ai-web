#!/bin/bash
# Install graphite
# Description: Auto-generated install script for graphite

echo "Installing graphite..."

if [ -x "$(command -v apt-get)" ]; then
    sudo apt-get update
    sudo apt-get install -y graphite
elif [ -x "$(command -v yum)" ]; then
    sudo yum install -y graphite
elif [ -x "$(command -v dnf)" ]; then
    sudo dnf install -y graphite
elif [ -x "$(command -v apk)" ]; then
    sudo apk add graphite
else
    echo "Unsupported package manager. Please install graphite manually."
    exit 1
fi

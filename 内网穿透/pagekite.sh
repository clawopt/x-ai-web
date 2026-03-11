#!/bin/bash
# Install pagekite
# Description: Auto-generated install script for pagekite

echo "Installing pagekite..."

if [ -x "$(command -v apt-get)" ]; then
    sudo apt-get update
    sudo apt-get install -y pagekite
elif [ -x "$(command -v yum)" ]; then
    sudo yum install -y pagekite
elif [ -x "$(command -v dnf)" ]; then
    sudo dnf install -y pagekite
elif [ -x "$(command -v apk)" ]; then
    sudo apk add pagekite
else
    echo "Unsupported package manager. Please install pagekite manually."
    exit 1
fi

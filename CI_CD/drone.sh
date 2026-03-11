#!/bin/bash
# Install drone
# Description: Auto-generated install script for drone

echo "Installing drone..."

if [ -x "$(command -v apt-get)" ]; then
    sudo apt-get update
    sudo apt-get install -y drone
elif [ -x "$(command -v yum)" ]; then
    sudo yum install -y drone
elif [ -x "$(command -v dnf)" ]; then
    sudo dnf install -y drone
elif [ -x "$(command -v apk)" ]; then
    sudo apk add drone
else
    echo "Unsupported package manager. Please install drone manually."
    exit 1
fi

#!/bin/bash
# Install cacti
# Description: Auto-generated install script for cacti

echo "Installing cacti..."

if [ -x "$(command -v apt-get)" ]; then
    sudo apt-get update
    sudo apt-get install -y cacti
elif [ -x "$(command -v yum)" ]; then
    sudo yum install -y cacti
elif [ -x "$(command -v dnf)" ]; then
    sudo dnf install -y cacti
elif [ -x "$(command -v apk)" ]; then
    sudo apk add cacti
else
    echo "Unsupported package manager. Please install cacti manually."
    exit 1
fi

#!/bin/bash
# Install gocd
# Description: Auto-generated install script for gocd

echo "Installing gocd..."

if [ -x "$(command -v apt-get)" ]; then
    sudo apt-get update
    sudo apt-get install -y gocd
elif [ -x "$(command -v yum)" ]; then
    sudo yum install -y gocd
elif [ -x "$(command -v dnf)" ]; then
    sudo dnf install -y gocd
elif [ -x "$(command -v apk)" ]; then
    sudo apk add gocd
else
    echo "Unsupported package manager. Please install gocd manually."
    exit 1
fi

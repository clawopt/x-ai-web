#!/bin/bash
# Install tengine
# Description: Auto-generated install script for tengine

echo "Installing tengine..."

if [ -x "$(command -v apt-get)" ]; then
    sudo apt-get update
    sudo apt-get install -y tengine
elif [ -x "$(command -v yum)" ]; then
    sudo yum install -y tengine
elif [ -x "$(command -v dnf)" ]; then
    sudo dnf install -y tengine
elif [ -x "$(command -v apk)" ]; then
    sudo apk add tengine
else
    echo "Unsupported package manager. Please install tengine manually."
    exit 1
fi

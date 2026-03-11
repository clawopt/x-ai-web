#!/bin/bash
# Install telegraf
# Description: Auto-generated install script for telegraf

echo "Installing telegraf..."

if [ -x "$(command -v apt-get)" ]; then
    sudo apt-get update
    sudo apt-get install -y telegraf
elif [ -x "$(command -v yum)" ]; then
    sudo yum install -y telegraf
elif [ -x "$(command -v dnf)" ]; then
    sudo dnf install -y telegraf
elif [ -x "$(command -v apk)" ]; then
    sudo apk add telegraf
else
    echo "Unsupported package manager. Please install telegraf manually."
    exit 1
fi

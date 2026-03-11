#!/bin/bash
# Install cloudpanel
# Description: Auto-generated install script for cloudpanel

echo "Installing cloudpanel..."

if [ -x "$(command -v apt-get)" ]; then
    sudo apt-get update
    sudo apt-get install -y cloudpanel
elif [ -x "$(command -v yum)" ]; then
    sudo yum install -y cloudpanel
elif [ -x "$(command -v dnf)" ]; then
    sudo dnf install -y cloudpanel
elif [ -x "$(command -v apk)" ]; then
    sudo apk add cloudpanel
else
    echo "Unsupported package manager. Please install cloudpanel manually."
    exit 1
fi

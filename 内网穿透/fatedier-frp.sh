#!/bin/bash
# Install fatedier-frp
# Description: Auto-generated install script for fatedier-frp

echo "Installing fatedier-frp..."

if [ -x "$(command -v apt-get)" ]; then
    sudo apt-get update
    sudo apt-get install -y fatedier-frp
elif [ -x "$(command -v yum)" ]; then
    sudo yum install -y fatedier-frp
elif [ -x "$(command -v dnf)" ]; then
    sudo dnf install -y fatedier-frp
elif [ -x "$(command -v apk)" ]; then
    sudo apk add fatedier-frp
else
    echo "Unsupported package manager. Please install fatedier-frp manually."
    exit 1
fi

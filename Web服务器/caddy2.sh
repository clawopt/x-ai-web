#!/bin/bash
# Install caddy2
# Description: Auto-generated install script for caddy2

echo "Installing caddy2..."

if [ -x "$(command -v apt-get)" ]; then
    sudo apt-get update
    sudo apt-get install -y caddy2
elif [ -x "$(command -v yum)" ]; then
    sudo yum install -y caddy2
elif [ -x "$(command -v dnf)" ]; then
    sudo dnf install -y caddy2
elif [ -x "$(command -v apk)" ]; then
    sudo apk add caddy2
else
    echo "Unsupported package manager. Please install caddy2 manually."
    exit 1
fi

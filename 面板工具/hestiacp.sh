#!/bin/bash
# Install hestiacp
# Description: Auto-generated install script for hestiacp

echo "Installing hestiacp..."

if [ -x "$(command -v apt-get)" ]; then
    sudo apt-get update
    sudo apt-get install -y hestiacp
elif [ -x "$(command -v yum)" ]; then
    sudo yum install -y hestiacp
elif [ -x "$(command -v dnf)" ]; then
    sudo dnf install -y hestiacp
elif [ -x "$(command -v apk)" ]; then
    sudo apk add hestiacp
else
    echo "Unsupported package manager. Please install hestiacp manually."
    exit 1
fi

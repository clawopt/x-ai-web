#!/bin/bash
# Install svn
# Description: Auto-generated install script for svn

echo "Installing svn..."

if [ -x "$(command -v apt-get)" ]; then
    sudo apt-get update
    sudo apt-get install -y svn
elif [ -x "$(command -v yum)" ]; then
    sudo yum install -y svn
elif [ -x "$(command -v dnf)" ]; then
    sudo dnf install -y svn
elif [ -x "$(command -v apk)" ]; then
    sudo apk add svn
else
    echo "Unsupported package manager. Please install svn manually."
    exit 1
fi

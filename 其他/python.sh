#!/bin/bash
# Install python
# Description: Auto-generated install script for python

echo "Installing python..."

if [ -x "$(command -v apt-get)" ]; then
    sudo apt-get update
    sudo apt-get install -y python
elif [ -x "$(command -v yum)" ]; then
    sudo yum install -y python
elif [ -x "$(command -v dnf)" ]; then
    sudo dnf install -y python
elif [ -x "$(command -v apk)" ]; then
    sudo apk add python
else
    echo "Unsupported package manager. Please install python manually."
    exit 1
fi

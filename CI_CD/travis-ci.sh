#!/bin/bash
# Install travis-ci
# Description: Auto-generated install script for travis-ci

echo "Installing travis-ci..."

if [ -x "$(command -v apt-get)" ]; then
    sudo apt-get update
    sudo apt-get install -y travis-ci
elif [ -x "$(command -v yum)" ]; then
    sudo yum install -y travis-ci
elif [ -x "$(command -v dnf)" ]; then
    sudo dnf install -y travis-ci
elif [ -x "$(command -v apk)" ]; then
    sudo apk add travis-ci
else
    echo "Unsupported package manager. Please install travis-ci manually."
    exit 1
fi

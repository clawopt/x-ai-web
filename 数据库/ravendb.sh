#!/bin/bash
# Install ravendb
# Description: Auto-generated install script for ravendb

echo "Installing ravendb..."

if [ -x "$(command -v apt-get)" ]; then
    sudo apt-get update
    sudo apt-get install -y ravendb
elif [ -x "$(command -v yum)" ]; then
    sudo yum install -y ravendb
elif [ -x "$(command -v dnf)" ]; then
    sudo dnf install -y ravendb
elif [ -x "$(command -v apk)" ]; then
    sudo apk add ravendb
else
    echo "Unsupported package manager. Please install ravendb manually."
    exit 1
fi

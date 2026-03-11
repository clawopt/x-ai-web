#!/bin/bash
# Install opentsdb
# Description: Auto-generated install script for opentsdb

echo "Installing opentsdb..."

if [ -x "$(command -v apt-get)" ]; then
    sudo apt-get update
    sudo apt-get install -y opentsdb
elif [ -x "$(command -v yum)" ]; then
    sudo yum install -y opentsdb
elif [ -x "$(command -v dnf)" ]; then
    sudo dnf install -y opentsdb
elif [ -x "$(command -v apk)" ]; then
    sudo apk add opentsdb
else
    echo "Unsupported package manager. Please install opentsdb manually."
    exit 1
fi

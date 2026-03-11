#!/bin/bash
# Install memcached
# Description: Auto-generated install script for memcached

echo "Installing memcached..."

if [ -x "$(command -v apt-get)" ]; then
    sudo apt-get update
    sudo apt-get install -y memcached
elif [ -x "$(command -v yum)" ]; then
    sudo yum install -y memcached
elif [ -x "$(command -v dnf)" ]; then
    sudo dnf install -y memcached
elif [ -x "$(command -v apk)" ]; then
    sudo apk add memcached
else
    echo "Unsupported package manager. Please install memcached manually."
    exit 1
fi

#!/bin/bash
# Install statsd
# Description: Auto-generated install script for statsd

echo "Installing statsd..."

if [ -x "$(command -v apt-get)" ]; then
    sudo apt-get update
    sudo apt-get install -y statsd
elif [ -x "$(command -v yum)" ]; then
    sudo yum install -y statsd
elif [ -x "$(command -v dnf)" ]; then
    sudo dnf install -y statsd
elif [ -x "$(command -v apk)" ]; then
    sudo apk add statsd
else
    echo "Unsupported package manager. Please install statsd manually."
    exit 1
fi

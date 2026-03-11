#!/bin/bash
# Install graylog
# Description: Auto-generated install script for graylog

echo "Installing graylog..."

if [ -x "$(command -v apt-get)" ]; then
    sudo apt-get update
    sudo apt-get install -y graylog
elif [ -x "$(command -v yum)" ]; then
    sudo yum install -y graylog
elif [ -x "$(command -v dnf)" ]; then
    sudo dnf install -y graylog
elif [ -x "$(command -v apk)" ]; then
    sudo apk add graylog
else
    echo "Unsupported package manager. Please install graylog manually."
    exit 1
fi

#!/bin/bash
# Install filebeat
# Description: Auto-generated install script for filebeat

echo "Installing filebeat..."

if [ -x "$(command -v apt-get)" ]; then
    sudo apt-get update
    sudo apt-get install -y filebeat
elif [ -x "$(command -v yum)" ]; then
    sudo yum install -y filebeat
elif [ -x "$(command -v dnf)" ]; then
    sudo dnf install -y filebeat
elif [ -x "$(command -v apk)" ]; then
    sudo apk add filebeat
else
    echo "Unsupported package manager. Please install filebeat manually."
    exit 1
fi

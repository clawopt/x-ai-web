#!/bin/bash
# Install haproxy
# Description: Auto-generated install script for haproxy

echo "Installing haproxy..."

if [ -x "$(command -v apt-get)" ]; then
    sudo apt-get update
    sudo apt-get install -y haproxy
elif [ -x "$(command -v yum)" ]; then
    sudo yum install -y haproxy
elif [ -x "$(command -v dnf)" ]; then
    sudo dnf install -y haproxy
elif [ -x "$(command -v apk)" ]; then
    sudo apk add haproxy
else
    echo "Unsupported package manager. Please install haproxy manually."
    exit 1
fi

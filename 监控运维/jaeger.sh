#!/bin/bash
# Install jaeger
# Description: Auto-generated install script for jaeger

echo "Installing jaeger..."

if [ -x "$(command -v apt-get)" ]; then
    sudo apt-get update
    sudo apt-get install -y jaeger
elif [ -x "$(command -v yum)" ]; then
    sudo yum install -y jaeger
elif [ -x "$(command -v dnf)" ]; then
    sudo dnf install -y jaeger
elif [ -x "$(command -v apk)" ]; then
    sudo apk add jaeger
else
    echo "Unsupported package manager. Please install jaeger manually."
    exit 1
fi

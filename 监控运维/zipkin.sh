#!/bin/bash
# Install zipkin
# Description: Auto-generated install script for zipkin

echo "Installing zipkin..."

if [ -x "$(command -v apt-get)" ]; then
    sudo apt-get update
    sudo apt-get install -y zipkin
elif [ -x "$(command -v yum)" ]; then
    sudo yum install -y zipkin
elif [ -x "$(command -v dnf)" ]; then
    sudo dnf install -y zipkin
elif [ -x "$(command -v apk)" ]; then
    sudo apk add zipkin
else
    echo "Unsupported package manager. Please install zipkin manually."
    exit 1
fi

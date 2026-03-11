#!/bin/bash
# Install jetty
# Description: Auto-generated install script for jetty

echo "Installing jetty..."

if [ -x "$(command -v apt-get)" ]; then
    sudo apt-get update
    sudo apt-get install -y jetty
elif [ -x "$(command -v yum)" ]; then
    sudo yum install -y jetty
elif [ -x "$(command -v dnf)" ]; then
    sudo dnf install -y jetty
elif [ -x "$(command -v apk)" ]; then
    sudo apk add jetty
else
    echo "Unsupported package manager. Please install jetty manually."
    exit 1
fi

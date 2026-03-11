#!/bin/bash
# Install sunny-ngrok
# Description: Auto-generated install script for sunny-ngrok

echo "Installing sunny-ngrok..."

if [ -x "$(command -v apt-get)" ]; then
    sudo apt-get update
    sudo apt-get install -y sunny-ngrok
elif [ -x "$(command -v yum)" ]; then
    sudo yum install -y sunny-ngrok
elif [ -x "$(command -v dnf)" ]; then
    sudo dnf install -y sunny-ngrok
elif [ -x "$(command -v apk)" ]; then
    sudo apk add sunny-ngrok
else
    echo "Unsupported package manager. Please install sunny-ngrok manually."
    exit 1
fi

#!/bin/bash
# Install spinnaker
# Description: Auto-generated install script for spinnaker

echo "Installing spinnaker..."

if [ -x "$(command -v apt-get)" ]; then
    sudo apt-get update
    sudo apt-get install -y spinnaker
elif [ -x "$(command -v yum)" ]; then
    sudo yum install -y spinnaker
elif [ -x "$(command -v dnf)" ]; then
    sudo dnf install -y spinnaker
elif [ -x "$(command -v apk)" ]; then
    sudo apk add spinnaker
else
    echo "Unsupported package manager. Please install spinnaker manually."
    exit 1
fi

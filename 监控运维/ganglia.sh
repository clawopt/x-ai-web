#!/bin/bash
# Install ganglia
# Description: Auto-generated install script for ganglia

echo "Installing ganglia..."

if [ -x "$(command -v apt-get)" ]; then
    sudo apt-get update
    sudo apt-get install -y ganglia
elif [ -x "$(command -v yum)" ]; then
    sudo yum install -y ganglia
elif [ -x "$(command -v dnf)" ]; then
    sudo dnf install -y ganglia
elif [ -x "$(command -v apk)" ]; then
    sudo apk add ganglia
else
    echo "Unsupported package manager. Please install ganglia manually."
    exit 1
fi

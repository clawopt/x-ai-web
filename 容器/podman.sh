#!/bin/bash
# Install podman
# Description: Auto-generated install script for podman

echo "Installing podman..."

if [ -x "$(command -v apt-get)" ]; then
    sudo apt-get update
    sudo apt-get install -y podman
elif [ -x "$(command -v yum)" ]; then
    sudo yum install -y podman
elif [ -x "$(command -v dnf)" ]; then
    sudo dnf install -y podman
elif [ -x "$(command -v apk)" ]; then
    sudo apk add podman
else
    echo "Unsupported package manager. Please install podman manually."
    exit 1
fi

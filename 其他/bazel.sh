#!/bin/bash
# Install bazel
# Description: Auto-generated install script for bazel

echo "Installing bazel..."

if [ -x "$(command -v apt-get)" ]; then
    sudo apt-get update
    sudo apt-get install -y bazel
elif [ -x "$(command -v yum)" ]; then
    sudo yum install -y bazel
elif [ -x "$(command -v dnf)" ]; then
    sudo dnf install -y bazel
elif [ -x "$(command -v apk)" ]; then
    sudo apk add bazel
else
    echo "Unsupported package manager. Please install bazel manually."
    exit 1
fi

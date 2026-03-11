#!/bin/bash
# Install perl
# Description: Auto-generated install script for perl

echo "Installing perl..."

if [ -x "$(command -v apt-get)" ]; then
    sudo apt-get update
    sudo apt-get install -y perl
elif [ -x "$(command -v yum)" ]; then
    sudo yum install -y perl
elif [ -x "$(command -v dnf)" ]; then
    sudo dnf install -y perl
elif [ -x "$(command -v apk)" ]; then
    sudo apk add perl
else
    echo "Unsupported package manager. Please install perl manually."
    exit 1
fi

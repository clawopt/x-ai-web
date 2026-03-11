#!/bin/bash
# Install haskell
# Description: Auto-generated install script for haskell

echo "Installing haskell..."

if [ -x "$(command -v apt-get)" ]; then
    sudo apt-get update
    sudo apt-get install -y haskell
elif [ -x "$(command -v yum)" ]; then
    sudo yum install -y haskell
elif [ -x "$(command -v dnf)" ]; then
    sudo dnf install -y haskell
elif [ -x "$(command -v apk)" ]; then
    sudo apk add haskell
else
    echo "Unsupported package manager. Please install haskell manually."
    exit 1
fi

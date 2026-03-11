#!/bin/bash
# Install elixir
# Description: Auto-generated install script for elixir

echo "Installing elixir..."

if [ -x "$(command -v apt-get)" ]; then
    sudo apt-get update
    sudo apt-get install -y elixir
elif [ -x "$(command -v yum)" ]; then
    sudo yum install -y elixir
elif [ -x "$(command -v dnf)" ]; then
    sudo dnf install -y elixir
elif [ -x "$(command -v apk)" ]; then
    sudo apk add elixir
else
    echo "Unsupported package manager. Please install elixir manually."
    exit 1
fi

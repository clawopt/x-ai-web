#!/bin/bash
# Install rethinkdb
# Description: Auto-generated install script for rethinkdb

echo "Installing rethinkdb..."

if [ -x "$(command -v apt-get)" ]; then
    sudo apt-get update
    sudo apt-get install -y rethinkdb
elif [ -x "$(command -v yum)" ]; then
    sudo yum install -y rethinkdb
elif [ -x "$(command -v dnf)" ]; then
    sudo dnf install -y rethinkdb
elif [ -x "$(command -v apk)" ]; then
    sudo apk add rethinkdb
else
    echo "Unsupported package manager. Please install rethinkdb manually."
    exit 1
fi

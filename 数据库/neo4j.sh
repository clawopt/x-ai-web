#!/bin/bash
# Install neo4j
# Description: Auto-generated install script for neo4j

echo "Installing neo4j..."

if [ -x "$(command -v apt-get)" ]; then
    sudo apt-get update
    sudo apt-get install -y neo4j
elif [ -x "$(command -v yum)" ]; then
    sudo yum install -y neo4j
elif [ -x "$(command -v dnf)" ]; then
    sudo dnf install -y neo4j
elif [ -x "$(command -v apk)" ]; then
    sudo apk add neo4j
else
    echo "Unsupported package manager. Please install neo4j manually."
    exit 1
fi

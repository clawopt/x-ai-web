#!/bin/bash
# Install zookeeper
# Description: Auto-generated install script for zookeeper

echo "Installing zookeeper..."

if [ -x "$(command -v apt-get)" ]; then
    sudo apt-get update
    sudo apt-get install -y zookeeper
elif [ -x "$(command -v yum)" ]; then
    sudo yum install -y zookeeper
elif [ -x "$(command -v dnf)" ]; then
    sudo dnf install -y zookeeper
elif [ -x "$(command -v apk)" ]; then
    sudo apk add zookeeper
else
    echo "Unsupported package manager. Please install zookeeper manually."
    exit 1
fi

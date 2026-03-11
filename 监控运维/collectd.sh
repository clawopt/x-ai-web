#!/bin/bash
# Install collectd
# Description: Auto-generated install script for collectd

echo "Installing collectd..."

if [ -x "$(command -v apt-get)" ]; then
    sudo apt-get update
    sudo apt-get install -y collectd
elif [ -x "$(command -v yum)" ]; then
    sudo yum install -y collectd
elif [ -x "$(command -v dnf)" ]; then
    sudo dnf install -y collectd
elif [ -x "$(command -v apk)" ]; then
    sudo apk add collectd
else
    echo "Unsupported package manager. Please install collectd manually."
    exit 1
fi

#!/bin/bash
# Install tomcat
# Description: Auto-generated install script for tomcat

echo "Installing tomcat..."

if [ -x "$(command -v apt-get)" ]; then
    sudo apt-get update
    sudo apt-get install -y tomcat
elif [ -x "$(command -v yum)" ]; then
    sudo yum install -y tomcat
elif [ -x "$(command -v dnf)" ]; then
    sudo dnf install -y tomcat
elif [ -x "$(command -v apk)" ]; then
    sudo apk add tomcat
else
    echo "Unsupported package manager. Please install tomcat manually."
    exit 1
fi

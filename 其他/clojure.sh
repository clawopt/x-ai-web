#!/bin/bash
# Install clojure
# Description: Auto-generated install script for clojure

echo "Installing clojure..."

if [ -x "$(command -v apt-get)" ]; then
    sudo apt-get update
    sudo apt-get install -y clojure
elif [ -x "$(command -v yum)" ]; then
    sudo yum install -y clojure
elif [ -x "$(command -v dnf)" ]; then
    sudo dnf install -y clojure
elif [ -x "$(command -v apk)" ]; then
    sudo apk add clojure
else
    echo "Unsupported package manager. Please install clojure manually."
    exit 1
fi

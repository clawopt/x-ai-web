# apache2.sh

```bash
#!/bin/bash
# Install apache2
# Description: Auto-generated install script for apache2

echo "Installing apache2..."

if [ -x "$(command -v apt-get)" ]; then
    sudo apt-get update
    sudo apt-get install -y apache2
elif [ -x "$(command -v yum)" ]; then
    sudo yum install -y apache2
elif [ -x "$(command -v dnf)" ]; then
    sudo dnf install -y apache2
elif [ -x "$(command -v apk)" ]; then
    sudo apk add apache2
else
    echo "Unsupported package manager. Please install apache2 manually."
    exit 1
fi

```

# terraform.sh

```bash
#!/bin/bash
# Install terraform
# Description: Auto-generated install script for terraform

echo "Installing terraform..."

if [ -x "$(command -v apt-get)" ]; then
    sudo apt-get update
    sudo apt-get install -y terraform
elif [ -x "$(command -v yum)" ]; then
    sudo yum install -y terraform
elif [ -x "$(command -v dnf)" ]; then
    sudo dnf install -y terraform
elif [ -x "$(command -v apk)" ]; then
    sudo apk add terraform
else
    echo "Unsupported package manager. Please install terraform manually."
    exit 1
fi

```

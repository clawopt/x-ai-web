# ansible.sh

```bash
#!/bin/bash
# Install ansible
# Description: Auto-generated install script for ansible

echo "Installing ansible..."

if [ -x "$(command -v apt-get)" ]; then
    sudo apt-get update
    sudo apt-get install -y ansible
elif [ -x "$(command -v yum)" ]; then
    sudo yum install -y ansible
elif [ -x "$(command -v dnf)" ]; then
    sudo dnf install -y ansible
elif [ -x "$(command -v apk)" ]; then
    sudo apk add ansible
else
    echo "Unsupported package manager. Please install ansible manually."
    exit 1
fi

```

# nagios.sh

```bash
#!/bin/bash
# Install nagios
# Description: Auto-generated install script for nagios

echo "Installing nagios..."

if [ -x "$(command -v apt-get)" ]; then
    sudo apt-get update
    sudo apt-get install -y nagios
elif [ -x "$(command -v yum)" ]; then
    sudo yum install -y nagios
elif [ -x "$(command -v dnf)" ]; then
    sudo dnf install -y nagios
elif [ -x "$(command -v apk)" ]; then
    sudo apk add nagios
else
    echo "Unsupported package manager. Please install nagios manually."
    exit 1
fi

```

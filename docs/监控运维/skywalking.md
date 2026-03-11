# skywalking.sh

```bash
#!/bin/bash
# Install skywalking
# Description: Auto-generated install script for skywalking

echo "Installing skywalking..."

if [ -x "$(command -v apt-get)" ]; then
    sudo apt-get update
    sudo apt-get install -y skywalking
elif [ -x "$(command -v yum)" ]; then
    sudo yum install -y skywalking
elif [ -x "$(command -v dnf)" ]; then
    sudo dnf install -y skywalking
elif [ -x "$(command -v apk)" ]; then
    sudo apk add skywalking
else
    echo "Unsupported package manager. Please install skywalking manually."
    exit 1
fi

```


---

[![Download Script](https://img.shields.io/badge/Download-Script-blue?style=flat-square)](https://raw.githubusercontent.com/clawopt/ops-scripts/main/监控运维/skywalking.sh)

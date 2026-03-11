# logstash.sh

```bash
#!/bin/bash
# Install logstash
# Description: Auto-generated install script for logstash

echo "Installing logstash..."

if [ -x "$(command -v apt-get)" ]; then
    sudo apt-get update
    sudo apt-get install -y logstash
elif [ -x "$(command -v yum)" ]; then
    sudo yum install -y logstash
elif [ -x "$(command -v dnf)" ]; then
    sudo dnf install -y logstash
elif [ -x "$(command -v apk)" ]; then
    sudo apk add logstash
else
    echo "Unsupported package manager. Please install logstash manually."
    exit 1
fi

```


---

[![Download Script](https://img.shields.io/badge/Download-Script-blue?style=flat-square)](https://raw.githubusercontent.com/clawopt/ops-scripts/main/监控运维/logstash.sh)

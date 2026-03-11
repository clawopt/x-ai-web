# cassandra.sh

```bash
#!/bin/bash
# Install cassandra
# Description: Auto-generated install script for cassandra

echo "Installing cassandra..."

if [ -x "$(command -v apt-get)" ]; then
    sudo apt-get update
    sudo apt-get install -y cassandra
elif [ -x "$(command -v yum)" ]; then
    sudo yum install -y cassandra
elif [ -x "$(command -v dnf)" ]; then
    sudo dnf install -y cassandra
elif [ -x "$(command -v apk)" ]; then
    sudo apk add cassandra
else
    echo "Unsupported package manager. Please install cassandra manually."
    exit 1
fi

```


---

[![Download Script](https://img.shields.io/badge/Download-Script-blue?style=flat-square)](https://raw.githubusercontent.com/clawopt/ops-scripts/main/数据库/cassandra.sh)

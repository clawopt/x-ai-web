# mariadb.sh

```bash
#!/bin/bash
# Install mariadb
# Description: Auto-generated install script for mariadb

echo "Installing mariadb..."

if [ -x "$(command -v apt-get)" ]; then
    sudo apt-get update
    sudo apt-get install -y mariadb
elif [ -x "$(command -v yum)" ]; then
    sudo yum install -y mariadb
elif [ -x "$(command -v dnf)" ]; then
    sudo dnf install -y mariadb
elif [ -x "$(command -v apk)" ]; then
    sudo apk add mariadb
else
    echo "Unsupported package manager. Please install mariadb manually."
    exit 1
fi

```


---

[![Download Script](https://img.shields.io/badge/Download-Script-blue?style=flat-square)](https://raw.githubusercontent.com/clawopt/ops-scripts/main/数据库/mariadb.sh)

# puppet.sh

```bash
#!/bin/bash
# Install puppet
# Description: Auto-generated install script for puppet

echo "Installing puppet..."

if [ -x "$(command -v apt-get)" ]; then
    sudo apt-get update
    sudo apt-get install -y puppet
elif [ -x "$(command -v yum)" ]; then
    sudo yum install -y puppet
elif [ -x "$(command -v dnf)" ]; then
    sudo dnf install -y puppet
elif [ -x "$(command -v apk)" ]; then
    sudo apk add puppet
else
    echo "Unsupported package manager. Please install puppet manually."
    exit 1
fi

```


---

[![Download Script](https://img.shields.io/badge/Download-Script-blue?style=flat-square)](https://raw.githubusercontent.com/clawopt/ops-scripts/main/CI_CD/puppet.sh)

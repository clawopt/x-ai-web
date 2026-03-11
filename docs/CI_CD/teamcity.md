# teamcity.sh

```bash
#!/bin/bash
# Install teamcity
# Description: Auto-generated install script for teamcity

echo "Installing teamcity..."

if [ -x "$(command -v apt-get)" ]; then
    sudo apt-get update
    sudo apt-get install -y teamcity
elif [ -x "$(command -v yum)" ]; then
    sudo yum install -y teamcity
elif [ -x "$(command -v dnf)" ]; then
    sudo dnf install -y teamcity
elif [ -x "$(command -v apk)" ]; then
    sudo apk add teamcity
else
    echo "Unsupported package manager. Please install teamcity manually."
    exit 1
fi

```


---

[![Download Script](https://img.shields.io/badge/Download-Script-blue?style=flat-square)](https://raw.githubusercontent.com/clawopt/ops-scripts/main/CI_CD/teamcity.sh)

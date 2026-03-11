# ffmpeg.sh

```bash
#!/bin/bash
# Install ffmpeg
# Description: Auto-generated install script for ffmpeg

echo "Installing ffmpeg..."

if [ -x "$(command -v apt-get)" ]; then
    sudo apt-get update
    sudo apt-get install -y ffmpeg
elif [ -x "$(command -v yum)" ]; then
    sudo yum install -y ffmpeg
elif [ -x "$(command -v dnf)" ]; then
    sudo dnf install -y ffmpeg
elif [ -x "$(command -v apk)" ]; then
    sudo apk add ffmpeg
else
    echo "Unsupported package manager. Please install ffmpeg manually."
    exit 1
fi

```


---

[![Download Script](https://img.shields.io/badge/Download-Script-blue?style=flat-square)](https://raw.githubusercontent.com/clawopt/ops-scripts/main/其他/ffmpeg.sh)

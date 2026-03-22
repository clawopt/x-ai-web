---
title: 环境准备：搭建 AI 开发环境
---

# 环境准备：搭建 AI 开发环境

在开始 AI 编程之前，我们需要搭建一个完整的开发环境。本章将指导你完成 Python 安装、虚拟环境配置、开发工具设置等关键步骤。

## Python 安装与版本选择

### 版本选择建议

对于 AI 开发，我们推荐使用 **Python 3.10 或 3.11**：

| Python 版本 | 状态 | AI 库兼容性 | 推荐度 |
|-------------|------|-------------|--------|
| Python 3.8 | 安全支持 | 良好 | ⭐⭐⭐ |
| Python 3.9 | 安全支持 | 良好 | ⭐⭐⭐ |
| Python 3.10 | 活跃支持 | 优秀 | ⭐⭐⭐⭐⭐ |
| Python 3.11 | 活跃支持 | 优秀 | ⭐⭐⭐⭐⭐ |
| Python 3.12 | 最新版本 | 较新库可能不兼容 | ⭐⭐⭐ |

### 安装方法

**macOS（使用 Homebrew）**：
```bash
# 安装 Homebrew（如果未安装）
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# 安装 Python
brew install python@3.11

# 验证安装
python3.11 --version
```

**Windows（官网下载）**：
1. 访问 [python.org](https://www.python.org/downloads/)
2. 下载 Python 3.11 安装包
3. 安装时勾选 "Add Python to PATH"
4. 打开命令提示符验证：`python --version`

**Linux（Ubuntu/Debian）**：
```bash
# 更新包列表
sudo apt update

# 安装 Python 3.11
sudo apt install python3.11 python3.11-venv python3.11-dev

# 验证安装
python3.11 --version
```

### 验证安装

运行以下代码验证 Python 是否正确安装：

```python
import sys
print(f"Python 版本: {sys.version}")
print(f"Python 路径: {sys.executable}")
print(f"Python 版本信息: {sys.version_info}")
```

<iframe
  frameBorder="0"
  height="300px"
  src="https://onecompiler.com/embed/python?codeChangeEvent=true&hideLanguageSelection=true&hideNew=true"
  width="100%"
></iframe>

## 虚拟环境管理

### 为什么需要虚拟环境？

在 AI 开发中，不同项目可能需要不同版本的库：

```
项目 A: PyTorch 2.0 + NumPy 1.24
项目 B: PyTorch 1.12 + NumPy 1.21  # 版本冲突！
```

虚拟环境可以隔离不同项目的依赖，避免版本冲突。

### 使用 venv 创建虚拟环境

**创建虚拟环境**：
```bash
# 创建名为 ai_env 的虚拟环境
python3.11 -m venv ai_env

# 激活虚拟环境
# macOS/Linux:
source ai_env/bin/activate

# Windows:
ai_env\Scripts\activate

# 验证当前环境
which python  # macOS/Linux
where python  # Windows
```

**管理虚拟环境**：
```bash
# 查看已安装的包
pip list

# 安装包
pip install numpy pandas matplotlib

# 导出依赖
pip freeze > requirements.txt

# 从文件安装依赖
pip install -r requirements.txt

# 退出虚拟环境
deactivate
```

### 使用 conda 管理环境（推荐用于 AI 开发）

Anaconda/Miniconda 是 AI 开发中常用的环境管理工具：

```bash
# 安装 Miniconda（轻量版）
# macOS/Linux:
wget https://repo.anaconda.com/miniconda/Miniconda3-latest-Linux-x86_64.sh
bash Miniconda3-latest-Linux-x86_64.sh

# 创建环境
conda create -n ai_course python=3.11

# 激活环境
conda activate ai_course

# 安装常用 AI 库
conda install numpy pandas matplotlib scikit-learn

# 导出环境
conda env export > environment.yml

# 从文件创建环境
conda env create -f environment.yml
```

### 环境管理最佳实践

```python
# 检查当前环境的代码
import sys
import os

print("=== 环境信息 ===")
print(f"Python 版本: {sys.version}")
print(f"虚拟环境路径: {sys.prefix}")
print(f"是否在虚拟环境中: {'是' if hasattr(sys, 'real_prefix') or (hasattr(sys, 'base_prefix') and sys.base_prefix != sys.prefix) else '否'}")

# 检查关键库版本
try:
    import numpy as np
    print(f"NumPy 版本: {np.__version__}")
except ImportError:
    print("NumPy 未安装")

try:
    import pandas as pd
    print(f"Pandas 版本: {pd.__version__}")
except ImportError:
    print("Pandas 未安装")
```

<iframe
  frameBorder="0"
  height="350px"
  src="https://onecompiler.com/embed/python?codeChangeEvent=true&hideLanguageSelection=true&hideNew=true"
  width="100%"
></iframe>

## Jupyter Notebook 配置

### 安装 Jupyter

```bash
# 在虚拟环境中安装
pip install jupyter notebook

# 启动 Jupyter Notebook
jupyter notebook

# 或使用 JupyterLab（更现代的界面）
pip install jupyterlab
jupyter lab
```

### Jupyter 常用快捷键

| 快捷键 | 功能 |
|--------|------|
| `Shift + Enter` | 运行当前单元格并跳到下一个 |
| `Ctrl + Enter` | 运行当前单元格 |
| `A` | 在当前单元格上方插入新单元格 |
| `B` | 在当前单元格下方插入新单元格 |
| `DD` | 删除当前单元格 |
| `M` | 切换为 Markdown 单元格 |
| `Y` | 切换为代码单元格 |

### Jupyter 魔法命令

```python
# 在 Jupyter 中运行这些魔法命令

# 查看所有魔法命令
%lsmagics

# 计算代码执行时间
%timeit sum(range(1000000))

# 查看变量信息
x = 42
?x

# 执行外部 Python 文件
%run script.py

# 在单元格中绘图
%matplotlib inline
import matplotlib.pyplot as plt
plt.plot([1, 2, 3, 4])
plt.show()

# 查看当前目录
%pwd

# 切换目录
%cd /path/to/directory

# 列出文件
%ls
```

<iframe
  frameBorder="0"
  height="400px"
  src="https://onecompiler.com/embed/python?codeChangeEvent=true&hideLanguageSelection=true&hideNew=true"
  width="100%"
></iframe>

## VS Code 配置

### 推荐扩展

1. **Python**（Microsoft）- 核心Python支持
2. **Pylance**（Microsoft）- 快速语言服务器
3. **Jupyter**（Microsoft）- Notebook支持
4. **Python Indent** - 自动缩进
5. **autoDocstring** - 自动生成文档字符串

### 配置文件（settings.json）

```json
{
    "python.defaultInterpreterPath": "${workspaceFolder}/ai_env/bin/python",
    "python.formatting.provider": "black",
    "python.linting.enabled": true,
    "python.linting.pylintEnabled": true,
    "editor.formatOnSave": true,
    "editor.tabSize": 4,
    "files.autoSave": "afterDelay",
    "jupyter.askForKernelRestart": false
}
```

### 常用快捷键

| 快捷键 | 功能 |
|--------|------|
| `F5` | 启动调试 |
| `Ctrl + F5` | 运行不调试 |
| `F9` | 切换断点 |
| `Ctrl + `` | 打开终端 |
| `Ctrl + Shift + P` | 命令面板 |

## 常用 AI 库安装

### 基础科学计算库

```bash
# 创建 requirements.txt
cat > requirements.txt << EOF
numpy>=1.24.0
pandas>=2.0.0
matplotlib>=3.7.0
scipy>=1.10.0
scikit-learn>=1.3.0
EOF

# 安装
pip install -r requirements.txt
```

### 深度学习框架

```bash
# PyTorch (CPU版本)
pip install torch torchvision torchaudio

# PyTorch (GPU版本 - 访问 pytorch.org 获取正确命令)
# pip install torch torchvision torchaudio --index-url https://download.pytorch.org/whl/cu118

# TensorFlow
pip install tensorflow

# Hugging Face Transformers
pip install transformers datasets
```

### 验证安装

```python
# 验证所有关键库是否正确安装
import importlib

def check_library(lib_name):
    try:
        lib = importlib.import_module(lib_name)
        version = getattr(lib, '__version__', '未知')
        print(f"✓ {lib_name}: {version}")
        return True
    except ImportError:
        print(f"✗ {lib_name}: 未安装")
        return False

print("=== 检查 AI 开发环境 ===\n")

libraries = [
    'numpy',      # 数值计算
    'pandas',     # 数据处理
    'matplotlib', # 可视化
    'sklearn',    # 机器学习
]

for lib in libraries:
    check_library(lib)

print("\n=== 深度学习框架 ===\n")
check_library('torch')
check_library('tensorflow')
```

<iframe
  frameBorder="0"
  height="400px"
  src="https://onecompiler.com/embed/python?codeChangeEvent=true&hideLanguageSelection=true&hideNew=true"
  width="100%"
></iframe>

## 练习题

**任务**：创建虚拟环境并安装 numpy、pandas、matplotlib 库。

**步骤**：

1. 创建虚拟环境：
```bash
python3 -m venv ai_learning
```

2. 激活虚拟环境：
```bash
# macOS/Linux
source ai_learning/bin/activate

# Windows
ai_learning\Scripts\activate
```

3. 安装库：
```bash
pip install numpy pandas matplotlib
```

4. 验证安装：
```python
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt

print(f"NumPy: {np.__version__}")
print(f"Pandas: {pd.__version__}")
print(f"Matplotlib: {plt.__version__}")
```

5. 创建 requirements.txt：
```bash
pip freeze > requirements.txt
```

**预期输出**：
```
NumPy: 1.24.x
Pandas: 2.0.x
Matplotlib: 3.7.x
```

---

[下一章：数字类型](/python/10-number-types)

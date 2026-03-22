---
title: 数字类型：模型参数、损失值、学习率
---

# 数字类型：模型参数、损失值、学习率

在 AI 开发中，数字类型无处不在：学习率、损失值、准确率、训练轮数、批次大小等。本章将介绍 Python 的数字类型及其在 AI 场景中的应用。

## 整数：训练轮数、批次大小

整数（int）用于表示没有小数部分的数值，在 AI 中常用于表示训练轮数、批次大小、样本数量等。

### 基本用法

```python
# 训练配置
epochs = 100              # 训练轮数
batch_size = 32           # 批次大小
num_samples = 50000       # 样本数量
num_classes = 10          # 类别数量

# 计算总批次数
num_batches = num_samples // batch_size
print(f"总批次数: {num_batches}")

# 剩余样本数
remainder = num_samples % batch_size
print(f"剩余样本: {remainder}")
```

<iframe
  frameBorder="0"
  height="350px"
  src="https://onecompiler.com/embed/python?codeChangeEvent=true&hideLanguageSelection=true&hideNew=true"
  width="100%"
></iframe>

### 整数运算

```python
# 整除和取模 - 常用于批次计算
total_samples = 1000
batch_size = 32

num_batches = total_samples // batch_size  # 整除: 31
remainder = total_samples % batch_size      # 取模: 8

print(f"完整批次: {num_batches}")
print(f"最后一批样本数: {remainder}")

# 幂运算 - 用于计算参数量
layers = 12
hidden_size = 768
# 简单估算参数量
params_estimate = layers * hidden_size ** 2
print(f"参数量估计: {params_estimate:,}")
```

<iframe
  frameBorder="0"
  height="350px"
  src="https://onecompiler.com/embed/python?codeChangeEvent=true&hideLanguageSelection=true&hideNew=true"
  width="100%"
></iframe>

## 浮点数：学习率、准确率、损失值

浮点数（float）用于表示带有小数部分的数值，在 AI 中用于学习率、损失值、准确率等需要精确表示的数值。

### 基本用法

```python
# 模型超参数
learning_rate = 0.001     # 学习率
dropout_rate = 0.1        # Dropout 比率
weight_decay = 1e-4       # 权重衰减

# 训练指标
loss = 0.5234             # 损失值
accuracy = 0.9567         # 准确率
f1_score = 0.8923         # F1 分数

# 科学计数法
large_number = 1.8e12     # 1.8 万亿（模型参数量）
small_number = 1e-6       # 百万分之一

print(f"学习率: {learning_rate}")
print(f"参数量: {large_number:.2e}")
```

<iframe
  frameBorder="0"
  height="350px"
  src="https://onecompiler.com/embed/python?codeChangeEvent=true&hideLanguageSelection=true&hideNew=true"
  width="100%"
></iframe>

### 浮点数精度

```python
# 浮点数精度问题
a = 0.1 + 0.2
print(f"0.1 + 0.2 = {a}")  # 可能不是精确的 0.3

# 使用 round 处理精度
loss1 = 0.123456789
loss2 = 0.123456788
print(f"原始差值: {loss1 - loss2}")
print(f"四舍五入: {round(loss1 - loss2, 10)}")

# 格式化输出
accuracy = 0.956789
print(f"准确率: {accuracy:.2%}")    # 百分比格式
print(f"准确率: {accuracy:.4f}")    # 保留4位小数
print(f"准确率: {accuracy:.2e}")    # 科学计数法
```

<iframe
  frameBorder="0"
  height="350px"
  src="https://onecompiler.com/embed/python?codeChangeEvent=true&hideLanguageSelection=true&hideNew=true"
  width="100%"
></iframe>

### 学习率衰减

```python
# 指数衰减学习率
initial_lr = 0.1          # 初始学习率
decay_rate = 0.95         # 衰减率

print("学习率衰减过程:")
for epoch in range(1, 11):
    current_lr = initial_lr * (decay_rate ** epoch)
    print(f"Epoch {epoch:2d}: lr = {current_lr:.6f}")

# 余弦退火学习率
import math

initial_lr = 0.1
min_lr = 1e-6
total_epochs = 100

print("\n余弦退火学习率:")
for epoch in [0, 25, 50, 75, 100]:
    progress = epoch / total_epochs
    lr = min_lr + 0.5 * (initial_lr - min_lr) * (1 + math.cos(math.pi * progress))
    print(f"Epoch {epoch:3d}: lr = {lr:.6f}")
```

<iframe
  frameBorder="0"
  height="400px"
  src="https://onecompiler.com/embed/python?codeChangeEvent=true&hideLanguageSelection=true&hideNew=true"
  width="100%"
></iframe>

## 类型转换：配置文件解析

在实际 AI 项目中，配置文件中的数值通常以字符串形式存储，需要进行类型转换。

### 字符串转数字

```python
# 从配置文件读取的字符串
lr_str = "0.001"
epochs_str = "100"
batch_str = "32"

# 类型转换
learning_rate = float(lr_str)
epochs = int(epochs_str)
batch_size = int(batch_str)

print(f"学习率类型: {type(learning_rate)}, 值: {learning_rate}")
print(f"训练轮数类型: {type(epochs)}, 值: {epochs}")
print(f"批次大小类型: {type(batch_size)}, 值: {batch_size}")

# 处理可能的错误
def safe_float(value, default=0.0):
    """安全转换为浮点数"""
    try:
        return float(value)
    except (ValueError, TypeError):
        return default

# 测试
print(safe_float("0.001"))      # 0.001
print(safe_float("invalid"))    # 0.0
print(safe_float(None))         # 0.0
```

<iframe
  frameBorder="0"
  height="350px"
  src="https://onecompiler.com/embed/python?codeChangeEvent=true&hideLanguageSelection=true&hideNew=true"
  width="100%"
></iframe>

### 数字转字符串

```python
# 格式化输出
loss = 0.5234
accuracy = 0.9567
epoch = 10

# f-string 格式化
log_msg = f"Epoch {epoch}, Loss: {loss:.4f}, Accuracy: {accuracy:.2%}"
print(log_msg)

# format 方法
log_msg = "Epoch {}, Loss: {:.4f}, Accuracy: {:.2%}".format(epoch, loss, accuracy)
print(log_msg)

# 构建文件名
model_name = "resnet"
version = 1
filename = f"{model_name}_v{version}.pth"
print(f"模型文件: {filename}")
```

<iframe
  frameBorder="0"
  height="300px"
  src="https://onecompiler.com/embed/python?codeChangeEvent=true&hideLanguageSelection=true&hideNew=true"
  width="100%"
></iframe>

## 类型检查：数据验证

在 AI 开发中，类型检查可以帮助我们及早发现错误。

### type() 和 isinstance()

```python
# type() - 获取类型
learning_rate = 0.001
print(type(learning_rate))          # <class 'float'>
print(type(learning_rate) == float) # True

# isinstance() - 检查类型（推荐）
epochs = 100
print(isinstance(epochs, int))      # True
print(isinstance(epochs, (int, float)))  # True，可以是其中之一

# 检查数值类型
def validate_config(config):
    """验证配置参数"""
    if not isinstance(config.get('learning_rate'), (int, float)):
        raise TypeError("learning_rate 必须是数字")
    if not isinstance(config.get('epochs'), int):
        raise TypeError("epochs 必须是整数")
    if config.get('learning_rate') <= 0:
        raise ValueError("learning_rate 必须大于 0")
    return True

# 测试
config = {'learning_rate': 0.001, 'epochs': 100}
print(validate_config(config))
```

<iframe
  frameBorder="0"
  height="350px"
  src="https://onecompiler.com/embed/python?codeChangeEvent=true&hideLanguageSelection=true&hideNew=true"
  width="100%"
></iframe>

## 数学运算：损失计算

```python
# 常用数学运算
import math

# 损失值计算示例
predictions = [0.9, 0.3, 0.8, 0.1]
labels = [1, 0, 1, 0]

# 均方误差 (MSE)
mse = sum((p - l) ** 2 for p, l in zip(predictions, labels)) / len(predictions)
print(f"MSE Loss: {mse:.4f}")

# 交叉熵损失 (简化版)
def binary_cross_entropy(pred, label, epsilon=1e-7):
    """二分类交叉熵"""
    pred = max(min(pred, 1 - epsilon), epsilon)  # 避免log(0)
    return -label * math.log(pred) - (1 - label) * math.log(1 - pred)

bce = sum(binary_cross_entropy(p, l) for p, l in zip(predictions, labels)) / len(predictions)
print(f"BCE Loss: {bce:.4f}")

# 常用数学函数
print(f"e^2 = {math.exp(2):.4f}")
print(f"log(10) = {math.log(10):.4f}")
print(f"sqrt(16) = {math.sqrt(16)}")
print(f"ceil(3.2) = {math.ceil(3.2)}")
print(f"floor(3.8) = {math.floor(3.8)}")
```

<iframe
  frameBorder="0"
  height="400px"
  src="https://onecompiler.com/embed/python?codeChangeEvent=true&hideLanguageSelection=true&hideNew=true"
  width="100%"
></iframe>

## 练习题

**任务**：计算学习率衰减 - 初始学习率 0.1，每轮衰减 0.95，计算第 10 轮的学习率。

**要求**：
1. 定义初始学习率 `initial_lr = 0.1`
2. 定义衰减率 `decay_rate = 0.95`
3. 计算第 10 轮的学习率
4. 输出结果，保留 6 位小数

**参考答案**：

```python
initial_lr = 0.1
decay_rate = 0.95
epoch = 10

current_lr = initial_lr * (decay_rate ** epoch)
print(f"第 {epoch} 轮学习率: {current_lr:.6f}")
# 输出: 第 10 轮学习率: 0.058742
```

<iframe
  frameBorder="0"
  height="350px"
  src="https://onecompiler.com/embed/python?codeChangeEvent=true&hideLanguageSelection=true&hideNew=true"
  width="100%"
></iframe>

---

[下一节：字符串](/python/11-string)

---
title: 字符串：提示词处理与日志输出
---

# 字符串：提示词处理与日志输出

在 AI 开发中，字符串无处不在：提示词（Prompt）、日志输出、配置文件、模型名称等。本章将介绍 Python 字符串的操作技巧及其在 AI 场景中的应用。

## 字符串创建与拼接

### 基本创建

```python
# 单引号和双引号
model_name = "GPT-4"
prompt = '请解释什么是深度学习'

# 三引号 - 多行字符串（常用于 System Prompt）
system_prompt = """
你是一个专业的AI助手，请根据用户的问题给出详细、准确的回答。

注意事项：
1. 回答要简洁明了
2. 提供具体的例子
3. 避免使用专业术语
"""

print(f"模型名称: {model_name}")
print(f"提示词长度: {len(prompt)} 字符")
print(f"系统提示词行数: {len(system_prompt.split(chr(10)))} 行")
```

<iframe
  frameBorder="0"
  height="350px"
  src="https://onecompiler.com/embed/python?codeChangeEvent=true&hideLanguageSelection=true&hideNew=true"
  width="100%"
></iframe>

### 字符串拼接

```python
# 使用 + 号拼接
user_name = "张三"
greeting = "你好，" + user_name + "！欢迎使用AI助手。"
print(greeting)

# 使用 join() 高效拼接
models = ["GPT-4", "Claude", "Gemini", "Llama"]
model_list = " | ".join(models)
print(f"可用模型: {model_list}")

# 使用 f-string（推荐）
model = "GPT-4"
accuracy = 0.95
log_msg = f"模型 {model} 的准确率为 {accuracy:.2%}"
print(log_msg)
```

<iframe
  frameBorder="0"
  height="300px"
  src="https://onecompiler.com/embed/python?codeChangeEvent=true&hideLanguageSelection=true&hideNew=true"
  width="100%"
></iframe>

## f-string 格式化：训练日志输出

f-string 是 Python 3.6+ 推荐的字符串格式化方式，非常适合 AI 场景中的日志输出。

### 基本用法

```python
# 基本变量插入
model_name = "ResNet-50"
epochs = 100
learning_rate = 0.001

log = f"开始训练 {model_name}，共 {epochs} 轮，学习率 {learning_rate}"
print(log)

# 表达式计算
batch_size = 32
total_samples = 50000
print(f"总批次数: {total_samples // batch_size}")

# 调用函数
loss = 0.5234
print(f"损失值（保留4位小数）: {loss:.4f}")
```

<iframe
  frameBorder="0"
  height="300px"
  src="https://onecompiler.com/embed/python?codeChangeEvent=true&hideLanguageSelection=true&hideNew=true"
  width="100%"
></iframe>

### 格式化选项

```python
# 数值格式化
accuracy = 0.95678
loss = 0.12345
params = 175000000000

print(f"准确率: {accuracy:.2%}")      # 百分比: 95.68%
print(f"损失值: {loss:.4f}")          # 保留小数: 0.1235
print(f"参数量: {params:.2e}")        # 科学计数法: 1.75e+11
print(f"参数量: {params:,}")          # 千位分隔符: 175,000,000,000

# 宽度和对齐
for i in range(1, 6):
    print(f"Epoch {i:2d}: loss = {0.5/i:.4f}")

# 左对齐、右对齐、居中
print(f"{'模型名称':<10}: GPT-4")      # 左对齐
print(f"{'准确率':>10}: 95.67%")      # 右对齐
print(f"{'训练中':^10}")               # 居中
```

<iframe
  frameBorder="0"
  height="350px"
  src="https://onecompiler.com/embed/python?codeChangeEvent=true&hideLanguageSelection=true&hideNew=true"
  width="100%"
></iframe>

### 训练日志示例

```python
# 模拟训练日志输出
def format_training_log(epoch, total_epochs, loss, accuracy, lr):
    """格式化训练日志"""
    progress = epoch / total_epochs * 100
    bar_length = 20
    filled = int(bar_length * epoch / total_epochs)
    bar = '█' * filled + '░' * (bar_length - filled)
    
    log = (
        f"\r训练进度: [{bar}] {progress:5.1f}% | "
        f"Epoch {epoch:3d}/{total_epochs} | "
        f"Loss: {loss:.4f} | "
        f"Acc: {accuracy:.2%} | "
        f"LR: {lr:.6f}"
    )
    return log

# 模拟训练过程
import time

print("开始训练...")
total_epochs = 10
for epoch in range(1, total_epochs + 1):
    loss = 0.5 / epoch
    accuracy = 0.8 + 0.015 * epoch
    lr = 0.001 * (0.95 ** epoch)
    
    log = format_training_log(epoch, total_epochs, loss, accuracy, lr)
    print(log, end='')
    time.sleep(0.1)

print("\n训练完成！")
```

<iframe
  frameBorder="0"
  height="400px"
  src="https://onecompiler.com/embed/python?codeChangeEvent=true&hideLanguageSelection=true&hideNew=true"
  width="100%"
></iframe>

## 常用方法：文本预处理

### 大小写与空白处理

```python
# 大小写转换
model_name = "gpt-4-turbo"
print(f"大写: {model_name.upper()}")      # GPT-4-TURBO
print(f"小写: {model_name.lower()}")      # gpt-4-turbo
print(f"标题: {model_name.title()}")      # Gpt-4-Turbo

# 去除空白
user_input = "  请帮我写一段代码  "
cleaned = user_input.strip()   # 去除两端空白
print(f"原始: '{user_input}'")
print(f"清理后: '{cleaned}'")

# 去除特定字符
filename = "model_v1.pth\n"
cleaned = filename.strip("\n")
print(f"文件名: '{cleaned}'")
```

<iframe
  frameBorder="0"
  height="300px"
  src="https://onecompiler.com/embed/python?codeChangeEvent=true&hideLanguageSelection=true&hideNew=true"
  width="100%"
></iframe>

### 分割与连接

```python
# 分割字符串
config_str = "learning_rate=0.001,batch_size=32,epochs=100"
items = config_str.split(",")
print("配置项:", items)

# 解析键值对
config = {}
for item in items:
    key, value = item.split("=")
    config[key] = value
print("解析后:", config)

# 连接字符串
models = ["GPT-4", "Claude", "Gemini"]
print(" | ".join(models))
print("\n".join(models))

# 多行分割
prompt = """第一行
第二行
第三行"""
lines = prompt.splitlines()
print(f"共 {len(lines)} 行")
```

<iframe
  frameBorder="0"
  height="350px"
  src="https://onecompiler.com/embed/python?codeChangeEvent=true&hideLanguageSelection=true&hideNew=true"
  width="100%"
></iframe>

### 查找与替换

```python
# 查找
text = "Python是最好的AI编程语言"
print(f"'AI' 位置: {text.find('AI')}")        # 返回索引
print(f"包含 'Python': {'Python' in text}")   # 布尔检查

# 替换
template = "Hello, {name}! Your model {model} is ready."
result = template.replace("{name}", "张三").replace("{model}", "GPT-4")
print(result)

# 批量替换
replacements = {"{name}": "李四", "{model}": "Claude"}
for old, new in replacements.items():
    template = template.replace(old, new)
print(template)
```

<iframe
  frameBorder="0"
  height="300px"
  src="https://onecompiler.com/embed/python?codeChangeEvent=true&hideLanguageSelection=true&hideNew=true"
  width="100%"
></iframe>

### 检查与验证

```python
# 前缀和后缀检查
filename = "model_v1.pth"
print(f"以 'model' 开头: {filename.startswith('model')}")  # True
print(f"以 '.pth' 结尾: {filename.endswith('.pth')}")      # True

# 内容检查
text = "GPT-4 is amazing!"
print(f"只包含字母数字: {text.isalnum()}")     # False（有空格和标点）
print(f"只包含字母: {text.isalpha()}")         # False
print(f"只包含数字: {'12345'.isdigit()}")      # True

# 实际应用：文件类型检查
def is_model_file(filename):
    """检查是否为模型文件"""
    valid_extensions = ['.pth', '.pt', '.h5', '.onnx', '.bin']
    return any(filename.endswith(ext) for ext in valid_extensions)

print(is_model_file("model.pth"))      # True
print(is_model_file("data.csv"))       # False
```

<iframe
  frameBorder="0"
  height="350px"
  src="https://onecompiler.com/embed/python?codeChangeEvent=true&hideLanguageSelection=true&hideNew=true"
  width="100%"
></iframe>

## 多行字符串：System Prompt 编写

在 AI 应用中，System Prompt 通常需要多行字符串来编写复杂的指令。

### 编写 System Prompt

```python
# 使用三引号编写 System Prompt
system_prompt = """
你是一个专业的AI编程助手，专注于帮助用户解决Python编程问题。

## 你的职责
1. 回答Python相关的技术问题
2. 提供代码示例和最佳实践
3. 解释代码的工作原理

## 回答规范
- 代码要有详细注释
- 解释要通俗易懂
- 提供可运行的示例

## 注意事项
- 不要提供不安全的代码
- 遵循PEP 8编码规范
"""

print(f"System Prompt 长度: {len(system_prompt)} 字符")
print(f"行数: {len(system_prompt.splitlines())} 行")
```

<iframe
  frameBorder="0"
  height="300px"
  src="https://onecompiler.com/embed/python?codeChangeEvent=true&hideLanguageSelection=true&hideNew=true"
  width="100%"
></iframe>

### 构建对话消息

```python
# 构建聊天消息
def build_messages(system_prompt, user_message):
    """构建对话消息列表"""
    return [
        {"role": "system", "content": system_prompt},
        {"role": "user", "content": user_message}
    ]

system = "你是一个AI助手"
user = "请解释什么是机器学习"

messages = build_messages(system, user)
for msg in messages:
    print(f"[{msg['role']}]: {msg['content'][:50]}...")

# 格式化输出消息
def format_message(role, content, max_length=100):
    """格式化消息输出"""
    truncated = content[:max_length] + "..." if len(content) > max_length else content
    return f"[{role.upper():^8}] {truncated}"

print(format_message("system", system))
print(format_message("user", user))
```

<iframe
  frameBorder="0"
  height="350px"
  src="https://onecompiler.com/embed/python?codeChangeEvent=true&hideLanguageSelection=true&hideNew=true"
  width="100%"
></iframe>

## 练习题

**任务**：使用 f-string 输出训练日志，格式为 "Epoch: 1/100, Loss: 0.5234, Accuracy: 85.67%"

**要求**：
1. 定义变量 `epoch = 1`, `total_epochs = 100`, `loss = 0.5234`, `accuracy = 0.8567`
2. 使用 f-string 格式化输出
3. Loss 保留 4 位小数，Accuracy 显示为百分比（2 位小数）

**参考答案**：

```python
epoch = 1
total_epochs = 100
loss = 0.5234
accuracy = 0.8567

log = f"Epoch: {epoch}/{total_epochs}, Loss: {loss:.4f}, Accuracy: {accuracy:.2%}"
print(log)
# 输出: Epoch: 1/100, Loss: 0.5234, Accuracy: 85.67%
```

<iframe
  frameBorder="0"
  height="300px"
  src="https://onecompiler.com/embed/python?codeChangeEvent=true&hideLanguageSelection=true&hideNew=true"
  width="100%"
></iframe>

---

[下一节：布尔值与None](/python/12-boolean-none)

---
title: 布尔值与None：训练状态控制
---

# 布尔值与None：训练状态控制

在 AI 开发中，布尔值用于控制训练流程、条件开关，而 None 常用于初始化和占位。本章将介绍这两种特殊类型的应用。

## 布尔值：条件开关

### 基本用法

```python
# 训练状态标志
is_training = True
use_gpu = False
use_mixed_precision = True

# 检查条件
if is_training:
    print("模型正在训练中...")

if use_gpu:
    print("使用 GPU 加速")
else:
    print("使用 CPU 训练")
```

<iframe
  frameBorder="0"
  height="300px"
  src="https://onecompiler.com/embed/python?codeChangeEvent=true&hideLanguageSelection=true&hideNew=true"
  width="100%"
></iframe>

### 比较运算返回布尔值

```python
# 模型评估
accuracy = 0.95
loss = 0.05

# 比较运算
is_good_model = accuracy > 0.9
is_converged = loss < 0.1
is_ready = is_good_model and is_converged

print(f"模型优秀: {is_good_model}")
print(f"已收敛: {is_converged}")
print(f"可部署: {is_ready}")

# 链式比较
is_valid_accuracy = 0.0 <= accuracy <= 1.0
print(f"准确率有效: {is_valid_accuracy}")
```

<iframe
  frameBorder="0"
  height="300px"
  src="https://onecompiler.com/embed/python?codeChangeEvent=true&hideLanguageSelection=true&hideNew=true"
  width="100%"
></iframe>

### 训练控制示例

```python
# 训练控制参数
config = {
    "use_gpu": True,
    "use_amp": True,           # 自动混合精度
    "gradient_clip": True,
    "early_stop": True,
    "save_best": True,
    "verbose": True
}

# 根据配置决定训练行为
def setup_training(config):
    """设置训练环境"""
    device = "cuda" if config["use_gpu"] else "cpu"
    
    if config["use_amp"]:
        print("启用自动混合精度训练")
    
    if config["gradient_clip"]:
        print("启用梯度裁剪")
    
    if config["early_stop"]:
        print("启用早停机制")
    
    if config["verbose"]:
        print(f"训练设备: {device}")
    
    return device

device = setup_training(config)
```

<iframe
  frameBorder="0"
  height="350px"
  src="https://onecompiler.com/embed/python?codeChangeEvent=true&hideLanguageSelection=true&hideNew=true"
  width="100%"
></iframe>

## None：模型初始化占位

### 基本用法

```python
# 初始化变量
best_model = None
best_loss = None
checkpoint_path = None

# 检查是否已初始化
if best_model is None:
    print("模型尚未加载")

if checkpoint_path is not None:
    print(f"从 {checkpoint_path} 加载模型")
```

<iframe
  frameBorder="0"
  height="250px"
  src="https://onecompiler.com/embed/python?codeChangeEvent=true&hideLanguageSelection=true&hideNew=true"
  width="100%"
></iframe>

### None vs 其他假值

```python
# None 与其他假值的区别
values = [None, False, 0, 0.0, "", [], {}]

for val in values:
    print(f"值: {repr(val):8} | bool: {bool(val):5} | 是None: {val is None}")

# 实际应用：区分"未设置"和"设置为False"
use_cache = None  # 未设置
use_cache = False  # 明确禁用

if use_cache is None:
    print("使用默认缓存设置")
elif use_cache:
    print("启用缓存")
else:
    print("禁用缓存")
```

<iframe
  frameBorder="0"
  height="350px"
  src="https://onecompiler.com/embed/python?codeChangeEvent=true&hideLanguageSelection=true&hideNew=true"
  width="100%"
></iframe>

### 模型初始化示例

```python
# 模型管理类
class ModelManager:
    def __init__(self):
        self.model = None
        self.optimizer = None
        self.scheduler = None
        self.best_loss = float('inf')
    
    def load_model(self, model):
        """加载模型"""
        self.model = model
        print("模型已加载")
    
    def is_loaded(self):
        """检查模型是否已加载"""
        return self.model is not None
    
    def reset(self):
        """重置所有状态"""
        self.model = None
        self.optimizer = None
        self.scheduler = None
        self.best_loss = float('inf')
        print("状态已重置")

# 使用示例
manager = ModelManager()
print(f"模型已加载: {manager.is_loaded()}")

# 模拟加载模型
manager.load_model("ResNet-50")
print(f"模型已加载: {manager.is_loaded()}")
```

<iframe
  frameBorder="0"
  height="350px"
  src="https://onecompiler.com/embed/python?codeChangeEvent=true&hideLanguageSelection=true&hideNew=true"
  width="100%"
></iframe>

## 类型检查：数据验证

### isinstance() 检查

```python
# 类型检查
value = 0.001

# 检查是否为数字类型
if isinstance(value, (int, float)):
    print(f"{value} 是数字类型")

# 检查是否为布尔值
flag = True
if isinstance(flag, bool):
    print(f"{flag} 是布尔值")

# 注意：bool 是 int 的子类
print(f"True == 1: {True == 1}")
print(f"isinstance(True, int): {isinstance(True, int)}")
print(f"isinstance(True, bool): {isinstance(True, bool)}")
```

<iframe
  frameBorder="0"
  height="300px"
  src="https://onecompiler.com/embed/python?codeChangeEvent=true&hideLanguageSelection=true&hideNew=true"
  width="100%"
></iframe>

### 配置验证

```python
def validate_training_config(config):
    """验证训练配置"""
    errors = []
    
    # 检查必需参数
    if 'learning_rate' not in config:
        errors.append("缺少 learning_rate")
    elif not isinstance(config['learning_rate'], (int, float)):
        errors.append("learning_rate 必须是数字")
    elif config['learning_rate'] <= 0:
        errors.append("learning_rate 必须大于 0")
    
    if 'epochs' not in config:
        errors.append("缺少 epochs")
    elif not isinstance(config['epochs'], int):
        errors.append("epochs 必须是整数")
    elif config['epochs'] <= 0:
        errors.append("epochs 必须大于 0")
    
    # 检查布尔参数
    if 'use_gpu' in config and not isinstance(config['use_gpu'], bool):
        errors.append("use_gpu 必须是布尔值")
    
    return errors

# 测试
config1 = {'learning_rate': 0.001, 'epochs': 100, 'use_gpu': True}
config2 = {'learning_rate': -0.1, 'epochs': '100'}

print(f"配置1错误: {validate_training_config(config1)}")
print(f"配置2错误: {validate_training_config(config2)}")
```

<iframe
  frameBorder="0"
  height="350px"
  src="https://onecompiler.com/embed/python?codeChangeEvent=true&hideLanguageSelection=true&hideNew=true"
  width="100%"
></iframe>

## 练习题

**任务**：判断模型是否达到部署标准（准确率 > 0.9 且 损失 < 0.1）

**要求**：
1. 定义变量 `accuracy = 0.95`, `loss = 0.05`
2. 使用布尔运算判断是否满足条件
3. 输出判断结果

**参考答案**：

```python
accuracy = 0.95
loss = 0.05

is_deployable = accuracy > 0.9 and loss < 0.1
print(f"模型可部署: {is_deployable}")
# 输出: 模型可部署: True
```

<iframe
  frameBorder="0"
  height="300px"
  src="https://onecompiler.com/embed/python?codeChangeEvent=true&hideLanguageSelection=true&hideNew=true"
  width="100%"
></iframe>

---

[下一节：运算符](/python/13-operators)

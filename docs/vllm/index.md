---
title: vLLM教程
---

# vLLM教程

vLLM是高吞吐量大模型推理服务框架，采用PagedAttention技术实现高效内存管理。

## 为什么学习vLLM？

- **高吞吐量**：PagedAttention优化内存使用
- **连续批处理**：动态批处理提升效率
- **易于部署**：兼容OpenAI API接口
- **生产就绪**：被众多企业采用

## 核心概念

- **PagedAttention**：分页注意力机制
- **连续批处理**：迭代级调度
- **KV Cache管理**：高效显存利用
- **分布式推理**：多GPU张量并行

## 官方资源

- [vLLM官方文档](https://docs.vllm.ai/)

---
title: Microsoft Agent Framework：面向生产环境的 Agent 工作流
date: 2026-09-07
icon: robot
category: 软件
---

# Microsoft Agent Framework：面向生产环境的 Agent 工作流

[Microsoft Agent Framework](https://github.com/microsoft/agent-framework)（MAF）是微软推出的开源 Agent 开发框架，面向 Python、.NET 与 Go。它关注的不是“让模型回答一句话”，而是把多个 Agent、工具调用、检查点、人工确认和可观测性组织成可运行、可恢复的工作流。

它适合需要把 Agent 从 Demo 变成服务的团队。若只是想试用聊天机器人，直接使用现成客户端通常更省事。

## 它提供哪些能力

- Python、C#/.NET 和 Go 的 Agent SDK；
- 顺序、并行、交接与群组协作等工作流模式；
- 流式输出、检查点、人工介入和失败后的恢复；
- 面向多个模型提供商的适配能力；
- OpenTelemetry 追踪与运行诊断；
- 可声明、可版本管理的 Agent 配置与技能。

## Python 快速开始

创建虚拟环境后安装：

```bash
python -m venv .venv
# Linux/macOS: source .venv/bin/activate
# Windows PowerShell: .venv\Scripts\Activate.ps1
pip install agent-framework
```

框架需要模型提供商。官方示例使用 Microsoft Foundry 与 Azure 身份验证，因此还需要配置相应账号、项目端点和模型部署。安装成功不等于已经能调用模型；把 API Key、端点和部署名称写进安全的环境变量或密钥服务，而不是提交进代码库。

## 什么时候该使用工作流

一个 Agent 只要完成“提问 → 回答”，普通聊天 SDK 就足够。出现下面情况时，工作流框架开始有价值：

- 一步任务要交给不同角色，例如检索、审核、执行；
- 外部写操作前需要人工确认；
- 任务耗时长，需要暂停、恢复或记录执行状态；
- 需要观察每次模型调用、工具调用和失败位置；
- 模型或云服务可能替换，不希望业务代码被某一家绑定。

## 生产使用的边界

MAF 提供编排能力，不会自动替你解决权限与安全问题。特别是带有数据库写入、邮件发送、部署或支付功能的工具，应由服务端实现固定校验、最小权限和审批流程；不要把“模型说可以”当作授权。

相关链接：

- [Microsoft Agent Framework GitHub 仓库](https://github.com/microsoft/agent-framework)
- [官方文档](https://learn.microsoft.com/en-us/agent-framework/)

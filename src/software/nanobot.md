---
title: nanobot：一个轻量的自托管个人 AI Agent
date: 2026-09-07
icon: robot
category: 软件
---

# nanobot：一个轻量的自托管个人 AI Agent

[nanobot](https://github.com/HKUDS/nanobot) 是一个 Python 编写的轻量个人 AI Agent 框架。它可以在终端、浏览器 WebUI 或聊天软件中运行，并把模型、工具、长期记忆、MCP、定时任务和子 Agent 放进一个相对小的核心中。

它与 DeepSeek Harness 的共同点是都把 Agent 看作可组合的工具系统；区别是 nanobot 更偏向个人常驻助手，而不是面向开发者的可替换运行框架。

> nanobot 可以访问文件、Shell、网页和外部聊天渠道。第一次使用时不要授予整个磁盘或生产服务器权限。

## 安装前要准备什么

- Python 3.11 或更高版本；
- 一个支持的模型提供商账号或本地模型服务；
- 只用于 Agent 的独立工作目录；
- 清楚哪些工具会读文件、执行命令或向外发送消息。

## 最稳妥的安装方式

推荐使用 `uv` 或 `pipx`，避免把依赖直接装进系统 Python：

```bash
uv tool install nanobot-ai
nanobot webui
```

也可使用 pip：

```bash
python -m pip install nanobot-ai
nanobot webui
```

首次运行会打开 `http://127.0.0.1:8765`。默认只监听本机，不会自动暴露到局域网或公网。

## 第一次配置

在 WebUI 中依次完成：

1. 打开 **Settings → Models**。
2. 选择模型提供商，填写 API Key 或本地模型服务地址。
3. 新建会话，先发送一句简单问候，确认模型连接成功。
4. 指定一个独立工作目录，再考虑启用文件、Shell 或网页工具。

不要一开始就连接 Telegram、企业微信、邮箱和生产环境。先在浏览器和受限目录中测试任务边界，能有效降低误发消息或误删文件的风险。

## 让它在后台运行

确认模型和工作区正常后，才启动常驻网关：

```bash
nanobot gateway --background
nanobot gateway status
nanobot gateway logs
```

后台网关会让已启用的渠道和定时自动化在终端关闭后继续运行。遇到异常时可以使用 `nanobot gateway stop` 停止服务，而不是反复重装。

## 适合做什么

- 给个人笔记、项目目录做受限范围内的整理与问答；
- 用 MCP 接入经过审查的工具；
- 通过聊天渠道接收提醒或执行低风险自动化；
- 研究模型路由、记忆与多 Agent 协作的实现方式。

它不适合在没有审批、审计和权限隔离的情况下直接操作支付、部署、删除数据或管理他人账号。

相关链接：

- [nanobot GitHub 仓库](https://github.com/HKUDS/nanobot)
- [nanobot 中文文档](https://nanobot.wiki/cn/docs/latest/getting-started/nanobot-overview)

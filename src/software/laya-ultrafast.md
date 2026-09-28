---
title: Laya Ultrafast：在 Apple 芯片 Mac 上本地运行浏览器决策
date: 2026-09-28
icon: robot
category: 软件
---

# Laya Ultrafast：在 Apple 芯片 Mac 上本地运行浏览器决策

[Laya Ultrafast](https://github.com/ipenywis/laya-ultrafast) 是一个基于 [Jev Ultrafast](https://github.com/browser-use/jev-ultrafast) 移植的浏览器 Agent 项目。它保留了 Jev 的页面读取、浏览器执行、演示界面和安全检查，将“下一步做什么”的决策切换为本机通过 MLX 运行的 Laya 开源权重模型。

截至 2026 年 9 月 28 日，Laya Ultrafast 仓库约有 218 Star。需要特别说明：项目 README 将它称为 Jev Ultrafast 的 clone/port，浏览器 Agent 主体和大部分设计来自 Browser Use 团队；Laya 的贡献在于本地模型决策路径。它不是一套与 Jev 完全独立、从零实现的浏览器自动化框架。

## 本地运行具体指什么

Laya 决策模型在本机完成，因此这一步不需要调用 Jev 的决策 API，也没有逐步决策的云端调用费用。但 Agent 的任务规划仍可使用 OpenAI 兼容的文本模型服务；示例默认使用 OpenRouter。把规划模型也指向本机 Ollama，才可以避免把规划请求发到云端。无论模型部署在哪里，浏览器仍会访问你指定的网站。

项目依赖 [laya-mlx](https://github.com/mizorewww/laya-mlx)，目前只支持 Apple Silicon（M 系列芯片）Mac，要求 macOS 14 或更高版本，并建议使用 Python 3.12 或更高版本。普通 Windows、Linux 电脑以及 Intel Mac 不能按这套 MLX 方案运行。

## 安装与启动

先准备 [uv](https://docs.astral.sh/uv/)、Chrome 和一台符合要求的 Mac，然后执行：

```bash
git clone https://github.com/ipenywis/laya-ultrafast.git
cd laya-ultrafast
uv sync
uv run hf download aac6fef/laya-typed-decisions-mlx
cp .env.example .env
```

首次下载会从 Hugging Face 获取模型权重。接着编辑 `.env`：若使用远程文本模型，填写 `TEXT_MODEL_API_KEY`；若希望规划也在本地运行，可按 README 设置本机 OpenAI 兼容服务，例如 Ollama：

```dotenv
TEXT_MODEL_BASE_URL=http://localhost:11434/v1
TEXT_MODEL=gemma4:latest
```

准备好后启动：

```bash
uv run laya
```

打开 `http://127.0.0.1:8766`，选择场景后点击 **Start demo → Run automatically**。如果页面没有连上 Chrome，按项目说明启用 Chrome 远程调试，并检查 Browser Harness：

```bash
uv run browser-harness --doctor
```

## 从简单任务开始

项目提供维基百科、航班搜索和本地测试网页示例，也可以给出自己的网址和目标：

```bash
uv run --env-file .env python examples/run.py \
  --url https://en.wikipedia.org/wiki/Main_Page \
  --goal '找到并打开 Gödel 不完备定理的维基百科词条'
```

示例会检查最终页面是否符合目标，不会替你购买机票。先从打开网页、搜索公开信息等低风险任务开始，熟悉模型何时会点击或填写表单，再考虑其他网站。

## 优点和边界

- 决策可以在 Apple 芯片 Mac 本地运行，不需要为每一步动作调用 Jev 决策服务。
- 若规划模型也使用本机服务，可以减少向外部模型发送任务文本；若使用 OpenRouter 等远程服务，规划内容仍会发送给对应服务商。
- 浏览器会访问外部网站，且可能沿用 Chrome 的登录状态。建议使用单独的浏览器配置文件，并避免授权处理支付、邮件发送或生产系统操作。
- Laya 的策略仍较新，已测网站和任务有限；与 Jev 相同，它对 Shadow DOM、iframe、Canvas、文件上传、弹出标签页、嵌套滚动和部分键盘控件支持有限。
- 模型给出“完成”不等于任务成功，仍要查看最终页面和浏览器动作记录。

项目代码采用 MIT License，模型和 MLX 运行库有各自的许可证，使用前请分别查看项目说明。想先理解它移植自什么项目，可以阅读 [Jev Ultrafast 教程](jev-ultrafast.md)。

相关链接：

- [Laya Ultrafast GitHub 仓库](https://github.com/ipenywis/laya-ultrafast)
- [原始项目 Jev Ultrafast](https://github.com/browser-use/jev-ultrafast)
- [Laya MLX 文档与模型说明](https://github.com/mizorewww/laya-mlx)
- [Ollama](https://ollama.com)
- [Jev Ultrafast 教程](jev-ultrafast.md)

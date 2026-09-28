---
title: Jev Ultrafast：让 AI 用自然语言操作浏览器
date: 2026-09-28
icon: robot
category: 软件
---

# Jev Ultrafast：让 AI 用自然语言操作浏览器

[Jev Ultrafast](https://github.com/browser-use/jev-ultrafast) 是 Browser Use 团队开源的浏览器 Agent 示例项目。给它一个目标，它会读取页面上的可交互元素，再选择点击、输入、滚动、等待等操作。项目把候选操作和元素整理成带编号的列表，让模型只从当前页面实际存在的选项中作出选择。

截至 2026 年 9 月 28 日，仓库约有 2.1 万 Star。它最近受到关注，一方面是浏览器操作演示很直观，另一方面是项目尝试把每轮决策合并成一次模型请求。不过“Ultrafast”是项目在指定任务和测试环境中的表现，不代表所有网站和任务都能达到同样速度。

## 它是怎么工作的

Jev 不是一个可以完全离线运行的浏览器模型。浏览器控制和本地演示界面在自己的电脑上运行，动作决策会请求 TypeSafe 的 Jev 服务；需要生成搜索词、城市名等文本时，还可以配置一个兼容 OpenAI 接口的文本模型。示例配置使用 OpenRouter，也可以按项目文档接入 Gemini、GLM 或 DeepSeek 等兼容服务。

页面每次更新后，Agent 会生成一张带编号的元素表，再从受限动作集合里选操作和目标。常见动作包括点击、输入、选择下拉项、滚动、等待、完成和停止。截图用于演示与检查，不是默认决策循环的输入。

## 安装和启动

需要 Python 项目工具 [uv](https://docs.astral.sh/uv/)、Chrome，以及 TypeSafe Jev 和文本模型所需的 API 配置。API Key 会产生相应服务的调用费用，请先查看服务商的价格和额度。

```bash
git clone https://github.com/browser-use/jev-ultrafast.git
cd jev-ultrafast
uv sync
cp .env.example .env
```

编辑 `.env`，按示例填写 `TYPESAFE_API_KEY` 和 `TEXT_MODEL_API_KEY`，再启动本地演示：

```bash
uv run jev
```

在浏览器打开 `http://127.0.0.1:8766`，选择演示场景，再点击 **Start demo → Run automatically**。界面会显示页面元素、模型选择的动作和执行结果。想逐步观察时，可以选择手动推进。

Jev 通过 [Browser Harness](https://github.com/browser-use/browser-harness) 连接 Chrome。若连接不成功，先按提示在 Chrome 中启用远程调试，再运行：

```bash
uv run browser-harness --doctor
```

## 试一个简单任务

项目内置了 Google Flights 和维基百科示例。也可以用自己的网址和一个范围明确的目标运行：

```bash
uv run --env-file .env python examples/run.py \
  --url https://en.wikipedia.org/wiki/Main_Page \
  --goal '找到并打开 Gödel 不完备定理的维基百科词条'
```

航班示例会填写条件并检查结果页面，不会替你选择或预订航班。刚开始建议先用公开网页做只读任务，例如搜索文章、打开指定页面或筛选公开列表。

## 使用时留意

- 浏览器自动化可能访问当前 Chrome 配置文件里的登录状态。建议使用单独的浏览器配置文件，不要直接让 Agent 操作邮箱、支付、生产后台等账号。
- 先把目标写窄，并在自动运行前检查它将访问的网站和可能执行的操作。Agent 显示“完成”仍需由你确认页面结果。
- 项目目前对 Shadow DOM、iframe、Canvas、文件上传、弹出标签页、嵌套滚动和部分键盘控件支持有限；它不是通用的网页操作保证。
- API Key 放在 `.env` 中，不要提交到 GitHub，也不要把包含密钥的运行日志分享出去。

项目采用 MIT License。若希望把浏览器决策改为本地开源模型，可以接着看 [Laya Ultrafast](laya-ultrafast.md)：它基于 Jev Ultrafast 移植，重点是用 Apple 芯片本地运行 Laya 决策模型。

相关链接：

- [Jev Ultrafast GitHub 仓库](https://github.com/browser-use/jev-ultrafast)
- [Browser Harness](https://github.com/browser-use/browser-harness)
- [TypeSafe Jev 文档](https://docs.typesafe.ai/introduction)
- [Laya Ultrafast 教程](laya-ultrafast.md)

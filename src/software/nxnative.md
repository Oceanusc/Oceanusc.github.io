---
title: 从逆向分析到原生运行：nxnative 如何把 Switch 游戏带到苹果设备
date: 2026-11-11
icon: software
category: 软件
---

# 从逆向分析到原生运行：nxnative 如何把 Switch 游戏带到苹果设备

最近关注 AI 辅助游戏逆向时，[nxnative](https://github.com/seedds/nxnative) 是一个值得一起看的项目。它把 Switch 游戏打包成 Apple silicon Mac 上的应用，或可侧载到 iPhone、iPad 的 IPA。上游仓库在 2026 年 11 月 11 日查询时约有 1.45 万 Star。

它最值得研究的地方，是如何让游戏已有的 ARM64 代码在苹果芯片上执行，同时补齐游戏依赖的系统服务和图形接口。这也让“逆向分析之后能做什么”有了一个具体的工程实例。

本文根据上游 README、开发文档与 Agent 指南整理，介绍技术路线和当前使用条件；尚未在本地构建或验证游戏运行效果。游戏兼容性与版本要求以[上游最新说明](https://github.com/seedds/nxnative#readme)和[各游戏记录](https://github.com/seedds/nxnative/blob/main/dm/games/README.md#games)为准。

## 为什么游戏代码可以在苹果芯片上运行

Switch 游戏的 ARM64 代码与 Apple silicon 使用的指令架构存在共通基础，但程序依赖的操作系统、图形接口和运行约定不同。相同的指令架构只是起点，仍需要处理线程、内存、文件、输入、音频和 GPU 等方面的差异。

根据[项目开发文档](https://github.com/seedds/nxnative/blob/main/docs/development.md#how-it-works)，nxnative 把这些工作分成三个主要部分：

| 部分 | 负责什么 |
| --- | --- |
| NSO Rewriter | 改写游戏模块中不适合直接在目标环境执行的指令，并按具体构建应用必要补丁 |
| Horizon Host | 实现游戏依赖的系统服务，包括线程与同步、内存、文件和存档、输入与音频等 |
| 图形适配层 | 将 NVN 等图形接口适配到 Metal，并处理着色器转换 |

可以把主要流程理解为：

```text
用户提供的游戏代码与资源
  → 识别模块、版本和游戏配置
  → 改写需要适配的指令
  → 配套系统服务、图形接口与着色器
  → 打包成 Mac App 或 IPA
  → 在对应苹果设备上运行和验证
```

项目把这条路线称为原生执行。它保留并运行游戏自身的代码，同时提供兼容环境；在这里，“原生运行”仍然包含大量适配工作。

## 最难的工作藏在哪里

### 系统服务决定游戏能否继续执行

游戏会创建线程、分配内存、读取资源、保存进度，还会调用主机系统提供的接口。nxnative 的 Host 需要在苹果设备上提供相应行为。

这些接口的返回值和时序都会影响游戏。例如，一个未实现的服务即使暂时返回成功，也可能让程序在后续位置使用错误数据。Agent 指南要求从日志、崩溃位置和调用关系追查原因，并把具体问题记录下来，供后续游戏适配参考。

### 图形接口和着色器需要单独适配

CPU 代码能执行，并不代表屏幕上已经有正确画面。游戏的图形接口、纹理、缓冲区、渲染状态和着色器，也要与 Metal 对应起来。

项目不仅有 NVN 到 Metal 的适配，开发文档还记录了 Vulkan 和 OpenGL 游戏各自使用的图形层。因此，适配新游戏前需要先确认它实际使用的图形 API，再检查所需接口与着色器格式。

### 每款游戏、每个版本都可能不同

不同游戏可能使用不同引擎、SDK 和资源容器。同一游戏更新后，模块地址、导入符号和资源布局也可能变化。

nxnative 使用按游戏组织的配置，并通过模块的 Build ID 关联具体构建的补丁。研究某个运行结果时，需要同时记录游戏版本、目标平台和已知问题，才能判断它对自己的设备是否有参考价值。

## AI 和 REA 在这里参与什么

nxnative 提供了明确的[面向 Agent 的移植指南](https://github.com/seedds/nxnative/blob/main/docs/agents/README.md)。其中的新游戏调查流程包括：

1. 识别模块、Build ID、SDK、引擎和图形 API。
2. 对比游戏的导入与 Host 已有的接口，寻找待补齐的部分。
3. 检查需要改写的指令及图形接口调用。
4. 结合日志、崩溃位置和反编译结果定位问题。
5. 修改实现后，在实际目标平台上验证。

[静态调查指南中的 Ghidra 与 REA 部分](https://github.com/seedds/nxnative/blob/main/docs/agents/02-survey.md#ghidra-and-rea)还说明了如何分析游戏模块、查询函数，以及配置 REA 使用 Ghidra。

这与博客已有的 [REA 介绍](rea.md)可以连起来看：REA 为 Agent 提供检查程序与追踪证据的工具，nxnative 展示了分析结果如何用于运行环境适配。仅凭这些文档，还无法判断整个项目由 AI 完成了多少；可以确认的是，它公开了供 Agent 使用的分析和移植流程。

如果想研究这一方向，适合先选一个能验证的小问题，例如“某次崩溃来自哪个系统服务”或“一个画面异常是否与纹理格式有关”，沿着原始行为、分析证据、实现修改和设备验证逐步推进。

## 目前需要什么设备

截至 2026 年 11 月 11 日，上游 README 列出的主要要求如下：

| 目标或环节 | 要求与说明 |
| --- | --- |
| Mac 运行 | Apple silicon，macOS 26.6 或更新版本 |
| 构建游戏 | Mac、Xcode 27.2、Homebrew，以及 ARM64 版 Python 3.12 或更新版本等依赖 |
| iPhone 运行 | A17 Pro 或更新芯片，iOS 26 或更新版本 |
| iPad 运行 | M1 或更新芯片，iPadOS 26 或更新版本 |
| Switch 2 游戏 | 上游列出通过 Mac 游戏过程测试的条目；iPhone、iPad 尚未验证 |

这些是项目列出的基础条件，具体游戏仍要查阅各自的兼容记录。README 提到，未提供游戏配置时，脚本可能生成调查结果和临时配置，并尝试构建；这样的构建仍可能无法启动。

游戏文件需要自行提供，仓库不包含游戏内容。首次构建还涉及资源处理和着色器编译，README 给出的参考耗时为 30–60 分钟，所需空闲空间约为游戏大小的两倍再加 10 GB，实际情况会随游戏和设备变化。

## 与 Co-op Anything 一起看

同样值得关注的 [Co-op Anything](https://github.com/cranebeaker/coop-anything) 面向另一个目标：让 Agent 调研、修复或制作单机游戏的联机 Mod。它提供工作流程、工具和具体游戏记录，也说明可以搭配 REA 完成二进制分析。

这几个项目可以按目标来选择：

| 想研究的问题 | 可以先看 |
| --- | --- |
| 游戏中的某项逻辑怎样实现，证据在哪里 | [REA](rea.md) |
| 游戏代码怎样在苹果设备上执行，需要适配哪些系统接口 | nxnative |
| 一款单机游戏怎样加入联机，需要同步哪些状态 | Co-op Anything |

Co-op Anything 中的游戏完成度各不相同；nxnative 的运行结果也取决于游戏构建和设备。阅读这些项目时，最有价值的是具体分析过程、可重复的验证方法，以及仍待解决的问题。

## 继续阅读

- [nxnative 上游仓库与使用说明](https://github.com/seedds/nxnative)
- [实现原理与开发文档](https://github.com/seedds/nxnative/blob/main/docs/development.md)
- [Agent 移植指南](https://github.com/seedds/nxnative/blob/main/docs/agents/README.md)
- [新游戏静态调查：Ghidra 与 REA](https://github.com/seedds/nxnative/blob/main/docs/agents/02-survey.md#ghidra-and-rea)
- [游戏兼容性与具体进度](https://github.com/seedds/nxnative/blob/main/dm/games/README.md#games)
- [d2r-mobile：项目致谢中说明的原生执行方案来源](https://github.com/jhaizhou-ops/d2r-mobile)
- [Co-op Anything](https://github.com/cranebeaker/coop-anything)

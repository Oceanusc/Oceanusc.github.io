---
title: REA：让 AI Agent 帮你分析应用与二进制
date: 2026-10-12
icon: robot
category: 软件
---

# REA：让 AI Agent 帮你分析应用与二进制

[REA（Reverse Engineer Anything）](https://github.com/morluto/rea) 是一个面向 AI Agent 的本地逆向分析工具。它通过 MCP 把分析能力提供给 Agent，也可以直接在终端使用 CLI。你可以让 Agent 检查一个没有源码的应用、追踪某个功能的实现线索，并要求它说明结论来自哪些证据。

REA 不是一个新的聊天模型，也不会自动理解所有程序。它负责调用适合目标的分析工具并返回证据与限制，Agent 再据此解释分析结果。不同目标支持的功能、操作系统和外部依赖并不相同。

## 它可以分析什么

REA 覆盖的目标包括原生二进制、JavaScript/Electron 应用、网站、.NET 程序集、Android APK 等。例如：

- 检查 Electron 应用的模块、导入、路由、IPC 和原生扩展关系；
- 静态查看 .NET 程序集的元数据与 CIL 指令；
- 在配置分析器后检查原生程序的伪代码、汇编、字符串和调用关系；
- 检查网站页面结构、脚本和网络观察结果。

这不是“输入任意文件就能得到完整源码”。分析结果会受目标类型、文件是否完整、所配置引擎及其平台支持影响。REA 会返回相应的证据和限制，阅读时要把观察到的内容、推断和未知信息区分开。

## 安装前准备

REA 需要 Node.js 和 npm。官方当前支持 Node.js 22（至少 22.19）、24（至少 24.11）或 26 及以上版本；23、25 等版本不在支持范围内。可先检查本机版本：

```bash
node --version
npm --version
```

静态 JavaScript/Electron 与 .NET 检查不需要 Hopper、Ghidra 或 IDA。若要深入分析原生二进制，需另行配置其中一种分析引擎；REA 可以使用已有的 Ghidra 或 IDA，也可以在你确认后通过安装流程安装 Hopper。其他目标也可能需要 Chrome、JADX、JDK、adb 等各自的依赖，开始前应查看官方对应指南。

## 接入 AI Agent

在终端运行官方引导设置：

```bash
npx rea-agents setup
```

选择需要接入的 Agent，仔细检查它准备修改的配置，再确认执行。设置流程会注册 REA 的本地 MCP 服务、安装匹配的工作流说明，并备份已有配置。配置完成后，重启或重新连接 Agent，让它加载新的 MCP 工具。

如果只是想运行一次 CLI 命令，也可以使用 `npx`，不必全局安装。经常使用时，可以全局安装：

```bash
npm install --global rea-agents
rea --help
```

使用全局安装的 CLI 时，可通过 `rea update` 更新；通过 `npx` 设置的 Agent，可重新运行下面的命令查看并更新注册配置，然后重启 Agent：

```bash
npx rea-agents@latest setup
```

## 用 Agent 分析一个应用

接入成功后，可以给 Agent 一个明确、可验证的任务，而不是只说“逆向这个软件”。例如：

> 请分析我本机的某个 Electron 应用，追踪搜索功能从界面到主进程的调用路径。请列出使用的证据、无法确认的部分，以及结论是观察还是推断；不要运行或修改目标应用。

把“某个 Electron 应用”替换成实际应用名或路径，并明确你希望调查的功能。REA 返回分析结果后，可以继续要求 Agent 展开具体模块、调用关系或证据来源。目标程序和文件应是你有权检查的对象。

## 不接 Agent，直接使用 CLI

对已解包的 JavaScript/Electron 应用目录或 ASAR 文件，可以运行静态分析：

```bash
npx -y rea-agents@latest analyze-javascript-application "D:/apps/example" --json
```

把示例路径替换成目标的实际路径。该工作流无需注册 MCP，也不需要原生分析引擎。命令返回 JSON 证据；大型应用的结果可能很大，可以先保存到文件，再按需筛选和阅读。

针对原生二进制的 CLI 用法取决于已经配置的分析提供方，可先查看可用提供方与诊断信息：

```bash
rea providers --json
rea doctor --json
```

如果尚未全局安装 `rea`，可改用 `npx -y rea-agents@latest` 后接相应命令。具体目标与参数请以[官方 CLI 文档](https://github.com/morluto/rea/blob/main/docs/cli.md)和目标类型指南为准。

## 本地分析不等于数据绝不外传

REA 在本机分析目标，但 Agent 会收到工具返回的结果；Agent 背后的模型服务是否处理或留存这些结果，要看对应服务的数据政策。分析专有软件、内部应用或敏感数据前，应确认模型与 Agent 的数据处理设置，并限制可访问的文件范围。

另外，逆向分析只应针对你拥有或获得授权的程序，遵守软件许可、隐私要求和适用法律。不要把模型给出的推断当作确定事实；涉及安全、资金或用户权益的结论，应由人进一步核验。

相关链接：

- [REA GitHub 仓库](https://github.com/morluto/rea)
- [官方安装与设置指南](https://github.com/morluto/rea/blob/main/docs/installation.md)
- [官方 CLI 与 Evidence 指南](https://github.com/morluto/rea/blob/main/docs/cli.md)
- [官方中文 README](https://github.com/morluto/rea/blob/main/README_zh.md)

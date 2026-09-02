---
title: DeepSeek Harness
date: 2026-09-02
icon: software
---

# DeepSeek Harness：一切皆插件

[DeepSeek Harness](https://www.deepseek.com/harness/)（简称 DSH）是 DeepSeek 面向开发者开放的 Agent 运行框架。它的设计理念是 “Everything is a Plugin”：模型、工具、技能、会话、沙箱、存储、调度，甚至 Agent Loop 和界面，都可以作为插件替换或重新组合。

> Harness 目前仍是开发者预览版。插件生态变化很快，安装前请查看项目源码、许可证和最近的维护记录。

## 快速体验

需要先安装 [Node.js](https://nodejs.org/)，然后运行官方 CLI：

```sh
npx @deepseek-ai/dsh web
```

也可以从 [deepseek-ai/deepseek-harness](https://github.com/deepseek-ai/deepseek-harness) 获取完整源码。官方项目采用 MIT License。

截至 2026 年 9 月，`@deepseek-ai/dsh` 是官方面向用户的核心安装包，npm 近 30 天下载量约为 126.9 万次。这个数字包含自动化构建和缓存请求，只能作为生态活跃度参考。

## 先安装社区插件市场

社区插件数量很多，最省事的方式是先安装 [dsh-market](https://github.com/dsh-market/dsh-market)，再在 Harness 设置页中浏览、搜索和一键安装插件：

```sh
dsh plugin --profile web add dshmarket
```

另一个值得收藏的是 [awesome-dsh-plugin](https://github.com/awesome-dsh-plugin/awesome-dsh-plugin)。它是社区维护的精选清单，收录的项目需要声明 `dsh.bundle`，并能够通过 `dsh plugin add` 安装。清单本身不代表安全审查或质量排名，第三方插件也会以本机权限运行。

## 壁纸与界面美化

如果想把 DSH 改造成更有个性的工作台，可以从下面几类开始：

- [dsh-wallpaper](https://github.com/chinaRXQ/dsh-wallpaper)：添加图片背景，并调节透明度、遮罩和模糊。
- [dsh-theme-plugin](https://github.com/BeiZi6/dsh-theme-plugin)：提供预设主题，也可以自定义配色、字体和半透明侧栏。
- [dsh-cool-theme](https://github.com/CoolTea001/dsh-cool-theme)：内置 Nord、One Dark、GitHub 等 34 个主题。
- [dsh-wallpaper（Wallpaper Engine）](https://github.com/code-newbie-1/dsh-wallpaper)：读取 Wallpaper Engine 本地库，支持图片、视频和网页壁纸。
- [dsh-theme-liquid-glass](https://github.com/FAVKTOXIC/dsh-theme-liquid-glass)：液态玻璃风格，带动态背景和模糊、亮度调节。
- [dsh-themes](https://github.com/MangMax/dsh-themes)：支持搜索 Open VSX 主题，并导入 VS Code 主题。
- [dsh-font](https://github.com/tianyhjg-lab/dsh-font)：提供大量界面字体和代码字体，适合中文与代码混排。

## “DeepSeek 娘”和搞怪桌宠

这部分不一定是安装量最高的插件，却最能体现社区的趣味：

- [dsh-whale-pet](https://github.com/luweiyabo/dsh-whale-pet)：漂浮鲸鱼娘桌宠，会根据 Agent 的工作状态变化。
- [dsh-live2d-companion](https://github.com/Tisitan/dsh-live2d-companion)：Live2D 角色、表情、动作和聊天气泡。
- [dsh-maid-whale-webUI](https://github.com/yunxiiQwQ/dsh-maid-whale-webUI)：女仆鲸娘风格，带海洋插画和 Codex 风格宠物。
- [deep-whale-day-night-theme](https://github.com/GGBond2424648901/deep-whale-day-night-theme)：白天和夜晚两套鲸娘主题。
- [deepseek-harness-hello-kitty-suite](https://github.com/Angel2518975237/deepseek-harness-hello-kitty-suite)：Hello Kitty 风格的任务提醒和粉色主题。
- [dsh-muyu](https://github.com/liuwenji007/dsh-muyu)：模型工作时自动敲响的电子木鱼。
- [dsh-pelican](https://github.com/Little-Star888/dsh-pelican)：右下角骑自行车的鹈鹕，会跟随 Agent 状态变化。
- [dsh-status-rotator](https://github.com/01Virex/dsh-status-rotator)：将 “Deep diving...” 替换成随机搞笑文案。
- [dsh-minigames](https://github.com/lhh010/dsh-minigames)：模型思考时可以玩的离线小游戏。

如果只想先试三个，我会选择：`dsh-whale-pet`、`dsh-live2d-companion` 和 `dsh-maid-whale-webUI`。它们分别代表桌宠、Live2D 和鲸娘主题三种方向。

## 其他热门社区项目

- [dsh-routing-suite](https://github.com/yjh051108/dsh-routing-suite)：根据任务选择推理和执行策略。
- [dsh-find-plugin](https://github.com/awesome-dsh-plugin/dsh-find-plugin)：直接在对话中搜索可用插件。
- [dsh-desktop](https://github.com/anywhere-labs/dsh-desktop)：面向 DSH 生态的桌面端客户端，不是普通插件。

## 代码开发相关插件

如果主要用 DSH 写代码，下面这些比单纯换皮肤更值得安装。它们来自社区精选清单的代码、工具、Git 和运行时分类；清单会检查插件是否可安装，但不会替插件做质量或安全背书。

### 代码理解与质量检查

- [dsh-project-memory](https://github.com/00080000/dsh-project-memory)：读取项目文件时建立可检索的项目记忆，减少上下文压缩后反复阅读代码。
- [dsh-code-check](https://github.com/a179-sanae/dsh-code-check)：模型修改 TypeScript 文件后自动运行 `tsc --noEmit`，把错误按文件、行列和错误码反馈回来。
- [code-rag](https://github.com/Ankali-Aylina/code-rag)：为代码库建立语义索引，并提供索引状态面板，适合大型项目检索。
- [dsh-dep-vuln-scan](https://github.com/988hj7tczd-oss/dsh-dep-vuln-scan)：扫描 npm、pnpm、pip、Go、Cargo、Maven 等锁文件，并用 OSV 数据库检查依赖漏洞。
- [dsh-modernize-code](https://github.com/988hj7tczd-oss/dsh-modernize-code)：把遗留代码升级拆成预检、评估、映射和转换几个阶段。

### Git、分支与代码审查

- [dsh-git-worktree](https://github.com/LaoYueHanNi/dsh-git-worktree)：从 Web 界面创建隔离的 Git worktree，适合并行处理多个任务。
- [dsh-github-connector](https://github.com/kaziii/dsh-github-connector)：在对话中查看、创建和 AI 审查 GitHub Issue/PR，并支持合并操作。
- [dsh-pr-description](https://github.com/988hj7tczd-oss/dsh-pr-description)：根据当前分支 diff 生成 Conventional Commits 风格的 PR 标题、描述和自检清单。
- [dsh-diff-viewer](https://github.com/lehhair/dsh-diff-viewer)：替换默认编辑结果展示，提供更清晰的代码差异视图。
- [DSH_VsCodeMode](https://github.com/Lenonss/DSH_VsCodeMode)：提供 Monaco 编辑器、标签页和 Keep/Undo 式差异审查体验。

### 终端、浏览器与工程环境

- [dsh-pilot](https://github.com/guo6x/dsh-pilot)：通过 CDP 控制真实 Chrome/Edge，提供导航、点击、输入和截图工具。
- [dsh-websearch](https://github.com/240xu/dsh-websearch)：聚合多个搜索引擎并合并去重结果，适合需要查文档和资料的编码任务。
- [dsh-python-env](https://github.com/AngelosZou/dsh-python-env)：帮助 Agent 创建和管理 Python 虚拟环境，减少镜像、代理和权限问题。
- [dsh-lsp-packs](https://github.com/988hj7tczd-oss/dsh-lsp-packs)：为 TypeScript、Python、Go、Rust、Java、C/C++ 等语言接入对应 LSP。
- [dsh-expert-mode](https://github.com/Asher-2000/dsh-expert-mode)：把复杂任务拆给多个领域子 Agent，并加入任务板、质量门和复核流程。

### 一套实用的代码开发组合

可以先安装 `dsh-project-memory`、`dsh-code-check` 和 `dsh-git-worktree`，分别解决“记住项目”“修改后检查”和“隔离分支”三个高频问题；需要联网查资料时，再加入 `dsh-websearch` 或 `dsh-pilot`。涉及 GitHub 写入、依赖升级和终端执行的插件，建议保留人工确认。

## 安装建议

建议先从 `dsh-market` 开始，只安装自己确实需要的插件；壁纸、字体和主题可以随时切换，带有本地文件扫描、网络访问或外部服务连接的插件则应更加谨慎。遇到插件无法加载时，优先查看其 README、`dsh.bundle` 配置和最近的 Issue。

相关链接：

- [DeepSeek Harness 官网](https://www.deepseek.com/harness/)
- [官方 GitHub 仓库](https://github.com/deepseek-ai/deepseek-harness)
- [社区插件精选清单](https://github.com/awesome-dsh-plugin/awesome-dsh-plugin)
- [社区插件市场](https://github.com/dsh-market/dsh-market)

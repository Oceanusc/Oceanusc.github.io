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

## B 站玩法

DSH 还可以通过社区插件连接 B 站，把找教程、整理视频笔记和日常刷视频放进同一个工作台。下面的安装方式按 2026 年 10 月 24 日的项目文档整理；这些都是第三方插件，安装前请核对各自 README 中的版本要求。

| 想做什么                 | 对应插件                                                          | 使用方式                     |
| ------------------------ | ----------------------------------------------------------------- | ---------------------------- |
| 搜索视频、提取字幕并总结 | `dsh-plugin-bilibili`                                             | 在对话中交给 Agent 处理      |
| 按兴趣筛选视频并生成日报 | `dsh-bili-scroll`                                                 | 在设置页配置关键词和运行方式 |
| 自动评论、接话或守评论区 | `dsh-bili-scroll`、`dsh-bili-pond`、`@seiuna/dsh-bilibili-plugin` | 按触发方式选择，详见下文     |
| 写代码时用小窗看视频     | `dsh-bili-widget`                                                 | 在 DSH 内打开悬浮播放器      |

### 搜索教程，把视频变成学习笔记

[moxingovo/dsh-bilibili](https://github.com/moxingovo/dsh-bilibili/blob/main/README.zh.md) 提供搜索、视频详情、字幕、播放地址和画面帧工具。安装包名是 `dsh-plugin-bilibili`，与仓库名不同：

```sh
dsh plugin --profile web add dsh-plugin-bilibili
```

重启 `dsh web` 并新建会话后，可以试试：

```text
帮我在 B 站找 3 个讲 Git worktree 的教程，列出标题、UP 主、时长和链接。
选一个适合初学者的视频，读取字幕，整理概念、操作步骤和常见错误。
请说明哪些结论来自字幕；字幕获取失败时如实说明，不要根据标题编造内容。
```

搜索和视频详情可以匿名使用；部分字幕需要登录。按[项目的 SESSDATA 配置说明](https://github.com/moxingovo/dsh-bilibili/blob/main/README.zh.md#可选-sessdata)，可在本机环境变量或 `$DSH_HOME/.env` 中设置 `BILIBILI_SESSDATA`，值只填裸 token。不要把 Cookie 写进聊天、博客或 Git 仓库。

字幕为空、登录失效或遇到风控时，总结可能无法完成；画面分析还需要支持图片输入的模型。只有封面或少量预览帧时，也不能据此判断整个视频的内容。

### 按兴趣刷一轮，整理成视频日报

[dsh-bili-scroll](https://github.com/c1overzz/dsh-bili-scroll) 会按关键词寻找视频、读取内容，再把值得看的整理成 Markdown 报告。适合追踪 AI 工具、开源项目或某一门技术的更新。

项目当前提示 npm 同名包仍是旧版，建议从 [Releases](https://github.com/c1overzz/dsh-bili-scroll/releases) 获取安装包。以下是本次核对的版本：

```sh
dsh plugin --profile web add https://github.com/c1overzz/dsh-bili-scroll/releases/download/v2.0.2/dsh-bili-scroll-2.0.2.tgz
```

装完重启 DSH，进入 **设置 → 刷B站**，安装主依赖并扫码登录；运行环境需要 Python 3.10+ 或 `uv`。在「偏好」中一行填写一个关注关键词，例如：

```text
DeepSeek Harness
开源 AI Agent
VuePress
```

先手动跑一轮检查报告，再设置自动运行。桌面版若出现自动任务卡住，可先使用「现在跑一轮」。无字幕视频可能需要额外安装本地转写依赖。

插件还支持评论、回复和私信投递。只想整理日报时，先检查投递方式并关闭不需要的互动选项；评论区的配置见下面的小节。

### B 站评论区玩法

评论区可以用来接收视频推荐、让 Agent 接着话题聊，也可以给自己的投稿配置自动答疑。前面的 `dsh-plugin-bilibili` 主要负责检索和读取视频；评论与回复需要下面这些提供写入能力的插件。

#### 看完视频，留短评并 @ 你

已安装 [dsh-bili-scroll](https://github.com/c1overzz/dsh-bili-scroll#设置页里有什么) 时，进入 **设置 → 刷B站 → 互动**，启用「自动评论并 @ 你」，按页面填写提醒对象，并把投递方式选为「只发评论」或「两边都发」。需要继续接话时，再开启「回复评论」；该选项只回楼中楼，默认关闭。

它会先读视频内容，再发短评和提醒。可以在「偏好」的人设提示词中写：

```text
你是我的 B 站学习搭子，关注开源工具和编程教程。
评论先说视频中一个具体、值得讨论的点，再给出简短看法；控制在 80 字以内。
回复时围绕原话题，不重复发推荐，不确定的地方明确说明。
```

提示词控制口吻，是否发送、发给谁和每轮条数仍由插件设置决定。首次可将每轮评论上限设为 1，手动跑一轮核对实际评论。

#### 让“大肥鱼”守评论区，或只回应 UP 主邀请

[dsh-bili-pond（B站鱼塘）](https://github.com/YOYOLnFu/dsh-bili-pond) 提供两种独立玩法：

- **评论区守护**：自己的视频下可回复有内容的评论；别人的视频下只回应白名单用户主动发来的 `@`。有回复记录可核对。
- **圈地自萌**：只接受视频 UP 主本人一级评论中的明确邀请，例如“鱼来”。回复落在邀请的楼中楼，同一邀请只回一次；普通观众喊话不触发，也不会主动新开楼。

项目要求 DSH `>=0.1.7-rc.1`、Node.js `>=22` 和可用模型线路。桌面版安装命令：

```sh
dsh plugin --profile desktop add dsh-bili-pond
```

重启后进入 **设置 → B站鱼塘**，安装运行环境、扫码登录，并在「检索与上下文」指定工作区，点击「建模板」填写人设。然后按用途配置：

| 用途           | 设置位置与操作                                                    |
| -------------- | ----------------------------------------------------------------- |
| 守评论区       | 打开「守护评论区」，设置白名单 UID、扫描范围和回复上限            |
| 只接 UP 主邀请 | 在「发布与互动」将评论模式设为「圈地自萌」，填写「在评论里 @ 谁」 |

守护默认关闭；圈地自萌与普通评论模式互斥。这个项目由 `dsh-bili-scroll` 衍生，但配置不兼容，应按[鱼塘自己的说明](https://github.com/YOYOLnFu/dsh-bili-pond#第一次使用3-步)配置。

#### 把评论区变成 DSH 的聊天入口

如果想让网友通过评论回复和 `@` 找 Agent 聊天，可以看 [seiuna/dsh-bilibili-plugin](https://github.com/seiuna/dsh-bilibili-plugin)。它把通知交给 DSH，同一视频或动态下的讨论进入同一个会话，方便保留上下文。

项目要求 Node.js 22+。进入实际使用的 profile 目录安装，以下以 `web` 为例：

```powershell
cd ~/.dsh/profiles/web
pnpm add @seiuna/dsh-bilibili-plugin
```

在该目录 `package.json` 的 `dsh.profile.bundles` 数组中追加 `@seiuna/dsh-bilibili-plugin`，保留原有条目。重启 DSH 后，点击顶部「B站」按钮扫码登录、设置本地解锁密码，再选择通知类型、模型和工作区；需要后台接话时启用自动回复。

可先让 Agent 读取指定视频的评论、生成回复草稿，确认内容和回复对象后再发送。手动发评论默认有操作预览；**开启自动回复后，后台发送不会逐条询问**。目前通知轮询每次只读取一页，消息密集时可能漏掉较早通知，不能当成完整的评论归档。

这些玩法都会以登录的 B 站账号发言。试用时应明确 AI 助手身份，设置较低的回复上限；登录凭据和私人会话不要写进评论或人设模板。

### 边写代码边用小窗看视频

[dsh-bili-widget](https://github.com/pyf2818/dsh-bili-widget) 提供可拖动、缩放的悬浮播放器，支持搜索、热门与排行榜、自动连播和观看历史。项目目前要求 **Windows + DSH 桌面应用（web profile）**。

按作者给出的方式，在 DSH 对话中输入：

```text
请安装 https://github.com/pyf2818/dsh-bili-widget 这个插件。
```

重启后在侧边栏打开「B站」，选择视频播放；`M` 切换迷你模式，`N` 切换专注模式，标题栏的最小化按钮可收起为悬浮球并继续播放。这个插件负责播放；需要字幕总结时，再使用前面的检索插件。

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

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

## 已经使用 REA 做过逆向的项目

下面是截至 2026-10-27 查阅到的公开案例，来源包括 REA 官方案例页和项目作者的仓库文档。其中既有源码重建项目，也有针对应用某项功能的分析。这里整理的是作者公开的过程与结果，我没有在本地复现这些项目。

| 项目 | 分析对象 | REA 参与的工作 | 可以查看的成果 |
| --- | --- | --- | --- |
| [DX-Ball 重建](https://github.com/N0zoM1z0/dx-ball) | Windows 版 DX-Ball 1.07 | 通过 Ghidra 检查原始程序，辅助恢复函数与核对编译结果 | C/C++ 源码、函数匹配记录、运行验证记录 |
| [Notion 剪贴板案例](https://rea.tools/showcase/notion/) | Notion Desktop 7.6.1 | 分析 Electron preload，定位页面 API 与 IPC 调用线索 | 从页面到系统剪贴板的调用链及代码说明 |
| [TH04 重建](https://github.com/N0zoM1z0/th04) | PC-98《东方幻想乡》的 DOS 程序 | 检查原始指令，核对环形弹幕的角度计算 | C++ 与汇编源码、对应代码段的编译比较记录 |
| [Desktop Games Nostalgia](https://github.com/ucodia/desktop-games-nostalgia) | 2000 年的桌面破坏玩具 Desktop Games | 分析 Peter 解释器，恢复资源格式和运行规则 | macOS 与浏览器移植版、分析脚本与笔记 |
| [Snowball War 重建](https://github.com/tuunanet/rea-ski-or-die-reconstruction) | DOS 游戏 Ski or Die 的打雪仗小游戏 | 分析二进制，记录移动、投掷和计分等玩法规则 | Rust + SDL2 实现、资源提取工具与 REA 分析过程 |
| [OpenBattlefield2](https://github.com/Moxnatiy/OpenBattlefield2) | 《战地 2》的 Refractor 2 引擎 | 通过 Ghidra 获取函数、调用关系和数据引用等证据 | C++20 引擎重建代码、研究记录与待完成事项 |

### DX-Ball：从原始程序恢复游戏代码

[DX-Ball 重建项目](https://github.com/N0zoM1z0/dx-ball)明确说明，它使用 Codex 配合 REA，通过 Ghidra 检查原始可执行文件，把函数恢复成可维护的 C/C++，再使用 Visual C++ 4.0 编译并与原程序比较。

官方展示的一个具体例子是**声音左右声像的计算**：砖块被击中后，横坐标怎样转换为声音的左右位置？最初的反编译伪代码缺少关键输入，Agent 继续通过 REA 检查指令、调用方和内存常量，才把计算关系补齐。

根据[官方案例](https://rea.tools/showcase/dx-ball/)，恢复后的这个函数通过了 **3,205 组原始 x86 行为比较**；使用指定的旧编译器并处理重定位后，完整函数的 **63 字节编译结果**与原程序匹配。这些数字针对该函数的验证范围。

项目 README 的 2026-10-22 进度还报告，270 个作者编写的函数、84,968 字节作者代码达到精确匹配，源码已能构建 Windows 游戏；完整原版关卡通关、部分运行环境恢复及实际硬件输出等仍有待验证。阅读时可以把[项目最新进度](https://github.com/N0zoM1z0/dx-ball/blob/main/docs/PROGRESS.md)与具体函数案例结合起来看。

### Notion：追踪 Electron 的剪贴板实现

[Notion 官方案例](https://rea.tools/showcase/notion/)分析的是桌面应用中的一个具体功能：页面复制文本和 HTML 时，请求怎样到达系统剪贴板。

案例使用 REA 4.1.0 分析 Notion Desktop 7.6.1 的 tab preload，定位暴露给页面的 API 与 IPC 调用位置。作者再阅读包内的包装函数和主进程接收代码，连接出这条路径：

```text
页面侧 clipboard.write(data)
  → preload 中的包装函数
  → ipcRenderer.invoke("notion:clipboard:write", ...)
  → 主进程 ipcMain.handle 接收
  → 检查发送方
  → Electron clipboard.write(data)
```

公开成果展示了调用链、简化后的代码，以及富文本复制时结构化数据如何关联的说明。它是对特定版本、特定功能的逆向分析，阅读材料是官方案例页，并没有在该页提供一个完整的 Notion 重建仓库。

### TH04《东方幻想乡》：核对环形弹幕的角度算法

[TH04 重建项目](https://github.com/N0zoM1z0/th04)围绕原版 PC-98 游戏维护 C++ 与汇编源码。REA 官方案例选取了其中的弹幕角度函数：先确认 DOS 程序的加载映像，再检查原始指令，解释环形弹幕如何均分方向、朝向玩家并叠加旋转量。

游戏用 256 个角度单位表示一圈。以初始 16 发的环形弹幕为例，各发子弹间隔 16 个单位；瞄准玩家时，再给整圈加上玩家方向。REA 在这里提供原始指令与引用，帮助核对可读源码中的计算。

根据[官方案例记录](https://rea.tools/showcase/th04/)，包含该函数的弹幕生成代码段，经指定的 Turbo C++ 4.0J 工具链编译后，有 **2,139 字节与原程序匹配**。原项目此前已有自己的分析脚本与重建工作，这个案例补充了 REA 对原始目标的检查，不能把整个重建项目的成果都归因于 REA；完整游戏行为与时序也有各自的验证范围。

### Desktop Games Nostalgia：把“桌面破坏器”搬到网页和 Mac

以前有一类小玩具，可以拿锤子砸桌面、用机枪留下弹孔，或者让白蚁在屏幕上爬。[Desktop Games Nostalgia](https://github.com/ucodia/desktop-games-nostalgia)重建的就是 Gemtree 在 2000 年发布的 Desktop Games，也叫 Stress Reducers。效果发生在桌面截图上，包含锤子、电锯、火焰喷射器等九种工具。

作者在 README 的“How it was made”中明确说明，移植使用了 Claude Code、REA 和 Ghidra。原游戏由 Peter 可视化编程工具制作，可执行文件里同时包含解释器、程序树和资源。项目先恢复程序树，再通过 REA 分析解释器，补齐图像压缩、资源布局、计时、精灵运动与声音播放等规则。

这些结果被用于编写 Swift 版运行时与游戏逻辑，随后又移植为使用 Canvas 2D 和 Web Audio 的 JavaScript 版本。它展示了从旧程序里理解一种专用运行时、再把玩法带到新平台的过程。可以直接查看[浏览器演示](https://ucodia.github.io/desktop-games-nostalgia/)；项目也列出了真彩色和阴影等方面与原版的差异。

### Snowball War：从 DOS 二进制恢复打雪仗的规则

[Snowball War 重建项目](https://github.com/tuunanet/rea-ski-or-die-reconstruction)选取了 Ski or Die 中的一个小游戏，用 Rust 和 SDL2 重新实现。研究范围包括人物移动、雪球轨迹、命中、弹药、得分、关卡与计时。

项目公开了“How REA was used”：先处理原程序的 EXEPACK 压缩，再用 REA 的 Ghidra 路径检查 DOS 加载映像，通过函数、字符串与调用追踪恢复玩法规则，留下说明后再编写实现。原版资源由用户自行提供，仓库包含提取工具。

这个案例的范围很清楚：重建的是 **Snowball War 这一个小游戏**，其他比赛项目与原版共享引擎不在范围内。它适合用来理解如何把一个大程序拆成能够独立研究的小目标。

### OpenBattlefield2：从游戏功能分析走向引擎重建

[OpenBattlefield2](https://github.com/Moxnatiy/OpenBattlefield2)尝试用 C++20 重建《战地 2》的 Refractor 2 引擎，并读取用户已有的原版游戏资源。与恢复某一个公式相比，它涉及地图、渲染、物理、网络同步、动画和界面等多个系统。

REA 的使用记录在项目的 [CLAUDE.md](https://github.com/Moxnatiy/OpenBattlefield2/blob/master/CLAUDE.md) 中：先通过 REA 获取一个函数的伪代码、汇编、调用关系、数据引用与未解决信息，再结合项目自身的 Ghidra 工程和研究笔记继续分析。这里只把该文件作为作者公开工作流程的资料。

作者报告的当前成果包括主菜单、地图加载、连接原版专用服务器，以及部分人物移动、动画和 HUD。完整武器循环、载具驾驶等仍未完成。它适合观察一个持续推进的研究工程，而不是当作已经完整替代原版游戏的成品。

这些案例展示了 REA 的实际用法：给 Agent 一个明确的功能问题，让它查原程序、追踪依赖和解释证据，再由重建代码或独立检查验证结果。想直观看效果，可以先看 Desktop Games；想读范围较小的游戏重建流程，可以看 Snowball War；想了解长期引擎研究，可以继续看 OpenBattlefield2。

## 电视方向：界面改造与原生应用

电视上的逆向研究通常围绕具体问题展开，例如查找遥控接口、研究启动器行为，或理解系统的媒体播放接口。不同项目的公开材料完整程度差别很大。

### Samsung Tizen：简洁主屏的社区演示

有作者公开报告使用 REA 分析自己的 Samsung Tizen 电视，做出不自动播放免费频道的简洁启动器和主屏。[社区案例记录](https://github.com/songshikang0111/awesome-REA-cases/blob/main/cases/en/samsung-tizen-rea-clean-launcher.md)附有[作者原帖链接](https://x.com/huntsyea/status/2111895984603320429)。

这条材料目前只能作为**作者自述的社区演示**：原帖未能直接核验，收录记录也未提供型号、固件版本、源码或安装方法，因此还无法判断具体修改层次，不能据此认定已经完成固件重写、取得 root 或适配所有三星电视。

### PlxNative：给 LG 电视做原生 Plex 客户端

[PlxNative](https://github.com/GLinnik21/plx-native)是一款面向 LG webOS 电视的非官方 Plex 客户端。作者为改善旧电视上的浏览体验，使用以 Rust 为主的原生实现，通过 GPU 绘制界面，并利用电视的硬件解码器播放视频；项目提供源码、安装说明和机型兼容记录。

它值得关注的地方是：针对设备已有能力重新设计应用，改善实际使用体验。**目前没有找到它使用 REA 的明确依据**，所以这里把它作为电视方向的相关项目，而不计入上面的 REA 案例。具体运行条件和机型差异应查阅项目文档。

## 《王国之泪》能在 PC 上运行，和 REA 有什么关系

《塞尔达传说：王国之泪》早在 2023 年就能通过 Switch 模拟器在 PC 上运行。[yuzu 原开发报告的存档](https://yuzu-mirror.github.io/entry/yuzu-progress-report-may-2023/)记录了启动、着色器、纹理和显存管理等兼容性工作。这项成果来自模拟器开发，不能归因于 REA。

“原本不在 PC 上的游戏能运行了”可能对应几种不同的技术路线：

| 路线 | 主要做什么 | 本文中的例子 |
| --- | --- | --- |
| 模拟器 | 实现游戏所依赖的主机指令与系统服务等运行环境 | 通过 Switch 模拟器运行《王国之泪》 |
| 静态重编译 | 提前转换目标程序的机器指令，并配套实现平台接口 | LASRecomp |
| 逆向重建 | 理解原程序的行为与数据，再维护一份新的实现 | DX-Ball、Snowball War |

一个相关项目是 [LASRecomp](https://github.com/peiikai/LASRecomp)：它把 2019 年 Switch 版《塞尔达传说：织梦岛》静态重编译为 Windows、macOS 和 Linux 应用。作者明确说明大量代码、工具与逆向工作由 Claude Code 完成，人负责指导、测试和审阅。项目处于 Beta，需要用户提供自己的游戏文件；目前也没有找到其使用 REA 的明确依据。

因此，阅读这类项目时，可以分别确认它采用的技术路线、实际完成的功能，以及 AI 和 REA 各自参与了哪个环节。

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
- [官方中文 README](https://github.com/morluto/rea/blob/main/docs/readme/README_zh.md)
- [官方逆向案例合集](https://rea.tools/showcase/)

---
title: 硬件破解入门：5 个开源项目与实践路线
date: 2026-10-27
category: 硬件
tag:
  - 硬件逆向
  - 开源项目
  - 固件分析
---

# 硬件破解入门：5 个开源项目与实践路线

拆开一块电路板以后，面对芯片、测试点和一排没有标注的焊盘，应该从哪里开始？与其先收集一大堆工具，不如先明确要回答的问题：设备启动时输出了什么，芯片之间怎样通信，固件里又装了哪些东西。

这篇文章整理了 5 个 GitHub 开源项目，从接口连接到固件分析，再到侧信道研究，补充它们的用途、所需设备和入门方式。内容基于项目官方资料整理，适合在自己的开发板、备用设备或获得授权的实验对象上学习；文中的练习是建议路线，并非个人实测记录。

<!-- more -->

## 先看项目分别解决什么问题

| 项目 | 主要用途 | 需要准备什么 | 适合从哪里开始 |
| --- | --- | --- | --- |
| [Tigard](https://github.com/tigard-tools/tigard) | 通过 UART、SPI、I²C、JTAG、SWD 等接口与目标连接 | Tigard 板卡、连接线及匹配的上位机软件 | 读取开发板的串口启动日志 |
| [PulseView](https://github.com/sigrokproject/pulseview) | 显示采集到的信号，并配合协议解码器分析通信 | 受 sigrok 支持的采集设备，或已有采集文件 | 观察自己生成的 UART、SPI 或 I²C 通信 |
| [flashrom](https://github.com/flashrom/flashrom) | 识别、读取、校验和写入受支持的 Flash 芯片 | 兼容的编程器、匹配的转接或夹具 | 读取独立测试芯片并保存备份 |
| [Binwalk](https://github.com/ReFirmLabs/binwalk) | 识别固件内嵌的数据、文件和文件系统等内容 | 固件文件及软件运行环境 | 分析厂商公开提供的升级包 |
| [ChipWhisperer](https://github.com/newaetech/chipwhisperer) | 采集和分析功耗轨迹，开展硬件安全研究 | 与实验匹配的采集板、目标板及 Python 环境 | 官方教学实验 |

这些项目处在不同环节。Tigard 负责与接口交互，PulseView 帮助观察信号，flashrom 处理受支持的存储芯片，Binwalk 分析已经拿到的文件。ChipWhisperer 则更适合在掌握电子与编程基础后深入学习。

## Tigard：连接电脑与目标板的多协议工具

[Tigard](https://github.com/tigard-tools/tigard) 是基于 FTDI FT2232H 的硬件接口工具。它把多种常用接口集中在一块板卡上，适合需要经常连接不同目标的工作台。

它提供独立的 UART 通道，另一个通道供其他接口使用。官方列出了多种配套软件：UART 可以使用串口终端，JTAG 可以配合 OpenOCD，SPI 和 I²C 可以配合相应的软件或 Python 库。具体接线、工作模式和软件支持需要按接口分别确认。

### 可以用它做什么

- 接收开发板启动时输出的串口日志，了解启动阶段与错误信息。
- 与已知型号的 SPI、I²C 外设通信，核对数据手册中的行为。
- 在目标开放调试接口且配置匹配时，配合调试软件开展 JTAG 或 SWD 调试。

### 入门建议

先选择一块引脚定义明确的开发板，找到串口输出口，记录目标的逻辑电平、接线与串口参数，尝试接收自己能够解释的启动信息。

Tigard 的模式开关与电压开关都有实际电气作用。官方区分了由目标供电、由 Tigard 供电和双方独立供电等方式；其中 VTGT 模式依赖目标提供参考电压。接线前应阅读对应章节，避免把参考电压和目标供电混为一谈。

项目说明与各接口接线方式：[Tigard README](https://github.com/tigard-tools/tigard#usage)。

## PulseView：把通信波形变成可阅读的数据

[PulseView](https://github.com/sigrokproject/pulseview) 是 sigrok 生态中的图形化信号分析软件，可用于查看逻辑分析仪、示波器及混合信号设备采集的数据。协议解码能力由 [libsigrokdecode](https://github.com/sigrokproject/libsigrokdecode) 等组件提供。

对于硬件入门，波形能帮助回答一些很具体的问题：某条线是否有活动，通信何时开始，时钟和数据的关系是否符合预期，以及串口输出乱码是否与参数设置有关。

### 可以用它做什么

- 观察开发板与外设之间的数字通信。
- 配置对应协议解码器，把波形转换成字节、地址或事务等信息。
- 保存采集记录，比较修改程序前后的通信变化。

### 入门建议

用自己编写的程序发送一段已知数据，再观察它对应的波形与解码结果。已知的输入有助于判断采样率、通道映射和解码参数是否正确。

安装软件以后，还需要确认采集设备是否受支持，以及输入电压、采样能力是否匹配目标。协议解码得到的字节还需要结合芯片资料和上层协议理解。

项目入口：[PulseView](https://github.com/sigrokproject/pulseview)；解码器项目：[libsigrokdecode](https://github.com/sigrokproject/libsigrokdecode)。

## flashrom：读取 Flash，并为后续分析保留原始数据

[flashrom](https://github.com/flashrom/flashrom) 是用于检测、读取、写入、校验和擦除 Flash 芯片的工具，支持多种芯片与编程器。它常见于 BIOS、固件备份和设备维护场景。

在硬件逆向流程中，它的一项用途是把受支持芯片中的内容读取为文件，交给后续的固件分析工具。能否成功读取，取决于芯片型号、编程器支持、供电和板上连接状态。

### 可以用它做什么

- 识别受支持的 Flash 芯片。
- 读取并保存芯片内容。
- 对已有镜像开展校验，并在具备恢复条件时进行固件维护。

### 入门建议

从独立的测试芯片开始，明确芯片型号与工作电压后，按照对应编程器的文档完成读取。连续读取两份文件并比较内容，可以作为检查读取一致性的一个步骤；一致性仍需结合容量、芯片识别结果等信息判断。

在板读取比独立芯片读取复杂，其他器件可能影响总线或供电。官方 README 还明确提醒笔记本电脑的嵌入式控制器可能与 Flash 访问发生冲突，并要求写入前备份。初学时应优先选择容易恢复的实验对象。

支持范围、安装和使用说明：[flashrom 官方文档](https://www.flashrom.org/)。

## Binwalk：从固件文件中寻找结构线索

[Binwalk](https://github.com/ReFirmLabs/binwalk) 用于识别文件内部嵌入的数据，并可选择提取其中的内容。官方当前 README 介绍的是使用 Rust 重写的 Binwalk v3，安装与参数应以对应版本的文档为准。

如果暂时没有硬件设备，Binwalk 是可以先尝试的项目：准备一份允许分析的固件文件，就能开始观察文件结构。

### 可以用它做什么

- 查找固件中可能存在的压缩数据、文件或文件系统。
- 根据支持情况提取识别到的内容。
- 通过熵分析寻找可能的压缩或加密区域，作为进一步调查的线索。

安装完成后，可以先查看帮助，再扫描一份固件：

```bash
binwalk --help
binwalk firmware.bin
```

将 `firmware.bin` 替换为实际文件路径。官方提供 Docker、Cargo 和源码编译等安装方式，具体依赖见 [Binwalk Wiki](https://github.com/ReFirmLabs/binwalk/wiki)。

### 如何理解扫描结果

识别结果是线索，需要继续核对偏移、文件格式和提取内容。高熵区域可能与压缩或加密有关，单凭熵值无法确定具体算法。提取出文件也不意味着能够直接运行完整设备系统，仿真通常还涉及处理器架构、内核、外设与配置。

第一个练习可以选择厂商公开发布的升级包，记录其中识别到的结构以及仍无法解释的部分。离线分析提取内容时，先查看文件与元数据，避免直接执行来源不明的程序。

## ChipWhisperer：进一步研究芯片运行时的物理信号

[ChipWhisperer](https://github.com/newaetech/chipwhisperer) 是面向硬件安全研究的开源工具链，包含硬件、固件与软件。其典型组成包括采集板、目标板，以及用于控制采集和处理功耗轨迹的 Python API。

侧信道分析关注程序运行时伴随产生的物理信息，例如功耗变化。ChipWhisperer 为这类研究提供采集和分析工具；具体实验需要匹配的硬件、目标固件和软件版本。

### 可以用它做什么

- 采集教学目标运行时的功耗轨迹。
- 使用分析 API 处理轨迹，学习统计分析方法。
- 结合官方课程理解触发、采样、噪声和实验重复性。

### 入门建议

从官方课程与配套目标板开始，先完成一次可重复的数据采集，再阅读分析流程。准备设备前，先检查实验要求，确认现有板卡是否支持所需能力。

官方 README 提到了 7.0 对分析器和项目 API 的调整，并说明旧 API 的兼容版本。使用网上笔记或旧教程时，需要先核对教程、软件与硬件版本，避免把接口变化误认为实验失败。

学习入口：[官方文档](https://chipwhisperer.readthedocs.io/en/develop/index.html)、[教学实验仓库](https://github.com/newaetech/chipwhisperer-jupyter)、[SCA101 课程](https://learn.chipwhisperer.io/courses/sca101)。

## 一条可以逐步推进的学习路线

1. **先分析文件。** 用公开固件练习 Binwalk，记录识别结果与未知区域，熟悉固件的基本组成。
2. **再观察通信。** 在自己的开发板上生成已知通信，使用串口工具或 PulseView 理解字节与信号的关系。
3. **尝试读取测试芯片。** 确认芯片与编程器支持后，用 flashrom 保存原始内容，并检查多次读取的一致性。
4. **连接多个环节。** 把采集到的日志、读取的镜像和分析结果放在一起，说明每项结论依据什么证据。
5. **深入物理层研究。** 有了基本的电子、编程与数据分析能力后，再进入 ChipWhisperer 的官方实验。

每次练习可以留下四项记录：目标设备与版本、使用的工具与参数、原始日志或文件，以及结论和未解决的问题。对镜像还可以记录文件大小和哈希，方便之后确认是否使用了同一份数据。

学习硬件破解的过程，往往就是不断缩小未知范围：从一条信号、一个字节或一段启动日志出发，把猜测变成能够重复观察的结果。

## 项目资料

本文于 2026-10-27 根据以下官方仓库与文档整理，未对所列硬件组合进行实测；后续使用时请核对各项目对应版本的说明。

- [Tigard：硬件功能、模式开关与接线说明](https://github.com/tigard-tools/tigard)
- [PulseView：sigrok 图形界面](https://github.com/sigrokproject/pulseview)
- [libsigrokdecode：协议解码器](https://github.com/sigrokproject/libsigrokdecode)
- [flashrom：Flash 访问工具](https://github.com/flashrom/flashrom)
- [Binwalk：固件分析工具](https://github.com/ReFirmLabs/binwalk)
- [ChipWhisperer：硬件安全研究工具链](https://github.com/newaetech/chipwhisperer)

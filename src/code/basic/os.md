---
title: 操作系统
icon: OS
date: 2023-12-26
category: 基础
order: 2
---

操作系统 (Operating System，OS) 是软件的一部分，它是硬件基础上的第一层软件，是硬件和其它软件沟通的桥梁(或者说接口、中间人、中介等)。

<!-- more -->

操作系统会控制其他程序运行，管理系统资源，提供最基本的计算功能，如管理及配置内存、决定系统资源供需的优先次序等，同时还提供一些基本的服务程序，例如:

1. 文件系统

   提供计算机存储信息的结构，信息存储在文件中，文件主要存储在计算机的内部硬盘里，在目录的分层结构中组织文件。文件系统为操作系统提供了组织管理数据的方式。

1. 设备驱动程序

   提供连接计算机的每个硬件设备的接口，设备驱动器使程序能够写入设备，而不需要了解执行每个硬件的细节。简单来说，就是让您能吃到鸡蛋，但不用养一只鸡。

1. 用户接口

   操作系统需要为用户提供一种运行程序和访问文件系统的方法。如常用的 Windows 图形界面，可以理解为一种用户与操作系统交互的方式；智能手机的 Android 或 iOS 系统，也是一种操作系统的交互方式。

1. 系统服务程序

   当计算机启动时，会自启动许多系统服务程序，执行安装文件系统、启动网络服务、运行预定任务等操作。

打个比方，操作系统就好像是一个政府，其它软件都会被它管控；操作系统在给其他软件提供各种便利的同时，还会约束其他软件不能为所欲为。

![操作系统结构示意图](./assets/OS.gif)

目前流行的服务器和 PC 端操作系统有 Linux、Windows、UNIX 等，手机操作系统有 Android、iOS，嵌入式操作系统有 Windows CE、PalmOS、eCos、uClinux 等。

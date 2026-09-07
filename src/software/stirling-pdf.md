---
title: Stirling PDF：在本地完成 PDF 处理
date: 2026-09-07
icon: file
category: 软件
---

# Stirling PDF：在本地完成 PDF 处理

[Stirling PDF](https://github.com/Stirling-Tools/Stirling-PDF) 是一个可在浏览器、本地桌面端或自建服务器中运行的 PDF 工具平台。合并、拆分、压缩、转换、OCR、签名、打码和批量工作流都可以在自己的环境里完成。

它特别适合合同、证件扫描件、内部报告等不宜上传到陌生在线网站的文档。项目采用 open-core 模式：基础功能可自托管，部分企业能力另有商业方案。

## 常用功能

- 合并、拆分、旋转和重新排序页面；
- PDF 与图片、Office 文档之间的转换；
- 压缩、OCR、加密、去密码与水印；
- 电子签名、涂黑敏感信息和提取页面；
- 将多个操作编成可复用的工作流。

## 用 Docker 快速启动

机器已安装 Docker 时，运行下面一条命令：

```bash
docker run -d \
  --name stirling-pdf \
  --restart unless-stopped \
  -p 8080:8080 \
  docker.stirlingpdf.com/stirlingtools/stirling-pdf
```

浏览器打开 `http://localhost:8080`，即可进入界面。第一次只建议用无敏感的测试文件确认流程。

停止和再次启动：

```bash
docker stop stirling-pdf
docker start stirling-pdf
```

## 处理文件的基本流程

以“合并两个 PDF”为例：

1. 在首页选择合并功能。
2. 拖入文件，调整页面或文件顺序。
3. 点击处理，下载生成的文件。
4. 打开结果，确认页码、清晰度和签名没有被意外改变。

涉及盖章、签名或法律用途的文件，处理后一定要人工核对。压缩、OCR 或格式转换可能改变文字层、图片质量或元数据。

## 对外部署前要补齐的东西

`-p 8080:8080` 只适合本机或受信任局域网测试。若通过公网访问，至少需要：

- Nginx 或 Caddy 反向代理与 HTTPS；
- 登录认证或 VPN，不让任何人匿名上传文件；
- 文件大小、并发任务与磁盘空间限制；
- 定期清理临时文件，并确认处理完成后的文件保留策略；
- 服务器与镜像的定期更新。

本地部署能减少文件交给第三方的次数，但不代表文件自动安全：管理员、服务器磁盘、备份和浏览器下载目录仍需要被保护。

相关链接：

- [Stirling PDF GitHub 仓库](https://github.com/Stirling-Tools/Stirling-PDF)
- [官方文档](https://docs.stirlingpdf.com/)

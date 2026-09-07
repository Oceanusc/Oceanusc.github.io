---
title: Immich：把照片备份回自己的服务器
date: 2026-09-07
icon: photo
category: 软件
---

# Immich：把照片备份回自己的服务器

[Immich](https://immich.app/) 是一个高性能的自托管照片与视频管理项目。手机端自动备份、网页相册、人物与地点搜索、共享相册、RAW 文件和 Live Photo 等能力，让它很像一个可以自己部署的照片云。

Immich 采用 AGPLv3 许可证。它适合想掌握照片存储位置、已有家庭 NAS 或服务器，并愿意负责备份和升级的用户。

> Immich 不是备份策略本身。官方也明确建议遵循 3-2-1 原则：至少三份副本、两种不同介质、一份异地保存。

## 可以做什么

- 用 Android 或 iOS 客户端自动上传相册；
- 按时间、人物、地点、相册和关键词浏览照片；
- 去重、收藏、归档、共享相册与多用户管理；
- 保存照片 EXIF 信息，支持地图和多种原始格式；
- 用网页端统一查看家人或多台设备的备份。

## 先体验，再决定是否部署

在动手前，可以访问 [Immich 官方演示站](https://demo.immich.app)。演示账号为 `demo@immich.app`，密码为 `demo`。先确认相册、搜索和时间线是否符合预期；不要把自己的真实照片上传到演示环境。

## 自建前的准备

官方推荐通过 Docker Compose 部署。服务器至少应准备：

- 一台长期运行的 Linux 主机或 NAS；
- Docker 与 Docker Compose；
- 足够的存储空间，以及单独的备份位置；
- 固定的局域网地址或可从外网访问的域名；
- 手机与服务器之间可靠的网络连接。

不要把照片目录放在随时会清理的临时盘，也不要只依赖 RAID。RAID 能减少单盘故障影响，却不是异地备份。

## 按官方 Compose 文件部署

Immich 的服务、数据库和缓存组件版本会持续变化，因此最稳妥的方式是始终使用 [官方安装文档](https://docs.immich.app/install/requirements) 中与当前版本匹配的 `docker-compose.yml` 和 `.env` 模板。

下载模板后，重点先改两个配置：

```dotenv
# 照片与视频的实际保存位置，使用绝对路径
UPLOAD_LOCATION=/srv/immich/library

# 数据库密码，使用随机长密码
DB_PASSWORD=请替换为随机长密码
```

然后在模板所在目录启动：

```bash
docker compose up -d
docker compose ps
```

首次启动后浏览器访问 Compose 模板所映射的端口，注册第一个管理员账号。后续在手机 App 的 Server Endpoint URL 中填写服务器地址并登录，即可开启相册备份。

## 手机端怎么设置

1. 在网页端先创建自己的账号。
2. 手机安装 Immich，填写服务器地址，例如 `https://photos.example.com`。
3. 登录后选择要备份的相册，不必一开始把所有目录都交给它。
4. 在系统权限中允许 App 访问照片，并根据流量与电量情况设置仅 Wi-Fi 上传。
5. 上传完成后随机抽查照片、视频、原图和删除恢复流程。

“手机显示已上传”不等于“备份已经可靠”。至少确认服务器磁盘中确实有文件，并让备份任务覆盖数据库与上传目录。

## 更新与安全

- 更新前阅读官方发布说明，并先备份数据库与上传目录。
- 对外访问必须配置 HTTPS、强密码和必要的访问控制；不要把数据库端口暴露到公网。
- 与家人共享时使用独立账号，不要共享管理员密码。
- 人脸、地点和原始照片都属于敏感个人数据，应只部署在你信任的设备与网络中。

相关链接：

- [Immich 官网](https://immich.app/)
- [Immich GitHub 仓库](https://github.com/immich-app/immich)
- [官方安装文档](https://docs.immich.app/install/requirements)

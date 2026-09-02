---
title: 运维工具
icon: server
category: 工具分享
---

# 运维工具：从本地环境到服务上线

这一页按“准备环境 → 部署服务 → 对外访问 → 监控与恢复”的顺序整理。新服务上线前至少应做到：可重复部署、日志可查看、数据可备份、异常能定位。

## 1. WSL2：Windows 上的 Linux 工作台

### 安装与确认

以管理员身份打开 PowerShell：

```powershell
wsl --install
wsl --update
wsl --status
wsl -l -v
```

建议使用 Ubuntu LTS。项目放在 Linux 家目录（如 `~/projects`）通常比 `/mnt/c` 更快、更稳定，特别是 Node.js 依赖安装和文件监听。

### 常用命令

```bash
pwd
ls -la
sudo apt update && sudo apt upgrade
df -h
free -h
```

如果 WSL 内存占用长期不释放，可在 Windows 终端执行 `wsl --shutdown` 后重新打开。不要随意复制网上的代理脚本到 shell 配置中，先确认端口、代理协议和系统需求。

[查看 WSL2 使用笔记 →](../wsl/)

## 2. WSA：Windows 上的 Android 环境

WSA 用于在 Windows 上运行和调试 Android 应用。出现无法启动、ADB 连不上或性能差时，按顺序检查：

1. BIOS 中的虚拟化已开启。
2. Windows 虚拟机平台等相关功能已开启。
3. 执行 `adb devices`，确认设备是否出现。
4. 更新 Windows、显卡驱动和 Android 平台工具。

[查看 WSA 笔记 →](../wsa/)

## 3. Linux 服务器的首次配置

### 创建普通用户并配置 SSH 密钥

不要长期使用 root 登录。先在本机生成密钥：

```bash
ssh-keygen -t ed25519 -C "your-email@example.com"
```

将公钥写入服务器用户的 `~/.ssh/authorized_keys` 后，用配置文件简化连接：

```sshconfig
Host production
  HostName example.com
  User deploy
  IdentityFile ~/.ssh/id_ed25519
  ServerAliveInterval 30
```

确认密钥登录可用后，再考虑关闭密码登录。修改 SSH 配置前应保留一个已登录的终端，避免配置错误后无法重新连接。

### 防火墙与基础检查

只开放实际需要的端口，例如 SSH、HTTP 与 HTTPS：

```bash
sudo ufw allow OpenSSH
sudo ufw allow 80/tcp
sudo ufw allow 443/tcp
sudo ufw enable
sudo ufw status
```

生产服务器还应定期检查磁盘、内存和自动安全更新，而不是等服务崩溃才处理。

## 4. Docker Compose：推荐的服务部署方式

将服务、端口、数据卷和环境变量写进 `compose.yaml`，不要只依赖一长串 `docker run` 命令。最小示例：

```yaml
services:
  app:
    image: example/app:1.0
    restart: unless-stopped
    env_file: .env
    ports:
      - "127.0.0.1:3000:3000"
    volumes:
      - app-data:/app/data

volumes:
  app-data:
```

常用生命周期命令：

```bash
docker compose up -d
docker compose ps
docker compose logs -f app
docker compose pull
docker compose up -d
docker compose down
```

### 关键原则

- 数据库、上传文件和应用配置必须使用持久化卷。
- `.env` 不提交到 Git；提供 `.env.example` 说明必要变量。
- 服务只绑定到 `127.0.0.1` 时，外网无法直连，需由 Nginx 统一代理。
- 更新前先备份数据卷与数据库，再 `pull` 新镜像并观察日志。

## 5. Nginx：反向代理、静态文件与 HTTPS

Nginx 常用于将域名转发到容器服务。反向代理示例：

```nginx
server {
  listen 80;
  server_name example.com;

  location / {
    proxy_pass http://127.0.0.1:3000;
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Proto $scheme;
  }
}
```

修改配置后的固定步骤：

```bash
sudo nginx -t
sudo systemctl reload nginx
sudo systemctl status nginx
```

HTTPS 推荐使用 Let's Encrypt。证书更新后要验证自动续期，并确保 Nginx 已 reload。不要把管理后台、数据库端口或 Ollama 默认端口直接暴露到公网。

## 6. 日志、监控与故障排查

### 首先看哪里

| 现象 | 优先检查 |
| --- | --- |
| 服务无法启动 | `systemctl status <服务>` 与 `journalctl -u <服务> -n 100` |
| 容器不断重启 | `docker compose logs -f <服务>` |
| 访问 502 | Nginx 错误日志、上游端口、容器状态 |
| 访问超时 | 防火墙、端口监听、DNS、服务器负载 |
| 磁盘满 | `df -h`、Docker 镜像/日志、数据库备份 |

### 标准排错流程

1. 记录症状、发生时间、最近改动和错误码。
2. 从服务本机请求一次，再从外网请求一次，定位问题边界。
3. 看日志和资源使用，不要一上来就重启。
4. 只修改一个变量后再验证，避免多个变更掩盖根因。
5. 修复后补充监控、告警或运行文档，减少下次排查时间。

## 7. 备份与恢复

备份至少包含数据库、上传文件、Docker 数据卷和环境配置。关键不是“有备份”，而是能恢复：定期在非生产环境演练一次恢复流程，并记录恢复所需的账号、密钥位置和命令。

---
title: AI 本地部署
icon: robot
category: 工具分享
---

# AI 本地部署：从零开始部署 Ollama + Open WebUI

本地部署适合离线使用、保护提示词与文档数据、稳定试用开源模型。对大多数个人用户，推荐从 **Ollama + Open WebUI** 开始：Ollama 管理并运行模型，Open WebUI 提供浏览器聊天、模型选择和知识库界面。

## 0. 选择方案与模型

### 推荐工具

| 目标 | 推荐 | 原因 |
| --- | --- | --- |
| 最快开始 | Ollama | 安装简单，命令统一，支持 Windows/macOS/Linux |
| 网页聊天界面 | Open WebUI | 可接入 Ollama，支持多用户、对话和知识库 |
| Windows 图形化替代 | LM Studio | 不想使用命令行时可作为单机试用工具 |
| 容器部署 | Docker Desktop + Compose | 可重复部署、方便升级与备份 |

### 按设备选择模型

| 设备资源 | 建议模型 | 适合任务 |
| --- | --- | --- |
| 8 GB 内存、无独显 | `qwen2.5:3b` | 简短中文问答、总结、轻量脚本 |
| 16 GB 内存或 8 GB 显存 | `qwen2.5:7b` | 日常问答、写作、代码解释 |
| 32 GB 内存或 12 GB 以上显存 | 14B 量级量化模型 | 更复杂的代码与长文本任务 |
| 代码优先 | `qwen2.5-coder:7b` | 代码补全、解释、重构建议 |

模型越大不代表一定更适合。先用 7B 量级验证速度、显存和回答质量，再决定是否升级。至少预留 15 GB 磁盘空间，多个模型会快速占满磁盘。

## 1. 安装 Ollama

### Windows

1. 从 [Ollama 官网](https://ollama.com/) 下载 Windows 安装包并完成安装。
2. 重新打开 PowerShell。
3. 执行以下命令确认安装：

```powershell
ollama --version
ollama list
```

### macOS / Linux

从官网下载安装包或按官网说明安装。Linux 上安装后确认服务状态：

```bash
ollama --version
sudo systemctl status ollama
```

如果服务未启动，先查看日志，不要重复安装：

```bash
sudo journalctl -u ollama -n 100 --no-pager
```

## 2. 下载并运行第一个模型

建议先下载通用中文模型：

```bash
ollama pull qwen2.5:7b
ollama run qwen2.5:7b
```

进入对话后，输入问题即可；使用 `/bye` 退出。模型管理命令：

```bash
ollama list              # 已下载模型
ollama ps                # 当前正在运行的模型
ollama rm <模型名>        # 删除不需要的模型，释放磁盘
```

如果设备性能有限，把 `qwen2.5:7b` 换成 `qwen2.5:3b`。如果只用于代码，换成 `qwen2.5-coder:7b`。一次只下载一个模型，确认使用体验后再增加。

## 3. 用 Open WebUI 提供浏览器界面

### 前置条件

安装 Docker Desktop，并确认 Docker 已运行：

```bash
docker version
docker compose version
```

### 创建部署目录

新建一个专用目录，例如 `~/open-webui`，在其中创建 `compose.yaml`：

```yaml
services:
  open-webui:
    image: ghcr.io/open-webui/open-webui:main
    container_name: open-webui
    restart: unless-stopped
    ports:
      - "3000:8080"
    volumes:
      - open-webui:/app/backend/data
    extra_hosts:
      - "host.docker.internal:host-gateway"

volumes:
  open-webui:
```

启动服务：

```bash
docker compose up -d
docker compose ps
docker compose logs -f open-webui
```

浏览器打开 `http://localhost:3000`，注册第一个管理员账号。

### 连接 Ollama

在 Open WebUI 设置中添加 Ollama 地址：

- Windows / macOS 的 Docker Desktop：`http://host.docker.internal:11434`
- Linux Docker：容器里的 `localhost` 不是宿主机；应改用 Docker 网关地址，或把 Ollama 和 Open WebUI 放进同一个 Compose 网络。

连接成功后，模型下拉菜单应该能看到 `qwen2.5:7b`。看不到时，先在宿主机运行 `ollama list`，确认模型已经下载，再检查 Open WebUI 日志。

## 4. GPU、CPU 和 WSL2 设置

### NVIDIA GPU

1. 安装与显卡匹配的 NVIDIA 驱动。
2. 在 Windows 终端执行：

```bash
nvidia-smi
```

3. 能看到显卡型号、驱动版本与显存占用后，再启动模型。
4. 如果模型加载失败或显存不足，先换小模型、缩短上下文，不要直接重装全部环境。

### 仅 CPU

CPU 可运行本地模型，但速度较慢。建议选择 3B～7B 的量化模型，减少同时运行的程序，且不要提交过长的上下文或超大文件。

### WSL2

在 WSL2 中运行 Docker 或 AI 工具前，确认 Windows 显卡驱动、WSL 版本和 Docker Desktop 的 WSL 集成都已启用。WSL 内存限制过低会导致模型加载失败；可先查看 `free -h` 了解可用内存。

## 5. 调用本地 API

Ollama 默认接口为 `http://127.0.0.1:11434`。下面示例用于在本机脚本中生成一次结果：

```bash
curl http://127.0.0.1:11434/api/generate \
  -d '{"model":"qwen2.5:7b","prompt":"用三点解释什么是 Docker","stream":false}'
```

也可以将它接入编辑器、自动化脚本或内部工具。请先检查插件是否会把提示词转发给第三方服务；“使用本地模型”不自动等于整个工具链都不出网。

## 6. 更新、备份与恢复

### 更新 Open WebUI

```bash
docker compose pull
docker compose up -d
docker compose logs -f open-webui
```

更新前先备份数据卷。不要一边排错一边随意执行 `docker volume rm`，它会删除会话、用户与配置数据。

### 备份建议

1. 记录 `compose.yaml` 和版本信息。
2. 定期导出或备份 Open WebUI 数据卷。
3. 记录已经验证过的模型名称与用途。
4. 更新前确认有可用备份，必要时先在测试环境验证。

## 7. 常见问题

### 模型下载慢或失败

- 检查网络、代理与剩余磁盘空间。
- 用 `ollama list` 确认是否已下载，避免重复拉取。
- 不从不可信来源下载模型文件或 Docker 镜像。

### Open WebUI 看不到模型

- 运行 `ollama list`，确认模型存在。
- 确认 Ollama 服务正在运行，默认端口为 `11434`。
- 容器内不能用 `localhost` 访问宿主机服务；检查配置的地址。
- 用 `docker compose logs -f open-webui` 查看具体连接错误。

### 生成很慢或程序退出

- 换更小的模型，例如 7B 改为 3B。
- 缩短对话历史和上下文长度。
- 关闭占用显存、内存的应用，再观察 `nvidia-smi`、任务管理器或 `free -h`。
- 确认 WSL2 或 Docker 没有限制过低的资源。

## 8. 安全边界

- Ollama 默认只应监听本机，不要直接将 `11434` 暴露到公网。
- 对外提供 Open WebUI 时必须增加账号、HTTPS、反向代理和访问控制。
- API Key、私有文档、聊天记录和数据卷备份不能提交到 Git 仓库。
- 在把业务文档导入知识库前，先确认数据权限与保留周期。

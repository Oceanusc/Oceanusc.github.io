---
title: 开发工具
icon: code
category: 工具分享
---

# 开发工具：一套够用的开发工作台

不需要安装几十个插件或工具。先搭好下面这套组合：**VS Code + Git + 浏览器开发者工具 + Node.js/pnpm + Postman 或 Bruno + Docker Desktop**。它能覆盖大多数 Web、脚本和服务端项目。

## 1. 编辑器：VS Code

### 推荐安装

从 [VS Code 官网](https://code.visualstudio.com/) 安装稳定版。首次安装时建议勾选“添加到 PATH”和右键菜单打开文件夹。打开项目时应始终打开项目根目录，而不是单个文件。

### 必装扩展

| 场景 | 推荐扩展 | 用途 |
| --- | --- | --- |
| 格式化 | Prettier | 保存时统一 JavaScript、TypeScript、JSON、Markdown 格式 |
| 代码检查 | ESLint | 在编辑器中显示常见错误与规范问题 |
| Git | GitLens（可选） | 查看某一行是谁、何时修改的 |
| 容器 | Docker | 查看容器、镜像、日志与数据卷 |
| 接口 | REST Client（可选） | 直接在 `.http` 文件内调接口 |

### 建议设置

打开设置，开启 **Format On Save**。对于使用 Prettier 的项目，再开启 **Code Actions On Save** 中的 ESLint 修复。不要把全局格式化规则强行应用到已有项目；优先服从仓库里的 `.editorconfig`、Prettier 和 ESLint 配置。

### 高频快捷键

| 操作 | Windows/Linux | macOS |
| --- | --- | --- |
| 快速打开文件 | `Ctrl + P` | `Cmd + P` |
| 全局搜索 | `Ctrl + Shift + F` | `Cmd + Shift + F` |
| 跳转定义 | `F12` | `F12` |
| 查找引用 | `Shift + F12` | `Shift + F12` |
| 重命名符号 | `F2` | `F2` |
| 打开终端 | ``Ctrl + ` `` | ``Cmd + ` `` |

## 2. 终端与运行环境

### Windows 建议

安装 **Windows Terminal**，并优先使用 PowerShell 7 或 WSL2。前端和 Node.js 项目建议安装 LTS 版 Node.js；不要在一个项目里混用多个 Node 大版本。

确认环境：

```bash
node --version
corepack enable
pnpm --version
git --version
```

### pnpm 基础工作流

```bash
pnpm install       # 按锁文件安装依赖
pnpm run dev       # 启动项目，具体脚本以 package.json 为准
pnpm run build     # 生成生产构建
pnpm run lint      # 执行规范检查（若项目提供）
pnpm outdated      # 查看可升级依赖
```

首次接手项目时，先阅读 `README.md` 和 `package.json` 中的 scripts，再启动服务。升级依赖时一次只处理一组相关依赖，并在升级后运行构建和测试。

## 3. Git：从修改到推送的标准流程

每次开始前：

```bash
git status
git pull --rebase
```

完成一个独立改动后：

```bash
git diff                 # 逐项确认变更
git add src/path/file.md # 只暂存本次相关文件
git commit -m "docs: add deployment guide"
git push
```

### 推荐规则

1. 一条提交只表达一个目的，方便 review 与回退。
2. 不要直接对不熟悉的项目执行 `git add .`。
3. `.env`、私钥、令牌、构建产物必须加入 `.gitignore`。
4. 遇到冲突时先读冲突两侧内容，理解意图后再合并；不要盲目保留其中一边。

## 4. 浏览器开发者工具：前端排错的第一现场

打开 Chrome/Edge 开发者工具后，按问题选择面板：

| 问题 | 面板 | 要看什么 |
| --- | --- | --- |
| 样式没生效 | Elements | 最终 CSS、覆盖顺序、盒模型和伪类 |
| 接口报错 | Network | URL、方法、状态码、请求头、响应体和耗时 |
| JavaScript 异常 | Console / Sources | 报错堆栈、断点、局部变量 |
| 缓存导致旧页面 | Application | Cache Storage、Service Worker、Local Storage |
| 页面慢 | Performance / Lighthouse | 长任务、图片体积、未使用资源 |

遇到“线上还是旧页面”时，先勾选 Network 的 **Disable cache**，再检查 Application 中是否有旧 Service Worker。仅按刷新键通常不够。

## 5. API 调试：Postman、Bruno 与 curl

### 选择建议

- **Postman**：功能完整，适合团队维护接口集合、Mock 和环境变量。
- **Bruno**：接口集合保存在本地文件，适合希望把接口请求随代码提交的项目。
- **curl**：最快验证网络、认证与服务状态，服务器上尤其好用。

示例：

```bash
curl -X POST https://api.example.com/v1/items \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer <token>" \
  -d '{"name":"demo"}'
```

排错顺序：确认 URL 和 HTTP 方法 → 看状态码 → 看响应体 → 检查鉴权 → 对照浏览器 Network 中的真实请求。令牌必须放在环境变量中，不能写进请求示例或 Git。

## 6. 数据库与日志工具

- **DBeaver**：统一连接 MySQL、PostgreSQL、SQLite 等数据库。生产库默认只读连接，执行更新前先确认 `WHERE` 条件。
- **TablePlus**：轻量数据库 GUI，适合个人开发。
- **jq**：在终端格式化 JSON：`curl <url> | jq`。
- **ripgrep (`rg`)**：快速搜索代码与日志：`rg "错误关键词" .`。

处理数据前先备份；任何 `DELETE` 或 `UPDATE` 语句都先用相同条件执行 `SELECT` 验证范围。

## 7. Docker：让本地环境可复现

安装 Docker Desktop 后，先确认：

```bash
docker version
docker compose version
```

项目优先使用 `compose.yaml` 启动：

```bash
docker compose up -d
docker compose ps
docker compose logs -f <服务名>
docker compose down
```

数据库与上传文件必须使用数据卷；密码放入本地 `.env` 文件；镜像应固定主要版本，避免 `latest` 在不知情时改变运行环境。

## 8. Flutter 维护

更新 Flutter 依赖或 Android 工具链前：

```bash
flutter doctor
flutter pub outdated
flutter analyze
flutter test
```

先升级一个兼容性链条（Flutter/Dart、Gradle/Kotlin 或 Android Gradle Plugin），然后分别验证构建、真机运行和核心功能。

[查看 Flutter 依赖更新笔记 →](../flutter/)

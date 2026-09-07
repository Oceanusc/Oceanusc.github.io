---
title: RustDesk：开源远程桌面控制工具
date: 2026-09-07
icon: desktop
category: 软件
---

# RustDesk：不只是“远程控制电脑”

远程控制软件看起来很简单：输入一串 ID，获得对方同意，就能看到并操作另一台电脑。但当对象变成父母的电脑、家里的主机，或团队中的设备时，真正重要的问题是：连接经过谁的服务器？谁保管访问凭据？断网、换网络或没有人确认时怎么办？

[RustDesk](https://rustdesk.com/) 是一个开源远程桌面项目，客户端使用 Rust 开发，支持 Windows、macOS、Linux、Android 和 iOS。它可以直接使用官方提供的连接服务，也支持把连接服务部署到自己的服务器上。

> 远程控制应仅用于你拥有或已经取得明确授权的设备。不要向陌生人提供设备 ID、验证码或无人值守访问密码。

## 它解决了什么问题

对大多数人来说，RustDesk 可以完成三类事情：

- 临时协助：帮家人排查软件问题，或为同事演示操作。
- 跨设备办公：在笔记本、台式机和服务器之间访问文件或桌面。
- 自主管理：不希望设备发现和中继完全依赖第三方服务时，改用自己的服务器。

它并不是“黑客工具”。远程控制软件的能力很强，所以安全不取决于软件是否开源，而取决于使用者是否控制好授权、密码与网络边界。

## 一次连接是怎样建立的

两台电脑多数都在路由器或公司网络之后，彼此不能直接找到对方。RustDesk 会先通过 rendezvous（会合）服务让双方交换连接信息，再尝试建立直接连接；如果网络条件不允许，就通过 relay（中继）服务转发数据。

```text
控制端 ── 会合服务 ── 被控端
   │                    │
   └──── 能直连时直接传输 ────┘
   │
   └──── 无法直连时经中继服务 ──── 被控端
```

这也是远程控制软件常见的两层结构：会合服务负责“找到设备”，中继服务负责“网络实在打不通时帮忙转发”。是否直连会受 NAT 类型、防火墙、运营商网络和企业网络策略影响。

## 先从官方服务开始

第一次体验不需要自建服务器：

1. 从 [RustDesk Releases](https://github.com/rustdesk/rustdesk/releases) 下载与你系统匹配的客户端，在控制端和被控端各安装一次。
2. 打开被控端 RustDesk，记下首页显示的 RustDesk ID 与临时密码。
3. 在控制端输入这串 ID，选择“连接”。
4. 被控端会弹出授权窗口；核对控制者身份后选择允许。
5. 控制端连接成功后可操作桌面，也可以按需要切换到文件传输、剪贴板同步等功能。
6. 结束时在任一端断开连接。临时协助结束后，不要保留无人值守密码或自动接受设置。

临时协助优先使用一次性密码与人工确认。这样即使 ID 被别人知道，也不能直接获得控制权。

## 无人值守访问要谨慎开启

如果需要在家外访问自己的电脑，可以在被控端的安全设置中启用无人值守访问，并设置固定密码。它适合“自己的多台设备”，不适合临时帮陌生人处理问题。

启用前至少确认三件事：电脑设有系统登录密码、RustDesk 的固定密码与系统密码不同、设备不会被公共账号或多人共用。启用后，仍建议只在确实需要的设备上保存连接信息。

## 什么情况下值得自建服务器

自建并不等于“人人必需”。只有在下面这些情况里，它才值得花时间维护：

- 多台设备长期使用，希望统一控制会合与中继服务；
- 公司或团队对网络路径、日志和数据所在地有明确要求；
- 官方连接服务在所在网络中不稳定，且你有可维护的公网服务器；
- 想研究远程桌面、NAT 穿透和中继机制本身。

RustDesk 的服务端通常由 `hbbs`（会合服务）和 `hbbr`（中继服务）组成。客户端需要配置服务器地址和公钥等信息。下面是一套适合个人或小团队的最小部署；示例假定你有一台装好 Docker 的 Linux 公网服务器，以及一个指向该服务器的域名 `rd.example.com`。

## 自建服务：Ubuntu + Docker 最小部署

### 1. 准备服务器

先在服务器上安装 Docker，并确认它能正常运行：

```bash
docker version
```

创建专用数据目录。密钥会保存在这里，不能删除，也不要上传到 Git 仓库：

```bash
mkdir -p ~/rustdesk-server/data
cd ~/rustdesk-server
```

### 2. 启动会合与中继服务

先启动 `hbbs`，再启动 `hbbr`。把 `rd.example.com` 换成自己的域名或公网 IP：

```bash
docker run -d \
  --name rustdesk-hbbs \
  --restart unless-stopped \
  --network host \
  -v "$HOME/rustdesk-server/data:/root" \
  rustdesk/rustdesk-server \
  hbbs -r rd.example.com:21117

docker run -d \
  --name rustdesk-hbbr \
  --restart unless-stopped \
  --network host \
  -v "$HOME/rustdesk-server/data:/root" \
  rustdesk/rustdesk-server \
  hbbr
```

这里使用 Docker 的 host 网络模式，因此示例适用于 Linux 服务器。`hbbs` 默认监听 `21116`，`hbbr` 默认监听 `21117`。首次启动后，`hbbs` 会在数据目录生成服务端密钥与公钥。

查看服务是否正常运行：

```bash
docker ps --filter "name=rustdesk"
docker logs --tail 100 rustdesk-hbbs
docker logs --tail 100 rustdesk-hbbr
```

如果需要使用 UFW，最小情况下先开放会合服务的 TCP/UDP `21116` 和中继服务的 TCP `21117`：

```bash
sudo ufw allow 21116/tcp
sudo ufw allow 21116/udp
sudo ufw allow 21117/tcp
```

云服务器还要在供应商的安全组中开放相同端口。若以后启用 Web Client 或其他扩展功能，应以 [官方端口说明](https://rustdesk.com/docs/en/self-host/rustdesk-server-oss/install/) 为准补充端口，而不是随意放开大范围端口。

### 3. 获取客户端要填写的公钥

只需要给客户端提供公钥，不要复制私钥 `id_ed25519`。公钥文件通常位于数据目录：

```bash
cat ~/rustdesk-server/data/id_ed25519.pub
```

将输出的整行内容复制下来，稍后填入客户端的 Key（密钥）字段。

### 4. 在客户端连接自建服务

在每台 RustDesk 客户端中打开 **设置 → 网络**，填写：

| 字段 | 示例 |
| --- | --- |
| ID Server | `rd.example.com:21116` |
| Relay Server | `rd.example.com:21117` |
| Key | `id_ed25519.pub` 文件的完整内容 |

保存后重启 RustDesk。两台客户端都应使用同一套服务器设置，之后首页出现的设备 ID 会由你的 `hbbs` 服务登记。先在同一网络内测试，再用手机热点或另一条宽带验证跨网连接；这能区分“服务没有启动”和“公网防火墙未放行”两类问题。

### 5. 日常维护

升级前先查看当前容器和数据目录，不要删除挂载的数据卷：

```bash
docker pull rustdesk/rustdesk-server
docker stop rustdesk-hbbs rustdesk-hbbr
docker rm rustdesk-hbbs rustdesk-hbbr
```

然后重新执行上面的两条 `docker run` 命令。因为数据目录仍然挂载在宿主机，密钥与既有客户端配置会保留。

## 自建后的安全清单

自建服务器只改变连接基础设施的归属，不能替代终端安全。至少应做到：

- 给服务器和客户端保持更新，及时处理已知漏洞；
- 为无人值守访问设置长且唯一的密码，并只对确实需要的设备开启；
- 不开启“自动接受所有连接”这类便利选项；
- 用防火墙只开放官方文档要求的端口，并限制管理端访问来源；
- 不把设备 ID、访问密码、配置文件或私钥放进公开仓库和聊天记录；
- 对工作设备遵循组织的 IT 与数据合规要求。

一个实用原则是：把远程控制当成“把键盘、鼠标和文件入口交给另一端”。只要你不会随便把电脑交给陌生人，也就不应随便通过远程桌面交出这些权限。

## 开源不等于没有成本

RustDesk 的价值在于可检查、可部署、可替换连接服务；但它不会自动消除维护成本。自建意味着要处理服务器升级、证书、端口、防火墙、可用性和故障排查。个人偶尔协助时，官方服务通常更省事；有长期设备管理需求时，再考虑自建更合理。

相关链接：

- [RustDesk 官网](https://rustdesk.com/)
- [RustDesk GitHub 仓库](https://github.com/rustdesk/rustdesk)
- [RustDesk 官方自建文档](https://rustdesk.com/docs/en/self-host/)

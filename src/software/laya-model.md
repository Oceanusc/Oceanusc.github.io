---
title: Laya：开源的非自回归决策模型
date: 2026-09-28
icon: robot
category: 软件
---

# Laya：开源的非自回归决策模型

[Laya](https://github.com/NandhaKishorM/laya) 是 Convai Innovations 开源的 System 1 决策模型。它不负责像聊天模型那样逐字生成回答，而是读取一段状态和一组结构化问题，在一次前向计算中给出选择、评分或是非判断及对应概率。

截至 2026 年 9 月 28 日，Laya 官方仓库约有 2.68 万 Star。项目采用 Apache 2.0 许可证，模型权重可从 Hugging Face 获取。首次运行需要下载权重；下载之后，模型推理可以在本机完成，不必为每个判断调用云端 API。

## 它擅长回答什么

Laya 面向的是“给定信息后，快速作出有类型的判断”，而不是开放式写作。当前接口包含三类问题：

- `choice`：从候选项中选择一个，例如把客服工单分到计费、技术或其他团队。
- `score`：按有序标准给出预期分数，例如判断任务紧急程度。
- `noul`：回答一个是非问题，并给出模型认为答案为真的概率。

一个请求可以同时包含多个问题。例如，读一条用户反馈时，同一遍计算可以同时判断所属部门、紧急程度和是否存在流失风险。

## 安装并运行第一个判断

Laya 支持 Python 3.10 及以上版本。先安装官方 Python 包：

```bash
python -m pip install laya
```

下面的示例判断一条重复扣费工单应交给哪个团队，以及用户是否可能取消服务：

```python
from laya import Router

router = Router()  # 首次调用时下载并加载所需模型

state = "We were billed twice for March. Please refund the duplicate or we will cancel."
questions = {
    "department": {
        "type": "choice",
        "instructions": "Which department should handle this?",
        "criteria": {
            "billing": "invoices, payments, and refunds",
            "technical": "bugs, outages, and system errors",
            "other": "everything else",
        },
    },
    "churn_risk": {
        "type": "noul",
        "instructions": "Does the user threaten to cancel or leave?",
    },
}

result = router.predict(state, questions)
print(result["answers"]["department"]["choice"])
print(result["answers"]["churn_risk"]["noul"])
```

首次运行要下载模型权重，所以需要网络；之后可在本机推理。Router 会根据文本语言选择合适的检查点。官方项目还提供 HTTP 服务、命令行、批量推理，以及 LangChain、LangGraph、MCP 等可选集成。

## 部署成自己的决策 API

如果其他服务也要调用 Laya，可以安装官方 HTTP 服务扩展。下面的命令会启动 Jev 兼容的接口：

```bash
python -m pip install "laya[serve]"
export LAYA_HOST=0.0.0.0
export LAYA_PORT=8000
export LAYA_API_KEY="替换为一段足够长的随机密钥"
laya-serve
```

服务启动时会按需下载模型权重。第一次启动需要能访问模型仓库；部署环境没有外网时，可先在有网络的机器下载权重，再按模型仓库提供的缓存/修订配置准备运行环境。`LAYA_DEVICE` 可指定推理设备，例如有匹配的 CUDA PyTorch 环境时设为 `cuda`；`LAYA_PRELOAD=1` 会预加载检查点，减少第一次请求延迟，同时增加启动时间和内存占用。

接口是 `POST /v1/systemone`。如果设置了 `LAYA_API_KEY`，调用方要带上 Bearer 认证：

```bash
curl http://127.0.0.1:8000/v1/systemone \
  -H "Authorization: Bearer 替换为你的密钥" \
  -H "Content-Type: application/json" \
  -d '{"state":{"body":"重复扣款，请退款"},"questions":{"dept":{"type":"choice","instructions":"哪个团队处理？","criteria":{"billing":"账单和退款","tech":"软件故障"}}}}'
```

正式对外服务时，不要把带密钥的 Laya 服务裸露在公网。建议放在内网或受防火墙保护的网段，通过 HTTPS 反向代理或网关对外提供访问，并限制可调用的来源。密钥要放在服务端环境变量或密钥管理服务中，不能写进浏览器端代码。

## 选择模型时要留意

Laya 的仓库包含不同检查点：基础英文模型、多语言模型，以及面向特定 typed-decision 基准微调的模型。Router 会自动选择语言检查点；处理较长文本时，需要留意所选模型的上下文长度和 `max_len` 设置。不要把某一项基准成绩当成在所有业务数据上的准确率，建议先用自己的标注样本评估。

官方 README 提醒，已发布检查点的置信度可能过高；多语言、长文本和较多候选项也会影响表现。模型输出的概率不是正确性的保证，先用自己的标注数据测准确率并校准阈值。对涉及资金、账号、客户权益或数据删除的操作，应让模型提供建议，由明确的规则或人工审批决定是否执行。

## Laya 和 Jev 是什么关系

[TypeSafe Jev](https://docs.typesafe.ai/introduction) 是托管式决策 API。Laya 提供开放权重和本地推理，并实现了与 Jev 相兼容的 `system_one` 请求格式，便于在相似调用形状之间迁移。两者的模型、概率定义和能力边界并不完全相同，迁移后仍要重新评估阈值与准确率。

相关链接：

- [Laya GitHub 仓库](https://github.com/NandhaKishorM/laya)
- [Laya 模型权重](https://huggingface.co/convaiinnovations/laya)
- [多语言模型权重](https://huggingface.co/convaiinnovations/laya-multilingual)
- [Laya 官方文档](https://nandhakishorm.github.io/laya/)
- [Jev 决策服务介绍](jev-model.md)


---
title: Jev：面向结构化判断的托管决策模型
date: 2026-09-28
icon: robot
category: 软件
---

# Jev：面向结构化判断的托管决策模型

[Jev](https://docs.typesafe.ai/introduction) 是 TypeSafe 提供的 System 1 决策模型服务。它面向需要快速作出明确判断的程序：给模型一段状态和结构化问题，返回候选选择、等级评分或是非判断，而不是生成一段长篇自然语言。

这里的 Jev 指 TypeSafe 的托管模型/API。它不是一个可下载权重、能自行部署的开源模型；GitHub 上的 [Jev Ultrafast](https://github.com/browser-use/jev-ultrafast) 是一个使用 Jev API 的浏览器 Agent 演示项目，不是 Jev 模型权重仓库。

## 它适合哪类任务

Jev 的 `system_one` 接口适合把模型放在已有程序的判断节点上，例如：

- 从多个候选队列中挑选一个工单处理团队；
- 按清晰的等级标准判断任务优先级；
- 判断一段内容是否符合某条条件，并使用返回的概率决定是否升级人工复核。

和通用聊天接口相比，这种调用方式让应用明确提供“要回答的问题”和“允许的候选项”。一个状态里可以同时请求多项判断，调用方再读取结构化答案和概率。

## 如何开始使用

Jev 通过 TypeSafe 提供的服务调用。先查看[官方文档](https://docs.typesafe.ai/introduction)了解当前账号申请、SDK/API 接入方式、可用模型和计费，再把 API 凭据放到环境变量或密钥管理服务中。具体 SDK 名称和请求地址以官方文档为准；不要将密钥写入仓库或前端代码。

调用的概念结构如下。这里展示的是问题形状，不是可直接复制的完整 HTTP 请求：

```json
{
  "state": "用户因同一订单被重复扣款，要求退款",
  "questions": {
    "department": {
      "type": "choice",
      "instructions": "应由哪个团队处理？",
      "criteria": {
        "billing": "账单、付款和退款",
        "technical": "故障和技术问题",
        "other": "其他问题"
      }
    },
    "urgent": {
      "type": "noul",
      "instructions": "这件事是否需要立即处理？"
    }
  }
}
```

接口会返回各问题的类型化答案和概率。应用可以依据业务阈值自动处理低风险、把边界情况转交人工；阈值需要用自己的数据评估，不建议直接照搬示例数值。

## 自托管与开源边界

Jev 本身是托管服务，不能把 Jev 权重下载到自己的服务器上运行。若需求是开放权重和本地推理，可以考虑 [Laya](laya-model.md)：它提供兼容 Jev `system_one` 形状的开源决策模型，但兼容接口并不意味着判断质量、概率校准和支持范围完全相同。

如果通过 [Jev Ultrafast](https://github.com/browser-use/jev-ultrafast) 体验浏览器自动化，浏览器控制程序会在本机运行，但 Jev 决策仍需访问托管服务。网页内容可能包含个人或业务数据；启用前先确认服务的数据处理方式，只用低风险网页任务试跑，并避免把生产账号交给未验证的自动化流程。

相关链接：

- [TypeSafe Jev 官方文档](https://docs.typesafe.ai/introduction)
- [Jev Ultrafast 浏览器 Agent 演示](https://github.com/browser-use/jev-ultrafast)
- [Laya 开源决策模型教程](laya-model.md)


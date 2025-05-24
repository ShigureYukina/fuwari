---
title: 一些适用于 Fuwari 的 Markdown 扩展功能
published: 2025-05-24
description: 'Markdown的DLC（'
image: ''
tags: [github, 示例, Markdown, Fuwari]
category: '指南'
draft: false 
---

## GitHub 仓库卡片
你可以添加链接到 GitHub 仓库的动态卡片，在页面加载时，仓库信息会从 GitHub API 获取。例如本项目的仓库：

::github{repo="ShigureYukina/ShigureYukina.github.io"}

使用代码 `::github{repo="<owner>/<repo>"}` 创建一个 GitHub 仓库卡片。

```markdown
::github{repo="saicaca/fuwari"}
```

## 提示框

支持以下类型的提示框：`note` `tip` `important` `warning` `caution`

:::note
突出显示用户在浏览时应该注意的信息。
:::
```markdown
:::note
突出显示用户在浏览时应该注意的信息。
:::
```
:::tip
帮助用户更好地使用的可选信息。
:::
```markdown
:::tip
帮助用户更好地使用的可选信息。
:::
```
:::important
用户成功所必需的关键信息。
:::
```markdown
:::important
用户成功所必需的关键信息。
:::
```
:::warning
需要用户立即注意的重要内容，因为可能存在风险。
:::
```markdown
:::warning
需要用户立即注意的重要内容，因为可能存在风险。
:::
```
:::caution
某个操作可能带来的负面后果。
:::
```markdown
:::caution
某个操作可能带来的负面后果。
:::
```

### 自定义标题

提示框的标题也可以自定义。

:::note[自定义标题]
这是一个带有自定义标题的提示框。
:::

```markdown
:::note[自定义标题]
这是一个带有自定义标题的提示框。
:::
```

### GitHub 语法

> [!TIP]
> 同样支持 [GitHub 语法](https://github.com/orgs/community/discussions/16925)。

```
> [!NOTE]
> 同样支持 GitHub 语法。

> [!TIP]
> 同样支持 GitHub 语法。
```
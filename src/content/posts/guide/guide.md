---
title: Fuwari 简单指北
published: 2025-05-24
description: "入门到入土"
image: "./cover.jpg"
tags: ["Fuwari", "博客", "自定义"]
category: 指南
draft: false
---

> 封面是可爱风堇：[ハピイヌ](https://x.com/sumomotaro_0/status/1925129443481383231/)

这个博客是用 [Astro](https://astro.build/) 构建的。

对于本指南中未提及的内容，可以在 [Astro 文档](https://docs.astro.build/) 中自行寻找。

## 文章的前置配置

```yaml
---
title: 我的第一篇博客文章
published: 2025-05-24
updated: 2025-05-14
description: 这是我的新 Astro 博客的第一篇文章。
image: cover.jpg
tags: [示例1, 示例2]
category: 前端
draft: false
---
```

| 属性          | 描述                                                                                                                                                                                                    |
|---------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `title`       | 文章的标题。                                                                                                                                                                                              |
| `published`   | 文章发布的日期。                                                                                                                                                                                          |
| `updated`   | 文章最后编辑的日期。                                                                                                                                                                                          |
| `description` | 文章的简短描述。显示在首页。                                                                                                                                                                              |
| `image`       | 文章的封面图片路径。<br/>1. 如果是网络图片 : 需要以 `http://` 或 `https://` 开头的链接<br/>2. 如果是 `public` 目录中的图片: 需要以 `/` 开头的相对路径 <br/>3. 如果是和 markdown 文件同一路径的图片：文件名即可                                  |
| `tags`        | 文章的标签。                                                                                                                                                                                                  |
| `category`    | 文章的分类。                                                                                                                                                                                                  |
| `draft`       | 状态有 `true` / `false` 。如果这篇文章是草稿状态（`true`），则不会在博客中显示。                                                                                                                                                                            |

## 文章文件的存放位置

文章文件应该会放在 `src/content/posts/` 目录下。

推荐创建子目录来更好地管理文章和图片等资源。

```
src/content/posts/
├── post-1.md
└── post-2/
    ├── cover.png
    └── index.md
```

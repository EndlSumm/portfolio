# 关卡策划作品集网站

现代简洁的单页作品集，包含顶部导航与 3 个作品展示模块。

## 本地预览

直接用浏览器打开 `index.html`，或在项目目录运行：

```bash
npx serve .
```

## 自定义内容

### 1. 个人信息

编辑 `index.html` 中的：

- 导航栏 Logo 文字
- Hero 区标题与简介
- 「关于我」段落
- 页脚邮箱：`your.email@example.com`

### 2. 三个作品模块

每个 `.work-card` 内可修改：

| 字段 | 位置 |
|------|------|
| 标题 | `.work-card__title` |
| 简介 | `.work-card__desc` |
| B 站视频 | `btn--video` 的 `href`（替换为你的 BV 号链接） |
| 设计文档 | `assets/docs/project-0X-design-doc.pdf` |
| 游戏试玩 | `assets/demos/project-0X-demo.zip` |

### 3. 放置下载文件

将文件放入对应目录：

```
assets/
├── docs/
│   ├── project-01-design-doc.pdf
│   ├── project-02-design-doc.pdf
│   └── project-03-design-doc.pdf
└── demos/
    ├── project-01-demo.zip
    ├── project-02-demo.zip
    └── project-03-demo.zip
```

## 部署

可上传至 GitHub Pages、Vercel、Netlify 等静态托管平台。

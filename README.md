# 关卡策划作品集网站

现代简洁的单页作品集，包含个人介绍、3 个 Unity Demo、UE 白盒复刻、2 份关卡拆解与建筑作品。部署入口为 `index.html`，共用根目录的 `styles.css` 和 `script.js`。

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

《生化危机 4 重制版》第九章拆解使用 `assets/docs/《生化危机4 重置版》第九章关卡拆解文档.pdf`（保留原文件名），页面展示五章目录与结论，下载文件名使用“重制版”。更新 PDF 后请同步页面中的页数和大小。`portfolio.html` 与中文命名的 HTML 是旧浏览器保存副本，不作为部署入口。

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

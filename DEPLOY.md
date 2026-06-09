# 部署指南

项目已准备就绪，目录：`D:\work\level-design-portfolio`

**请使用 `index.html` 部署**，不要使用 `游戏策划作品集.html`（那是浏览器另存为的副本，链接会失效）。

---

## 方式一：Netlify Drop（最快，无需 Git）

1. 打开 [https://app.netlify.com/drop](https://app.netlify.com/drop)
2. 将 **`portfolio-deploy.zip`** 拖入页面（或拖入整个项目文件夹，排除 `游戏策划作品集_files`）
3. 等待上传完成，Netlify 会给你一个在线地址，例如 `https://random-name.netlify.app`
4. 可在 Netlify 后台修改站点名称

> 试玩包合计约 115 MB，上传可能需要几分钟。

---

## 方式二：GitHub Pages（推荐，稳定）

### 第一步：安装 Git

下载安装：[https://git-scm.com/download/win](https://git-scm.com/download/win)

### 第二步：创建 GitHub 仓库

1. 登录 [GitHub](https://github.com)
2. 点击 **New repository**
3. 仓库名：`level-design-portfolio`（或自定义）
4. 选 **Public**
5. **不要**勾选 README / .gitignore
6. 创建

### 第三步：推送代码

在项目文件夹 `D:\work\level-design-portfolio` 中，双击运行 **`deploy.bat`**，按提示输入 GitHub 用户名并推送。

或手动在 PowerShell 中执行：

```powershell
cd D:\work\level-design-portfolio
git init
git branch -M main
git add index.html styles.css script.js README.md .gitignore assets/
git commit -m "Deploy game design portfolio site"
git remote add origin https://github.com/你的用户名/level-design-portfolio.git
git push -u origin main
```

### 第四步：开启 GitHub Pages

1. 进入仓库 **Settings → Pages**
2. **Source** 选 `Deploy from a branch`
3. **Branch** 选 `main`，文件夹选 `/ (root)`
4. 保存

几分钟后访问：`https://你的用户名.github.io/level-design-portfolio/`

---

## 方式三：GitHub 网页上传（无 Git 命令行）

1. 创建空仓库（同上）
2. 仓库页点击 **Add file → Upload files**
3. 上传以下文件/文件夹：
   - `index.html`
   - `styles.css`
   - `script.js`
   - `assets/` 整个文件夹
4. 提交后在 **Settings → Pages** 开启（同上）

> 若单个文件超过 25 MB 上传较慢，可优先用 Netlify Drop。

---

## 部署后检查

- [ ] 三个 B 站视频能否播放
- [ ] 设计文档 PDF 能否下载
- [ ] 游戏试玩 ZIP 能否下载
- [ ] 手机端布局是否正常

## 后续更新

修改 `index.html` 等内容后，重新推送（Git）或重新上传（Netlify）即可。

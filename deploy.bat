@echo off
chcp 65001 >nul
echo ========================================
echo   游戏策划作品集 - GitHub Pages 部署脚本
echo ========================================
echo.

where git >nul 2>&1
if errorlevel 1 (
    echo [错误] 未检测到 Git。请先安装：https://git-scm.com/download/win
    pause
    exit /b 1
)

set REPO_NAME=level-design-portfolio
cd /d "%~dp0"

echo 请输入你的 GitHub 用户名：
set /p GH_USER=

git init
git branch -M main
git add index.html styles.css script.js README.md .gitignore assets/
git commit -m "Deploy game design portfolio site"

echo.
echo 请先在 GitHub 创建空仓库：https://github.com/new
echo 仓库名建议：%REPO_NAME%
echo 不要勾选 README / .gitignore
echo.
echo 创建完成后按任意键继续推送...
pause >nul

git remote remove origin 2>nul
git remote add origin https://github.com/%GH_USER%/%REPO_NAME%.git
git push -u origin main

echo.
echo ========================================
echo 推送完成！请在 GitHub 仓库中开启 Pages：
echo Settings - Pages - Source: Deploy from branch
echo Branch: main / (root) - Save
echo.
echo 几分钟后访问：https://%GH_USER%.github.io/%REPO_NAME%/
echo ========================================
pause

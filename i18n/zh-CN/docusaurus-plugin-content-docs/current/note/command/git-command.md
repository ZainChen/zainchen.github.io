# Git 命令

---

### 删除 Git 过滤的文件和文件夹

```bash
# 使用 Git 清除所有未被跟踪的文件和目录
# -f：强制删除（无需确认）
# -x：包括忽略清单中列出的文件和目录
# -d: 包含未被版本控制系统跟踪的目录（注意：此选项会删除包括空目录）
git clean -fxd
```

### 重置分支

```bash
# 切换到旧的分支 dev
git checkout dev

# 将旧的分支 dev 重置成 master
git reset --hard master

# 再推强制送到远程仓库(需要远程仓库开启强制推送权限)
git push origin dev --force
```

### 删除 tag

```bash
# 删除本地 tag
git tag --delete TagName

# 同步到远程仓库
git push origin :TagName
```

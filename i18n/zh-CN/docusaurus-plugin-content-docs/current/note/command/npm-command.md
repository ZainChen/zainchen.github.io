# Npm 命令

---

### 排序 dependencies 和 devDependencies 中的依赖包

在不安装依赖包的情况下，对 `dependencies` 和 `devDependencies` 中的依赖包进行排序

从依赖项中删除或卸载不存在的包即可

```bash
# npm: 这是 Node.js 包管理器（Node Package Manager）的命令
# r: 缩写 remove，表示要移除某个包
# -S: 缩写 --save，表示要将依赖项写入项目的 package.json 文件
# example-package: 要移除的包的名称（随便取一个不存在的包）
npm r -S example-package
```

### nvm 安装新版本 node，并将指定版本 node 的全局依赖包全部迁移

```bash
# 使用 nvm 安装 Node.js 版本 v18.15.0
# 重新安装所有包，并使用之前已经安装的版本 v18.14.2 的依赖关系
nvm install v18.15.0 --reinstall-packages-from=v18.14.2
```

### 查看所有全局依赖包

```bash
# npm ls: 列出当前安装的包及其依赖。
# --global: 查看全局安装的包。
# --depth 0: 只显示第一层级别的包，因为传递给此命令的深度参数为0
npm ls --global --depth 0
```

### 从源码安装 nrm

如果直接用 `npm i nrm -g` 安装，会识别不了当前正在使用的源

```bash
npm i Pana/nrm -g
```

# 开发指南

## 开发/构建/部署

```bash
# 安装依赖
npm i

# 开发
npm run start

# 构建
npm run build

# 部署
# 设置好 github ssh, 可直接用这条命令, 自动构建并 push 到 github 的 gh-pages 分支中触发页面更新
USE_SSH=true npm run deploy
```

### 自动部署配置

项目 main 分支的根目录, 添加下列两个文件:

```bash
# main 分支 push 到 github, 自动触发构建的配置
.github/workflows/deploy.yml

# pull 拉取 main 分支, 自动触发构建的配置
.github/workflows/test-deploy.yml
```

详细说明: https://docusaurus.io/zh-CN/docs/deployment#triggering-deployment-with-github-actions

## 搜索

### 本地搜索

安装依赖包

```bash
npm install --save @easyops-cn/docusaurus-search-local
```

配置 docusaurus.config.js

```ts showLineNumbers
// In your `docusaurus.config.js`:
module.exports = {
  // ... Your other configurations.
  themes: [
    // ... Your other themes.
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        // ... Your options.
        // `hashed` is recommended as long-term-cache of index file is possible.
        hashed: true,
        // For Docs using Chinese, The `language` is recommended to set to:
        // ```
        language: ["en", "zh"],
        // ```
      },
    ],
  ],
};
```

详细配置说明: https://github.com/easyops-cn/docusaurus-search-local

## 国际化

### 配置 docusaurus.config.js

```ts showLineNumbers
module.exports = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh-CN'],
  },

  themeConfig: {
    navbar: {
      // 配置语言切换组件
      items: [
        {
          type: 'localeDropdown',
          position: 'right',
        },
      ],
    },
  },
};
```

### 开发调试指定语言站点:

```bash
# 调试中文站点
npm run start -- --locale zh-CN
```

### 翻译

#### 翻译 Markdown 文件:

##### 翻译文档

将文档 Markdown 文件从 docs/ 复制到 i18n/zh-CN/docusaurus-plugin-content-docs/current，并翻译它们：

```bash
mkdir -p i18n/zh-CN/docusaurus-plugin-content-docs/current
cp -r docs/** i18n/zh-CN/docusaurus-plugin-content-docs/current
```

##### 翻译博客

将文档 Markdown 文件从 docs/ 复制到 i18n/zh-CN/docusaurus-plugin-content-blog，并翻译它们：

```bash
mkdir -p i18n/zh-CN/docusaurus-plugin-content-blog
cp -r blog/** i18n/zh-CN/docusaurus-plugin-content-blog
```

##### 翻译页面

将文档页面文件从 docs/ 复制到 i18n/zh-CN/docusaurus-plugin-content-pages，并翻译它们：

```bash
mkdir -p i18n/zh-CN/docusaurus-plugin-content-pages
cp -r src/pages/**.md i18n/zh-CN/docusaurus-plugin-content-pages
cp -r src/pages/**.mdx i18n/zh-CN/docusaurus-plugin-content-pages
```

##### 翻译内置组件文案

下列命令会自动翻译内置组件文案到 `i18n/zh-CN` 目录中

```bash
npm run write-translations -- --locale zh-CN
```

### 构建站点

#### 单域名部署

构建站点还是用的加入国际化之前一样的命令

```bash
npm run build
```

Docusaurus 将为每个语言版本构建一个单页面应用程序：

- website/build：默认使用的英文语言
- website/build/zh-cn：简体中文语言

### 踩坑记录

如果遇到类似下面的报错, 运行 `npm run write-translations -- --locale zh-CN`, 修改 `i18n/zh-CN` 中的文案, 删除前面这段 `One min read|`

```bash
For locale=zh-CN, a maximum of 1 plural forms are expected (other), but the message contains 2: One min read|1 min read
```

详细说明: https://docusaurus.io/zh-CN/docs/i18n/tutorial#single-domain-deployment

## 页面部署

### 国外

直接用 `github` 部署页面

页面地址: [https://zainchen.github.io/zaindoc](https://zainchen.github.io/zaindoc)
项目地址: [https://github.com/ZainChen/zaindoc](https://github.com/ZainChen/zaindoc)

### 国内

使用 `gitee` 部署页面

页面地址: [https://zainczy.gitee.io/zaindoc](https://zainczy.gitee.io/zaindoc)
项目地址: [https://gitee.com/zainczy/zaindoc](https://gitee.com/zainczy/zaindoc)

## 参考资料

- 官方文档(多语言): https://docusaurus.io
- 触发 GitHub Actions 自动部署: https://docusaurus.io/zh-CN/docs/deployment#triggering-deployment-with-github-actions
- 本地搜索: https://github.com/easyops-cn/docusaurus-search-local
- 国际化: https://docusaurus.io/zh-CN/docs/i18n/tutorial#single-domain-deployment

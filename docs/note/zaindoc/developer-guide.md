# Developer guide

## Development/Build/Deployment

```bash
# Install dependencies
npm i

# Development
npm run start

# Build
npm run build

# Deployment
# If GitHub ssh is set up, you can use this command to automatically build and push it to the gh-pages branch of GitHub to trigger page updates
USE_SSH=true npm run deploy
```

### Automated Deployment Configuration

Add the following two files in the root directory of the project's main branch:

```bash
# Configuration for triggering build automatically when main branch is pushed to GitHub
.github/workflows/deploy.yml

# Configuration for triggering build automatically when main branch is pulled
.github/workflows/test-deploy.yml
```

Detailed Description: https://docusaurus.io/docs/deployment#triggering-deployment-with-github-actions

## Search

### Local Search

Install dependencies package

```bash
npm install --save @easyops-cn/docusaurus-search-local
```

Configure docusaurus.config.js

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

Detailed Configuration Instructions: https://github.com/easyops-cn/docusaurus-search-local

## Internationalization

### Configure docusaurus.config.js

```ts showLineNumbers
module.exports = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh-CN'],
  },

  themeConfig: {
    navbar: {
      // Configure language switching component
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

### Develop and Debug Specified Language Site:

```bash
# Debug the Chinese site
npm run start -- --locale zh-CN
```

### Translation

#### Translate Markdown Files:

##### Translate Documents

Copy the Markdown files from docs/ to i18n/zh-CN/docusaurus-plugin-content-docs/current and translate them as follows:

```bash
mkdir -p i18n/zh-CN/docusaurus-plugin-content-docs/current
cp -r docs/** i18n/zh-CN/docusaurus-plugin-content-docs/current
```

##### Translate Blogs

Copy the Markdown files from docs/ to i18n/zh-CN/docusaurus-plugin-content-blog and translate them as follows:

```bash
mkdir -p i18n/zh-CN/docusaurus-plugin-content-blog
cp -r blog/** i18n/zh-CN/docusaurus-plugin-content-blog
```

##### Translate Pages

Copy the document page files from docs/ to i18n/zh-CN/docusaurus-plugin-content-pages and translate them as follows:

```bash
mkdir -p i18n/zh-CN/docusaurus-plugin-content-pages
cp -r src/pages/**.md i18n/zh-CN/docusaurus-plugin-content-pages
cp -r src/pages/**.mdx i18n/zh-CN/docusaurus-plugin-content-pages
```

##### Translate Built-in Component Copy

The following command automatically translates the built-in component copy to the `i18n/zh-CN` directory:

```bash
npm run write-translations -- --locale zh-CN
```

### Build Site

#### Single-Domain Deployment

The site is built using the same command as before internationalization was added.

```bash
npm run build
```

Docusaurus will build a single-page application for each language version:

- website/build: Default language is English
- website/build/zh-cn: Simplified Chinese language

### Pitfalls

If you encounter an error similar to the following, run `npm run write-translations -- --locale zh-CN`, modify the copy in `i18n/zh-CN`, and delete the `One min read|` prefix:

```bash
For locale=zh-CN, a maximum of 1 plural forms are expected (other), but the message contains 2: One min read|1 min read
```

Detailed Instructions: https://docusaurus.io/docs/i18n/tutorial#single-domain-deployment

## Page Deployment

### Overseas

Directly use `GitHub` to deploy the page

Page URL: [https://zainchen.github.io/zaindoc](https://zainchen.github.io/zaindoc)
Project URL: [https://github.com/ZainChen/zaindoc](https://github.com/ZainChen/zaindoc)

### Domestic

Use `Gitee` to deploy the page

Page URL: [https://zainczy.gitee.io/zaindoc](https://zainczy.gitee.io/zaindoc)
Project URL: [https://gitee.com/zainczy/zaindoc](https://gitee.com/zainczy/zaindoc)

## References

- Official Documentation (Multilingual): https://docusaurus.io
- Triggering GitHub Actions Automatic Deployment: https://docusaurus.io/docs/deployment#triggering-deployment-with-github-actions
- Local Search: https://github.com/easyops-cn/docusaurus-search-local
- Internationalization: https://docusaurus.io/docs/i18n/tutorial#single-domain-deployment

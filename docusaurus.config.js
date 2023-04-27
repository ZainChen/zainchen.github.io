// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github')
const darkCodeTheme = require('prism-react-renderer/themes/dracula')

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'ZainJane',
  tagline: 'ZainJane are cool',
  url: 'https://zainchen.github.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'ZainChen', // Usually your GitHub org/user name.
  projectName: 'zainchen.github.io', // Usually your repo name.
  trailingSlash: false,

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh-CN'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/ZainChen/zainchen.github.io/tree/main',
          editLocalizedFiles: true,
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl: 'https://github.com/ZainChen/zainchen.github.io/tree/main',
          editLocalizedFiles: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        gtag: {
          trackingID: 'G-M0KMJZZJ5P',
          anonymizeIP: true,
        },
      }),
    ],
  ],

  themes: [
    // ... Your other themes.
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      {
        // ... Your options.
        // `hashed` is recommended as long-term-cache of index file is possible.
        hashed: true,
        // For Docs using Chinese, The `language` is recommended to set to:
        // ```
        language: ['en', 'zh'],
        // ```
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      docs: {
        sidebar: {
          hideable: true,
        },
      },
      navbar: {
        title: 'Zain',
        logo: {
          alt: 'Zain Logo',
          src: 'img/logo.jpeg',
        },
        items: [
          { to: 'https://zainjane.com/zaindoc', label: 'Zaindoc', position: 'left' },
          {
            type: 'docSidebar',
            position: 'left',
            sidebarId: 'sidebarIdNote',
            label: 'Note',
          },
          {
            type: 'doc',
            docId: 'doc/intro',
            position: 'left',
            label: 'Doc',
          },
          { to: '/blog', label: 'Blog', position: 'left' },
          { to: '/zain', label: 'Zain', position: 'left' },
          {
            type: 'localeDropdown',
            position: 'right',
          },
          {
            href: 'https://github.com/ZainChen',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Zaindoc',
                to: 'https://zainjane.com/zaindoc',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Twitter',
                href: 'https://twitter.com/ZainChenczy',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/ZainChen',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Zain`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),

  plugins: [
    // async function pluginAlias(context, options) {
    //   return {
    //     name: 'zain-alias-plugin',
    //     configureWebpack() {
    //         return {
    //             resolve: {
    //                 alias: {
    //                   // 模块导入别名，指定后可以在文件之直接 import * from 'src/*';
    //                   // 在 tsconfig.json 中添加 "paths": {"src/*": ["./src/*"]}
    //                   src: path.resolve(__dirname, './src/'),
    //                 },
    //             },
    //         };
    //     },
    //   };
    // },
    // 插件可以直接像上面一样直接写在当前文件, 也可以独立文件编写
    ['./plugin/alias.js', {}],
    ['./plugin/copy.js', {}],
  ],
}

module.exports = config

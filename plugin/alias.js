const path = require('path')

module.exports = async function pluginAlias() {
  return {
    name: 'zain-alias-plugin',
    configureWebpack() {
      return {
        resolve: {
          alias: {
            // 模块导入别名，指定后可以在文件之直接 import * from 'src/*';
            // 在 tsconfig.json 中添加 "paths": {"src/*": ["./src/*"]}
            src: path.resolve(__dirname, '../src/'),
          },
        },
      }
    },
  }
}

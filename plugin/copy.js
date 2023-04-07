const CopyPlugin = require('copy-webpack-plugin')

module.exports = async function pluginCopy() {
  return {
    name: 'zain-copy-plugin',
    configureWebpack() {
      return {
        plugins: [
          new CopyPlugin({
            patterns: [{ from: 'CNAME', to: './' }],
          }),
        ],
      }
    },
  }
}

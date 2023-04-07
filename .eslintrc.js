module.exports = {
  extends: 'eslint-config-zain',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
    createDefaultProgram: true,
  },
  settings: {
    'import/resolver': {
      node: {},
      webpack: {
        // This line can be added or not according to your own configuration
        // config: require.resolve('./configs/webpack.config.eslint.ts'),
      },
      typescript: {},
    },
  },
  rules: {
    'import/no-unresolved': 'off',
    'global-require': 'off',
  },
}

module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: [
    'eslint-config-airbnb',
    'eslint-config-airbnb/hooks',
    'prettier',
    'prettier/react',
  ],
  plugins: ['prettier', 'sort-keys-fix'],
  rules: {
    ...require('./common-rules/base'),
    ...require('./common-rules/react'),
    ...require('./common-rules/prettier')
  }
};

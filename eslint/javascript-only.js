module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: ['eslint-config-airbnb-base', 'prettier'],
  plugins: ['prettier', 'sort-keys-fix'],
  rules: {
    ...require('./common/base'),
    ...require('./common/prettier')
  }
};

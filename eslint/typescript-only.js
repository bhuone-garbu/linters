module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: [
    'eslint-config-airbnb-typescript/base',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'prettier/@typescript-eslint',
  ],
  plugins: ['prettier', 'sort-keys-fix'],
  rules: {
    ...require('./common/base'),
    ...require('./common/prettier'),
    ...require('./common/typescript')
  }
};

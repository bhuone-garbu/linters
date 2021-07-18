module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: [
    'eslint-config-airbnb-typescript',
    'eslint-config-airbnb/hooks',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'prettier/react',
    'prettier/@typescript-eslint',
  ],
  plugins: ['prettier', 'sort-keys-fix'],
  rules: {
    ...require('./common-rules/base'),
    ...require('./common-rules/react'),
    ...require('./common-rules/prettier'),
    ...require('./common-rules/typescript'),
    'react/prop-types': 'off',
    'react/require-default-props': 'off'
  }
};

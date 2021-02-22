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
    ...require('./common/base'),
    ...require('./common/react'),
    ...require('./common/prettier'),
    ...require('./common/typescript'),
    'react/prop-types': 'off',
    'react/require-default-props': 'off'
  }
};

module.exports = {
  'sort-keys-fix/sort-keys-fix': [
    'error',
    'asc',
    {
      caseSensitive: false,
      natural: true,
    },
  ],
  'import/order': [
    'error',
    {
      groups: [['builtin', 'external'], 'parent', 'sibling', 'index'],
      'newlines-between': 'always-and-inside-groups',
    },
  ],
  'import/prefer-default-export': 'off'
};

module.exports = {
  'react/jsx-filename-extension': 'off',
  'react/jsx-props-no-spreading': 'off',
  'react/jsx-sort-default-props': [
    'error',
    {
      ignoreCase: true,
    },
  ],
  'react/jsx-sort-props': [
    'error',
    {
      callbacksLast: false,
      ignoreCase: true,
      noSortAlphabetically: false,
      reservedFirst: false,
      shorthandFirst: false,
      shorthandLast: false,
    },
  ],
  'react/sort-prop-types': [
    'error',
    {
      callbacksLast: false,
      ignoreCase: true,
      requiredFirst: false,
      sortShapeProp: true,
      noSortAlphabetically: false,
    },
  ],
};

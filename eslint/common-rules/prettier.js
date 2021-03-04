const rule = {
  bracketSpacing: true,
  jsxBracketSameLine: false,
  jsxSingleQuote: false,
  printWidth: 100,
  quoteProps: 'as-needed',
  semi: true,
  singleQuote: true,
  trailingComma: 'all',
  useTabs: false,
}

module.exports = {
  'prettier/prettier': ['error', rule]
};
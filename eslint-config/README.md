Extended from Airbnb ESLint config preset and adds Prettier.

Intentionally couples '.prettierrc' rules as eslint error.

For documentation on these rules, visit:

- https://github.com/airbnb/javascript
- https://github.com/airbnb/javascript/tree/master/react


## Installation - first time

```
npx install-peerdeps -D @bhuone/eslint-config
npm install -D @bhuone/eslint-config
```

`install-peerdeps` will install the common required packages for all types of projects.

### For VSCode users - optional

Add the following rules in your editor settings (`.json`):
```
{
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true,
  }
}
```

This seeting ensures code gets autoformatted upon save using eslint rules. Also, it means that special plugins/extensions does not need to be installed on the editor to get the auto format to work upon save, although it is recommended to install the `prettier` plugin.

### Project based


## Usage

Create `.eslintrc.json` or `.eslintrc` at the root of the project and add the extends rule.

### For JavaScript only project

`.eslintrc`

```
{
  "extends": "@bhuone/eslint-config/javascript-only"
}
```

### For TypeScript projects

This also works for TypeScript/JavaScript hybrid projects, especially when migrations to TypeScript is happening.

```
npm install -D typescript eslint-config-airbnb-typescript @typescript-eslint/eslint-plugin
```

`.eslintrc`

```
{
  "extends": "@bhuone/eslint-config/typescript",
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "project": "./tsconfig.json"
  }
}
```

### For React projects

```
npm install -D eslint-plugin-jsx-a11y eslint-plugin-react eslint-plugin-react-hooks
```

`.eslintrc`

```
{
  "extends": "@bhuone/eslint-config/javascript-react"
}
```

### For React/TypeScript projects

```
npm install -D typescript eslint-config-airbnb-typescript @typescript-eslint/eslint-plugin eslint-plugin-jsx-a11y eslint-plugin-react eslint-plugin-react-hooks
```

`.eslintrc`

```
{
  "extends": "@bhuone/eslint-config/typescript-react",
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "project": "./tsconfig.json"
  }
}
```

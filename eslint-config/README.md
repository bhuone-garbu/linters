Extended from Airbnb ESLint config preset but adds Prettier.

For documentation on these rules see:

- https://github.com/airbnb/javascript
- https://github.com/airbnb/javascript/tree/master/react

## Installation

```
npx install-peerdeps -D @bhuone/eslint-config
npm install -D @bhuone/eslint-config
```

`install-peerdeps` will install the common required packages for all types of projects.

## Usage

Create `.eslintrc.json` at the root of the project and add the extends rule.

### For JavaScript only project

`.eslintrc.json`

```
{
  "extends": "@bhuone/eslint-config/javascript-only"
}
```

### For TypeScript only projects

```
npm install -D typescript eslint-config-airbnb-typescript @typescript-eslint/eslint-plugin
```

`.eslintrc.json`

```
{
  "extends": "@bhuone/eslint-config/typescript-only",
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

`.eslintrc.json`

```
{
  "extends": "@bhuone/eslint-config/javascript-react"
}
```

### For React/TypeScript projects

```
npm install -D typescript eslint-config-airbnb-typescript @typescript-eslint/eslint-plugin eslint-plugin-jsx-a11y eslint-plugin-react eslint-plugin-react-hooks
```

`.eslintrc.json`

```
{
  "extends": "@bhuone/eslint-config/typescript-react",
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "project": "./tsconfig.json"
  }
}
```

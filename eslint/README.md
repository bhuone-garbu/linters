Based on eslint settings that I like using.

## Installation

```
npm install -D @bhuone/eslint-config
npx install-peerdeps -D @bhuone/eslint-config
```

## Usage

Create `.eslintrc.json` at the root of the project and add the extends rule.

For JavaScript only project:
```
{
  "extends": "@bhuone/eslint-config/javascript-only"
}
```

For React:
```
{
  "extends": "@bhuone/eslint-config/javascript-react"
}
```

For TypeScript projects, install:

```
npm install -D typescript @typescript-eslint/eslint-plugin
```

Typescript only project:
```
{
  "extends": "@bhuone/eslint-config/typescript-only",
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "project": "./tsconfig.json"
  }
}
```

For React/TypeScript:
```
{
  "extends": "@bhuone/eslint-config/typescript-react",
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "project": "./tsconfig.json"
  }
}
```

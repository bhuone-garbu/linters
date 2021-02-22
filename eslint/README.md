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

For TypeScript projects, install one more package:

```
npm install -D eslint-config-airbnb-typescript
```

Typescript only project:
```
{
  "extends": "@bhuone/eslint-config/typescript-only"
}
```

For React/TypeScript:
```
{
  "extends": "@bhuone/eslint-config/typescript-react"
}
```

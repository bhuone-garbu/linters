Intentionally does not contain `jest` settings as I'd use this for personal project or foundation for building the structure for proper use.

`package.json`:

```
{
    "devDependencies": {
        "eslint-config-myrule": "git@git.example.com:myrepo/eslint-config-myrule.git"
    }
}
```

`.eslintrc.json`:

```
{
    "extends": "myrule"
}
```

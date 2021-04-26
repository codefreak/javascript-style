# Code FREAK JavaScript Style Guide

Our JS/TS style guide is based on Prettier and ESLint.
We use the style from CRA's [default eslint-config](https://github.com/facebook/create-react-app/tree/master/packages/eslint-config-react-app) and default prettier rules with minor modifications.

You will find the prettier config in [`packages/prettier-config`](./packages/prettier-config) and the ESLint rules in [`packages/eslint-config`](packages/eslint-config).

## Installation
The following assumes you are working on a project with TypeScript and React.

### Install and configure Prettier
```shell
npm install -D prettier @codefreak/prettier-config
    
```

Add the following to your `package.json` ([more information](https://prettier.io/docs/en/configuration.html#sharing-configurations)):

```json
"prettier": "@codefreak/prettier-config"
```

### Install and configure ESLint
You will need ESLint + all peer dependencies of `eslint-config-react-app`.
```shell
npm install -D eslint @codefreak/eslint-config babel-eslint @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-config-prettier eslint-config-react-app eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react eslint-plugin-react-hooks
```

Create the file `.eslintrc` with the following content ([more information](https://eslint.org/docs/developer-guide/shareable-configs)):
```json
{
    "extends": "@codefreak"
}
```

## Development
To test out local changes you can use [`npm link`](https://docs.npmjs.com/cli/v7/commands/npm-link) inside `packages/eslint-config` or `packages/prettier-config`.
Afterwards you have to use `npm link @codefreak/eslint-config` or `npm link @codefreak/prettier-config` in a local (test-)project.
This will create a symbolic link in `node_modules/@codefreak/*` so any changes you make to one of the packages will be available right inside your testing environment.

## Publishing a new Release
Make sure you have access rights to our npm organisation and are logged in with `npm login`.
Then you can publish a new version using lerna by typing `npm run publish`.

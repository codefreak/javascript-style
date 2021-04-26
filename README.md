# Code FREAK JavaScript Style Guide

Our JS/TS style guide is based on CRA's [default eslint-config](https://github.com/facebook/create-react-app/tree/master/packages/eslint-config-react-app) and some custom prettier rules.

## Installation
The following assumes you are working on a project with TypeScript and React.

### Install and configure Prettier
```shell
npm install -D \
    prettier \
    @codefreak/prettier-config@^0.1.0 \
    
```

Add the following to your `package.json` ([more information](https://prettier.io/docs/en/configuration.html#sharing-configurations)):

```json
"prettier": "@codefreak/prettier-config"
```

### Install and configure ESLint
```shell
npm install -D \
    eslint \
    @codefreak/eslint-config@^0.1.0 \
    babel-eslint@^10.0.0 \
    @typescript-eslint/eslint-plugin@^4.0.0 \
    @typescript-eslint/parser@^4.0.0 \
    eslint-config-prettier@^8.2.0 \
    eslint-config-react-app@^6.0.0 \
    eslint-plugin-import@^2.22.1 \
    eslint-plugin-jsx-a11y@^6.4.1 \
    eslint-plugin-react@^7.23.2 \
    eslint-plugin-react-hooks@^4.2.0
```

Create the file `.eslintrc` with the following content ([more information](https://eslint.org/docs/developer-guide/shareable-configs)):
```json
{
    "extends": "@codefreak"
}
```

## Development
TODO

## Publishing a new Release
TODO
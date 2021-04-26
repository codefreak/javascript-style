const baseConfig = require('eslint-config-react-app')

const baseRules = Object.keys(baseConfig.rules)
  // remove all rules for flow
  .filter(ruleKey => !ruleKey.startsWith('flowtype/'))
  // create a new object based on all enabled rules
  .reduce(
    (enabledRules, ruleKey) => ({
      ...enabledRules,
      [ruleKey]: baseConfig.rules[ruleKey]
    }),
    {}
  )

/**
 * This eslint config is based on CRA's default rules.
 * We removed the flowtype plugin as we are mostly using TypeScript.
 * The prettier config disables all formatting rules of eslint.
 */
module.exports = {
  ...baseConfig,
  plugins: baseConfig.plugins.filter(plugin => plugin !== 'flowtype'),
  extends: [
    ...baseConfig.extends,
    'plugin:@typescript-eslint/recommended',
    'prettier'
  ],
  rules: {
    ...baseRules,
    'no-console': ['error', { allow: ['warn', 'error'] }],
    'react/jsx-boolean-value': ['warn', 'never'],
    'react/jsx-curly-brace-presence': [
      'warn',
      { props: 'never', children: 'never' }
    ]
  }
}

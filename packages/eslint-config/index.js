const baseConfig = require('eslint-config-react-app')

/**
 * This eslint config is based on CRA's default rules.
 * We removed the flowtype plugin as we are mostly using TypeScript.
 * The prettier config disables all formatting rules of eslint.
 */
module.exports = {
  ...baseConfig,
  plugins: baseConfig.plugins.filter((plugin) => plugin !== "flowtype"),
  extends: [...baseConfig.extends, 'prettier'],
  rules: Object.keys(baseConfig.rules)
      // remove all rules for flow
      .filter(ruleKey => !ruleKey.startsWith("flowtype/"))
      // create a new object based on all enabled rules
      .reduce((enabledRules, ruleKey) => ({
        ...enabledRules,
        [ruleKey]: baseConfig.rules[ruleKey]
      }), {})
}

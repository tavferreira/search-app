export default {
  extends: ['stylelint-config-standard', 'stylelint-config-recess-order'],
  customSyntax: 'postcss-styled-syntax',
  rules: {
    'block-no-empty': null,
  },
  ignoreFiles: ['node_modules/**/*', 'dist/**/*'],
}

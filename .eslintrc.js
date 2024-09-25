module.exports = {
  root: true,
  env: {
    'react-native/react-native': true,
  },
  parser: '@typescript-eslint/parser',
  extends: ['@react-native', 'eslint:recommended', 'prettier'],
  rules: {
    'react/no-multi-comp': 'off',
    'react/display-name': 'off',
    'no-unused-vars': 'off',
    'no-undef': 'off',
    'react/prop-types': 'off',
    'react-hooks/exhaustive-deps': 'warn',
    'react-hooks/rules-of-hooks': 'error',
    'react-native/no-inline-styles': 'off',
  },
};

module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  settings: {
    "react": {
      "version": "detect",
    },
    'import/resolver': {
      node: {
        paths: ['src'],
        extensions: [
          '.js',
          '.ts',
          '.jsx',
          '.tsx',
        ],
      },
    },
  },
  extends: ['plugin:react/recommended', 'plugin:storybook/recommended'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  rules: {
    // note you must disable the base rule as it can report incorrect errors
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error'],
    'react/jsx-filename-extension': [1, { extensions: ['.tsx', '.jsx'] }],
    'react/jsx-props-no-spreading': 0,
    'import/extensions': 0,
    'react/function-component-definition': 'off',
    'no-unused-vars': 'warn',
  },
};
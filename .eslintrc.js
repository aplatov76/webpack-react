module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true
  },
  extends: ['plugin:react/recommended', 'standard-with-typescript', 'plugin:storybook/recommended'],
  overrides: [
    {
      files: ['**/src/**/*.{test,stories}.{ts, tsx}'],
      rules: {
        'i18next/no-literal-string': 'off',
        'max-len': 'off'
      }
    }
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    parser: '@typescript-eslint/parser',
    project: 'tsconfig.json'
  },
  plugins: ['react', 'react-hooks'],
  ignorePatterns: ['**/config/*', '**/webpack.config.ts'],
  rules: {
    'max-len': [
      'error',
      {
        ignoreComments: true,
        code: 120
      }
    ],
    'react/jsx-indent': [2, 2],
    'import/no-unresolved': 'off',
    'import/prefer-default-export': 'off',
    'no-unused-vars': 'warn',
    'react/react-in-jsx-scope': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-floating-promises': 'off',
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {
        varsIgnorePattern: '_'
      }
    ],
    '@typescript-eslint/space-before-function-parent': 'off',
    '@typescript-eslint/strict-boolean-expressions': 'off',
    '@typescript-eslint/prefer-nullish-coalescing': 'off',
    '@typescript-eslint/space-before-function-paren': 'off',
    '@typescript-eslint/consistent-type-assertions': 'off',
    '@typescript-eslint/no-confusing-void-expression': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/prop-types': 'off',
    'eslint-disable react/display-name': 'off',
    'eslint-disable no-unused-vars': 'off',
    '@typescript-eslint/promise-function-async': 'off',
    '@typescript-eslint/consistent-type-definitions': 'off'
  }
}

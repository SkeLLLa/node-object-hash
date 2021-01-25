module.exports = {
  env: {
    es6: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'google',
    'prettier',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.eslint.json',
    sourceType: 'module',
  },
  plugins: ['prettier', 'sort-requires', '@typescript-eslint'],
  rules: {
    'prettier/prettier': 'error',
    '@typescript-eslint/no-namespace': 'off',
    'valid-jsdoc': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/ban-types': 'off',
    'no-invalid-this': 'off',
  },
  overrides: [
    {
      files: ['**/__tests__/**/*', '**/test/**/*'],
      env: {
        jest: true,
      },
      rules: {
        'require-jsdoc': 'off',
        'no-new-wrappers': 'off',
      },
    },
  ],
  settings: {},
};

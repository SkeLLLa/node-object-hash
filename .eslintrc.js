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
    project: 'tsconfig.json',
    sourceType: 'module',
  },
  plugins: ['prettier', 'sort-requires', '@typescript-eslint'],
  rules: {
    'prettier/prettier': 'error',
    'arrow-body-style': 'off',
    'global-require': 'off',
    'no-console': 'warn',
    'spaced-comment': ['error', 'always', { markers: ['/'] }],
    'no-param-reassign': ['error', { props: false }],
    'valid-jsdoc': 'off',
    'require-jsdoc': 'off',
    'sort-requires/sort-requires': 'error',
    'object-shorthand': 'error',
    'eqeqeq': 'error',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/camelcase': 'off',
    '@typescript-eslint/no-namespace': 'off',
  },
  overrides: [
    {
      files: ['**/__tests__/**/*', '**/test/**/*'],
      env: {
        jest: true,
      },
      parserOptions: {
        project: '.eslint.tsconfig.json',
        sourceType: 'module',
      },
    },
  ],
  settings: {},
};

module.exports = {
  root: true,
  env: {
    browser: true,
    es2020: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    '@typescript-eslint/consistent-type-imports': [
      'error',
      { prefer: 'type-imports', fixStyle: 'inline-type-imports' },
    ],
  },
  overrides: [
    {
      files: ['*.graphql'],
      extends: 'plugin:@graphql-eslint/operations-all',
      parserOptions: {
        project: './tsconfig.json',
        operations: ['./src/**/*.graphql'],
        schema: './api/schema.docs.graphql',
      },
      rules: {
        '@graphql-eslint/match-document-filename': 'off',
        '@graphql-eslint/alphabetize': 'off',
        '@graphql-eslint/no-deprecated': 'warn',
      },
    },
  ],
};

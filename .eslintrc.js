module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
    'jest/globals': true
  },
  extends: [
    'airbnb',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:prettier/recommended',
    'prettier',
    'prettier/@typescript-eslint'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
    '__DEV__': true
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    sourceType: 'module',
    ecmaVersion: 2019
  },
  plugins: [
    '@typescript-eslint',
    'jest',
    'prettier',
    'prefer-arrow'
  ],
  root: true,
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', 'jsx', '.ts', '.tsx']
      }
    }
  },
  rules: {
    // eslint official
    'newline-before-return': 'error',
    'no-console': 'warn',
    'require-yield': 'error',

    // @typescript-eslint
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-member-accessibility': 'off',
    indent: 'off',
    '@typescript-eslint/indent': 'off',
    '@typescript-eslint/no-unnecessary-type-assertion': 'error',

    // prefer-arrow
    'prefer-arrow/prefer-arrow-functions': [
      'error',
      {
        disallowPrototype: true,
        singleReturnOnly: true,
        classPropertiesAllowed: false
      }
    ],

    // import
    'import/extensions': [
      'error',
      'always',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never'
      }
    ],
    'import/prefer-default-export': 'off',

    // prettier
    'prettier/prettier': [
      'error', {
        bracketSpacing: true,
        printWidth: 80,
        semi: true,
        singleQuote: true,
        trailingComma: 'all',
        useTabs: false
      }
    ]
  }
};

module.exports = {
  root: true,
  env: {
    browser: true,
  },
  extends: [
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
    'prettier',
    'plugin:@typescript-eslint/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
  },
  rules: {
    // ---------------------------------------
    // Dropdown click away listener 만들면서 off
    'jsx-a11y/no-static-element-interactions': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    // ---------------------------------------
    'no-console': [
      'off',
      {
        allow: ['error'],
      },
    ],
    'import/prefer-default-export': 'off',
    'import/no-extraneous-dependencies': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': [
      'warn',
      {
        additionalHooks: 'useRecoilCallback',
      },
    ],
    'react/jsx-props-no-spreading': 'off',
    'react/prop-types': 'off',
    // only use arrow-function component
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/function-component-definition.md
    'react/function-component-definition': [
      2,
      {
        namedComponents: 'arrow-function',
      },
    ],
    'react/react-in-jsx-scope': 'off',
    'react/require-default-props': 'off',
    'react/jsx-no-constructed-context-values': 'off',
    'react/no-unknown-property': ['error', { ignore: ['css'] }],
    'react/button-has-type': 'off',
    'no-await-in-loop': 'off',
    'no-continue': 'off',
    'no-restricted-syntax': ['off', 'ForOfStatement'],
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal', 'index'],
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
        'newlines-between': 'always',
      },
    ],
  },
  overrides: [
    {
      files: ['packages/playground-react/**/*.ts?(x)'],
      settings: {
        'import/resolver': {
          typescript: {
            project: './packages/playground-react/tsconfig.json',
          },
        },
      },
    },
    {
      files: ['packages/primitives/**/*.ts?(x)'],
      settings: {
        'import/resolver': {
          typescript: {
            project: './packages/primitives/tsconfig.json',
          },
        },
      },
    },
    {
      files: ['packages/react/**/*.ts?(x)'],
      settings: {
        'import/resolver': {
          typescript: {
            project: './packages/react/tsconfig.json',
          },
        },
      },
    },
  ],
};

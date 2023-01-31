module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'prettier',
    'prettier/react',
    'standard-with-typescript',
  ],
  overrides: [],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'prettier/prettier': 'error',
    'react/jsx-filename-extension': [
      'warn',
      { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
    ],
    'import/prefer-default-export': 'off',
    'jsx-quotes': ['error', 'prefer-single'],
  },
};

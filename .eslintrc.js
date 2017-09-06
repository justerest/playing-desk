// http://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
    node: true,
    es6: true
  },
  extends: 'eslint:recommended',
  plugins: ['html'],
  settings: {
    'import/resolver': {
      'webpack': {
        'config': 'build/webpack.base.conf.js'
      }
    }
  },
  rules: {
    'no-console': [
      'warn', {
        allow: ["warn", "error"]
      }
    ],
    'semi': 'error',
    'no-unused-vars': [
      'warn', {
        "argsIgnorePattern": "^h$"
      }
    ],
    'no-empty': 'off',
    'comma-dangle': ["warn", "never"]
  }
};

module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['airbnb-base'],
  parserOptions: {
    ecmaVersion: 12,
  },
  rules: {},
  plugins: ['sonarjs'],
  extends: ['plugin:sonarjs/recommended'],
};

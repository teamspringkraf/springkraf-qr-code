module.exports = {
  env: {
    node: true
  },
  parser:  '@typescript-eslint/parser',
  extends: [
    "eslint:recommended",
    "plugin:prettier/recommended",
    "plugin:jest/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/eslint-recommended"
  ],
  parserOptions: {
    sourceType: "module"
  },
  rules: {
    "prettier/prettier": [
      "error",
      {
        endOfLine: 'auto'
      }
    ]
  }
};

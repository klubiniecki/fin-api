export default {
  parser: "@typescript-eslint/parser",
  extends: ["plugin:prettier/recommended"],
  parserOptions: {
    ecmaVersion: 11,
    sourceType: "module",
  },
  rules: {
    arrowParens: "as-needed",
  },
};

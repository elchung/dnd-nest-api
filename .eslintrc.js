module.exports = {
  parser: "@typescript-eslint/parser",
  plugins: [
    "@typescript-eslint",
    "sort-imports-es6-autofix",
  ],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
  ],
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  rules: {
    "react/prop-types": "off",
    "max-len": [1, 120, 2],
    "sort-imports": "error",
    "quotes": ["error", "double"],
    "no-trailing-spaces": "error",
    "@typescript-eslint/no-var-requires": "off",
    "sort-imports-es6-autofix/sort-imports-es6": [2, {
      "ignoreCase": false,
      "ignoreMemberSort": false,
      "memberSyntaxSortOrder": ["none", "all", "multiple", "single"]
    }]
  },
};

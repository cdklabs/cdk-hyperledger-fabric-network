module.exports = {
  "env": {
    "browser": false,
    "commonjs": false,
    "es2021": true,
  },
  "extends": "airbnb",
  "parserOptions": {
    "ecmaVersion": 13,
  },
  "rules": {
    "max-len": ["error", {
      "code": 120,
    }],
    "no-console": "off",
  },
};

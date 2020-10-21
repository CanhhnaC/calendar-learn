module.exports = {
  env: {
    // eslint-disable-next-line linebreak-style

    browser: true,
    es2021: true,
  },
  quotes: [2, "single"],

  extends: ["google"],

  parserOptions: {
    ecmaVersion: 12,

    sourceType: "module",
  },

  rules: {
    // windows linebreaks when not in production environment

    "linebreak-style": ["none"],
  },
};

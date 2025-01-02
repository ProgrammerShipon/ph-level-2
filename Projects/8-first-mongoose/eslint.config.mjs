import pluginJs from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";

/** @type {import('eslint').Linter.Config[]} */
export default [
  { ignores: [".node_modules/*"] },
  { files: ["**/*.{js,mjs,cjs,ts}"] },
  {
    languageOptions: { globals: globals.browser },
  },
  {
    rules: {
      eqeqeq: "off",
      "no-unused-vars": "error",
      "prefer-const": ["error", { ignoreReadBeforeAssign: true }],
    },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
];

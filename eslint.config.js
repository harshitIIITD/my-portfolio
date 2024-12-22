import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    languageOptions: {
      globals: {
        ...globals.browser,
        React: true,
      },
      parserOptions: {
        ecmaVersion: 2022,
        sourceType: "module",
        ecmaFeatures: {
          jsx: true
        }
      },
    },
    settings: {
      react: {
        version: "detect"
      }
    },
    plugins: {
      react: pluginReact,
    },
    rules: {
      ...tseslint.configs.recommendedTypeChecked.rules,
      ...pluginReact.configs.recommended.rules,
      "react/react-in-jsx-scope": "off",
      "react/jsx-uses-react": "off",
    }
  }
];
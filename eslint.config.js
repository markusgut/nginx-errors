import { defineConfig } from "eslint/config";
import html from "@html-eslint/eslint-plugin";
import js from "@eslint/js";
//import css from "@eslint/css"

export default defineConfig([
  {
    files: ["**/*.ejs"],
    plugins: {
      html,
    },
    extends: ["html/all"],
    language: "html/html",
    languageOptions: {
      templateEngineSyntax: {
        "<!--#": "-->",
        "<%": "%>",
      }
    },
    rules: {
      "html/indent": ["error", 2],
      "html/use-baseline": ["warn", { "available": 2015 }],
      "html/require-meta-description": "off",
      "html/require-open-graph-protocol": "off",
      "html/attrs-newline": ["warn", {
        "closeStyle": "newline",
        "ifAttrsMoreThan": 3,
        "skip": ["pre", "code"],
        "inline": ["$inline"],
      }],
    }
  },
  {
    files: ["**/*.js"],
    languageOptions: {
      globals: {
        "window": true,
        "document": true,
      },
    },
    plugins: {
      js
    },
    extends: ["js/recommended"],
    ignores: ["dist/**"],
  },
  // The CSS plugin does not yet support SCSS syntax
  // and maybe never will. See:
  // https://github.com/eslint/css/issues/90
  //{
  //  files: ["**/*.scss"],
  //  plugins: {
  //    css
  //  },
  //  extends: ["css/recommended"],
  //  language: "css/css",
  //  languageOptions: {
  //    parser: css.parser,
  //    parserOptions: {
  //      cssSyntax: "scss",
  //    },
  //  },
  //}
 ]);


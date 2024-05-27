import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReactConfig from "eslint-plugin-react/configs/recommended.js";
import { fixupConfigRules } from "@eslint/compat";

export default [
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...fixupConfigRules(pluginReactConfig),
  {
    // Правило форматирования кода
    "indent": ["error", 2], // Настройка отступов
    "react/jsx-first-prop-new-line": ["error", "multiline"], // Новое свойство на новой строке
    // Другие правила для красивого кода
    "linebreak-style": ["error", "unix"], // Стиль разрыва строк
    "quotes": ["error", "double"], // Использование двойных кавычек для строк
    "semi": ["error", "always"], // Точка с запятой в конце выражений
    "no-trailing-spaces": "error" // Запрет лишних пробелов в конце строк
  }
];

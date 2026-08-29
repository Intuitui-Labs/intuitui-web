import js from '@eslint/js';

/** @type {import("eslint").Linter.Config[]} */
export default [
  {
    ignores: ['dist/**', 'node_modules/**', '.astro/**', '.turbo/**', '**/*.ts', '**/*.astro'],
  },
  {
    files: ['**/*.mjs'],
    languageOptions: {
      globals: {
        URL: 'readonly',
      },
    },
  },
  js.configs.recommended,
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
    },
  },
];

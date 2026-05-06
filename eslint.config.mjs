import { createConfig } from '@krislintigo/eslint-config'
import vue from 'eslint-plugin-vue'
import vueParser from 'vue-eslint-parser'

export default createConfig({
  ignores: ['**/dist/**', '**/node_modules/**', '**/.nuxt/**', '**/.output/**'],
  files: ['**/*.{ts,vue}'],
  globals: 'mixed',
  extraExtends: [...vue.configs['flat/recommended']],
  extraRules: {
    'vue/multi-word-component-names': 'off', // Disable for pages
    '@typescript-eslint/no-explicit-any': 'warn',
  },
  extraConfigs: [
    // Enable Vue parser for .vue files
    {
      files: ['**/*.vue'],
      languageOptions: {
        parser: vueParser,
        parserOptions: {
          extraFileExtensions: ['.vue'],
        },
      },
    },
    // Enable 2+ words component naming for app components
    {
      files: ['client/app/components/**/*.vue'],
      rules: {
        'vue/multi-word-component-names': 'error',
      },
    },
  ],
})

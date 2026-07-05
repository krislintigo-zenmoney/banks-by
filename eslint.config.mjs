import { createConfig, createTypeScriptImportResolver } from '@krislintigo/eslint-config'
import vue from '@krislintigo/eslint-config-vue'

export default createConfig({
  environments: [{ files: ['**/*.{ts,vue}'], env: 'browser' }],
  ignores: ['**/dist/**', '**/node_modules/**', '**/.nuxt/**', '**/.output/**'],
  presets: ['vue'],
  extraExtends: [...vue.plugin],
  extraRules: {
    ...vue.rules,

    '@typescript-eslint/no-unsafe-type-assertion': 'off',
  },
  extraConfigs: [
    //
    // SETTINGS
    //

    // Resolve Nuxt aliases for client imports.
    {
      files: ['**/*.{ts,vue}'],
      settings: {
        'import-x/resolver-next': [
          createTypeScriptImportResolver({
            alwaysTryTypes: true,
            project: './.nuxt/tsconfig.app.json',
          }),
        ],
      },
    },
    // Enable Vue parser for .vue files
    {
      files: ['**/*.vue'],
      languageOptions: {
        parser: vue.parser.vue,
        parserOptions: {
          parser: vue.parser.ts,
          extraFileExtensions: ['.vue'],
        },
        globals: vue.globals.nuxt,
      },
    },

    //
    // RULES
    //

    // PascalCase for Vue components
    {
      files: ['app/components/**/*.vue'],
      rules: {
        'unicorn/filename-case': ['error', { case: 'pascalCase', checkDirectories: false }],
      },
    },
    // Disable 2+ words component naming for page and layout components
    {
      files: ['app/{pages,layouts}/**/*.vue'],
      rules: {
        'vue/multi-word-component-names': 'off',
        'unicorn/filename-case': 'off', // TODO: come up with a better solution
      },
    },
    // Disable default export restrictions for files where this syntax is required
    {
      files: [
        'app/middleware/**',
        'app/plugins/**',
        'app/app.config.ts',
        'tailwind.config.ts',
        'nuxt.config.ts',
      ],
      rules: {
        'import-x/no-anonymous-default-export': 'off',
        'import-x/no-default-export': 'off',
      },
    },
  ],
})

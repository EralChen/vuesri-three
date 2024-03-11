const { defineConfig } = require('eslint-define-config')

module.exports = defineConfig({
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
    ecmaFeatures: {
      'jsx': true,
    },
  },
  plugins: [
    '@typescript-eslint',
    'import',
  ],
  extends: [
    // 'plugin:vue/vue3-essential',
    'plugin:vue/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  rules: {
    // https://eslint.org/docs/rules/ for js
    'no-console': 'warn',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    'quotes': ['error', 'single', { avoidEscape: true, 'allowTemplateLiterals': true }],
    'comma-dangle': ['error', 'always-multiline'], // multiline object ,
    'indent': ['error', 2],
    'space-before-function-paren': ['error', {
      'anonymous': 'always',
      'named': 'always',
      'asyncArrow': 'always',
    }],
    'keyword-spacing': ['error',{
      'before': true,
      'after': true,
    }],
    'space-infix-ops': ['error', { 'int32Hint': false }],
    // eqeqeq: ['error', 'smart'],
    semi: ['error', 'never'],
    'no-whitespace-before-property': 'error',
    'key-spacing': ['error', { 'afterColon': true }],
    '@typescript-eslint/no-var-requires': 'off',
    // for ts
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/func-call-spacing': ['error', 'never'],
    '@typescript-eslint/ban-ts-comment': 'off',
    // for vue
    'vue/multi-word-component-names': 'off',
    'vue/prefer-import-from-vue': 'off',
    'vue/html-self-closing': 'off',
    'vue/no-v-model-argument': 'off',
    'vue/no-v-for-template-key': 'off',
    'vue/no-multiple-template-root': 'off',

    // for import
    'import/no-duplicates': 'error', // 禁止重复 import 同一模块
   
  },
})

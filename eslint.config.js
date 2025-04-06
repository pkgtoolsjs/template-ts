import eslint from '@eslint/js'
import tseslint from 'typescript-eslint'
import eslintConfigPrettier from 'eslint-config-prettier'

export default tseslint.config(
  {
    name: 'app/files-to-lint',
    files: ['**/*.{ts,tsx,mts,cts}']
  },

  {
    name: 'app/files-to-ignore',
    ignores: ['**/dist/**', 'scripts/**', '*.config*']
  },

  eslint.configs.recommended,
  tseslint.configs.recommendedTypeChecked,
  tseslint.configs.stylisticTypeChecked,

  {
    name: 'app/parser',
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname
      }
    }
  },
  eslintConfigPrettier,

  {
    name: 'app/global-rules',
    files: ['**/*.{ts,tsx,mts,cts}'],
    rules: {
      'no-undef': 'off',
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': 'warn',
      'require-atomic-updates': 'off',
      'no-async-promise-executor': 'off'
    }
  }
)

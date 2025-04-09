import { globSync } from 'node:fs'
import { defineConfig } from 'tsup'
import { fixImportsPlugin } from 'esbuild-fix-imports-plugin'

const entry = globSync('src/**/*.ts')

export default defineConfig({
  tsconfig: 'tsconfig.build.json',
  entry,
  target: 'node16',
  platform: 'node',
  format: ['esm'],
  dts: true,
  bundle: false,
  splitting: false,
  sourcemap: false,
  clean: true,

  esbuildPlugins: [fixImportsPlugin()]
})

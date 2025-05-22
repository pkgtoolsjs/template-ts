import { globSync } from 'node:fs'
import { defineConfig } from 'tsdown'

const entry = globSync('src/**/*.ts')

export default defineConfig({
  tsconfig: 'tsconfig.build.json',
  entry,
  target: 'node18',
  dts: true,
  unbundle: true,
  sourcemap: false
})

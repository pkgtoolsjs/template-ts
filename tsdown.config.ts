import { globSync } from 'node:fs'
import { defineConfig } from 'tsdown'

const entry = globSync('src/**/*.ts', {
  exclude: ['src/**/__tests__/*']
})

export default defineConfig({
  tsconfig: 'tsconfig.build.json',
  entry,
  target: 'node18',
  dts: true,
  unbundle: true,
  sourcemap: false
})

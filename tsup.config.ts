import { globSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'tsup'

const entry = Object.fromEntries(
  globSync('src/**/*.ts').map((file) => [
    path.relative(
      'src',
      file.slice(0, file.length - path.extname(file).length)
    ),
    fileURLToPath(new URL(file, import.meta.url))
  ])
)

console.log(entry)

export default defineConfig({
  tsconfig: './tsconfig.build.json',
  entry,
  target: 'node22',
  platform: 'node',
  format: ['esm'],
  dts: true,
  bundle: false,
  splitting: false,
  sourcemap: false,
  clean: true
})

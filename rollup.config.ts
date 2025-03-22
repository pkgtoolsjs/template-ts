import path from 'node:path'
import { globSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import pkg from './package.json' with { type: 'json' }
import type { RollupOptions } from 'rollup'
import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'
import json from '@rollup/plugin-json'
import typescript from 'rollup-plugin-typescript2'
import del from 'rollup-plugin-delete'

const env = {
  production: process.env.BUILD === 'production',
  includeDeps: process.env.INCLUDE_DEPS === 'true'
}

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const getAbsolutePath = (...args: string[]) => path.resolve(__dirname, ...args)

const rootDir = path.resolve(process.cwd())
const distDir = getAbsolutePath(rootDir, 'dist')

const ts = () =>
  typescript({
    check: env.production,
    tsconfig: getAbsolutePath(rootDir, 'tsconfig.build.json'),
    tsconfigOverride: {
      compilerOptions: {
        declarationMap: !env.production
      }
    }
  })

const config: RollupOptions = {
  input: Object.fromEntries(
    globSync('src/**/*.ts').map((file) => [
      path.relative(
        'src',
        file.slice(0, file.length - path.extname(file).length)
      ),
      fileURLToPath(new URL(file, import.meta.url))
    ])
  ),
  output: { format: 'es', dir: distDir, sourcemap: 'inline' },
  external: env.includeDeps ? [] : Object.keys(pkg.dependencies),
  plugins: [
    commonjs({ transformMixedEsModules: true }),
    resolve(),
    json({ namedExports: false }),
    ts(),
    del({ targets: 'dist/*' })
  ]
}

export default config

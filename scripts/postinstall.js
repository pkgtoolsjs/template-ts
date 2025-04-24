import { $ } from 'execa'
import isCI from 'is-ci'
import { existsSync } from 'node:fs'

const isProd = process.env.NODE_ENV === 'production'

if (isProd || isCI) process.exit()

if (existsSync('.git')) {
  await $({ stdout: process.stdout })`simple-git-hooks`
}

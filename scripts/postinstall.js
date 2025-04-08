const isProd = process.env.NODE_ENV === 'production'

if (isProd) process.exit()

try {
  const isCI = (await import('is-ci')).default

  if (isCI) process.exit()

  const { execa } = await import('execa')

  await execa('simple-git-hooks', { stdout: process.stdout })
} catch (error) {
  console.error(error)
}

# template-ts [![CI](https://github.com/nice-winter/template-ts/actions/workflows/ci.yml/badge.svg)](https://github.com/nice-winter/template-ts/actions/workflows/ci.yml)

A Node.js template with TypeScript and ES Module support. It is designed for quickly initializing an empty TypeScript project, with pre-configured support for ESLint for code linting, Rollup for JavaScript bundling, and VSCode debugging.

Projects initialized with this template are recommended to be developed in VSCode.

## Features

- ✅ ES Module support.
- 🩹 Linting and formatting with Git hooks.
- 📝 Automatically watches for file changes and restarts.
- 🐞 VS Code debugging support.
- 📦 Bundles JavaScript using Rollup.
- 🚀 CI/CD integration.

## Environment Requirements

- **Node.js**: Requires version **22.0.0** or higher.

## Usage

### Initialization

Click the `Use this template` button at the top-right and set a name for the new repository,

or directly clone this repository to your local machine:

```bash
# Use the `degit` command to clone the template repository to your local machine.
npx degit nice-winter/template-ts my-project

# Enter the project directory and install dependencies.
cd my-project
npm i

# Start and watch for file changes.
npm run dev
```

### Develop and build

Start and watch for file changes:

```bash
npm run dev
```

Linting & Formatting:

```bash
# lint
npm run lint

# lint and fix
npm run lint:fix

# format
npm run format
```

Build to JavaScript:

```bash
# build for production
npm run build

# build for developement
npm run build:dev
```

The JavaScript files will output to `dist` .

### CI/CD

You need to add your `NPM_TOKEN` to the secrets in the repository settings.

Set `private: true` to `false` in `package.json`:

```diff
{
  "name": "@nice-winter/template-ts",
  "description": "...",
  "version": "1.0.0",
-  "private": true,
+  "private": false,
  // ...Other keys...
}
```

And configure the appropriate `repository.url`:

```diff
{
  "author": "...",
  "repository": {
-   "url": "git+https://github.com/nice-winter/template-ts.git"
+   "url": "git+https://github.com/yourname/your-repository.git"
  },
  "license": "MIT",
  "dependencies": {},
  // ...Other keys...
}
```

Only then will the "Publish package" workflow be triggered. Otherwise, it will not be published to NPM.

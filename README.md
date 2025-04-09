# template-ts [![CI](https://github.com/nice-winter/template-ts/actions/workflows/ci.yml/badge.svg)](https://github.com/nice-winter/template-ts/actions/workflows/ci.yml)

A Node.js template with TypeScript and ES Module support. It is designed for quickly initializing an empty TypeScript project, with pre-configured support for OXLint for code linting, tsup for JavaScript bundling, and VSCode debugging.

It also comes with pre-configured CI/CD workflows based on GitHub Actions, making it suitable for rapid library development or quick prototyping, without the need to set everything up from scratch.

Projects initialized with this template are recommended to be developed in VSCode.

## Features

- ✅ ES Module support.
- 🩹 Linting and formatting with Git hooks.
- 📝 Automatically watches for file changes and restarts.
- 🐞 VS Code debugging support.
- 📦 Bundles JavaScript using [tsup](https://tsup.egoist.dev/).
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

# format
npm run format
```

Bundling to JavaScript:

```bash
# build for production
npm run build
```

The JavaScript files will output to `dist` .

### CI/CD

This template comes with the following pre-configured workflows:

- **ci**: Triggered on any push or when a PR is opened to the `main` branch.
  It runs a series of unit tests and builds the project.

- **release**: Triggered when a tag is pushed with the format `v*`.
  It automatically creates a release in the repository and applies the corresponding tag.

- **publish**: Triggered when a tag is pushed with the format `v*`.
  It runs unit tests and builds the project before publishing it to NPM.

**However, you need to adjust the following configurations for publish to work properly.**

1.You need to add your `NPM_TOKEN` to the secrets in the repository settings.

2.To prevent accidental publishing, the template project's package.json has private set to true by default. To publish your package, you must change `private` from true to `false` in package.json:

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

3.Update the `repository.url` field in package.json to **your repository URL**:

⚠️ **Note:** The publish workflow enables [Generating provenance statements](https://docs.npmjs.com/generating-provenance-statements) by default when publishing to NPM. You need to update the `repository.url` field in package.json to your own repository URL, otherwise, it will cause an error.

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

## License

[MIT License](LICENSE)

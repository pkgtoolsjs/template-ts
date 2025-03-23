# template-ts

A Node.js template with TypeScript and ES Module support. It is designed for quickly initializing an empty TypeScript project, with pre-configured support for ESLint for code linting, Rollup for JavaScript bundling, and VSCode debugging.

Projects initialized with this template are recommended to be developed in VSCode.

## Features

- ✅ ES Module support.
- ✏️ Linter and formatter with Git hooks.
- 📝 Watch for file changes and restart automatically.
- 🐞 VS Code debugging support.
- 📦 Build to JavaScript using Rollup.

## Environment Requirements

- **Node.js**: Requires version **22.0.0** or higher.

## Usage

### Initialization

Click the `Use this template` button at the top-right and set a name for the new repository,

or directly clone this repository to your local machine:

```bash
# Use the `degit` command to clone the template repository to your local machine.
npx degit babyw1nter/template-ts my-project

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

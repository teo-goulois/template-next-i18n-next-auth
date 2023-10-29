# Next.js 14 Boilerplate with Next-Intl

## Table of Contents

- [Overview](#overview)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Development Server](#running-the-development-server)
- [Adding a New Language](#adding-a-new-language)
- [Building for Production](#building-for-production)
- [Warnings](#warnings)
- [Documentation Links](#documentation-links)
- [Contributing](#contributing)
- [License](#license)

## Overview

This is a boilerplate project for Next.js 14 with Next-Intl for internationalization support. It is designed to provide a quick starting point for developers building React-based web applications with a focus on multiple languages.

## Prerequisites

- Node.js v18 or above
- npm v7 or above

## Installation

### Step 1: Clone the Repository

```bash
git clone https://github.com/teo-goulois/template-next-14-i18n.git
```

### Step 2: Navigate to Project Directory

```bash
cd template-next-14-i18n
```

### Step 3: Install Dependencies

```bash
npm install
```

## Running the Development Server

To start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your web browser to see the application.

## Adding a New Language

1. **Create a New JSON File:** Under the `messages` directory, create a new JSON file, e.g., `fr.json` for French.
2. **Add Translations:** Populate this JSON file with your translations.

## Building for Production

To create an optimized production build:

```bash
npm run build
```

To run the production build:

```bash
npm start
```

## Warnings

### Turbo Mode Incompatibility

Please note that running the development server with the `--turbo` flag is not recommended due to the use of the `src` folder and middleware. The `--turbo` flag can result in unexpected behavior in this setup.

```bash
# Don't run the development server like this
npm run dev -- --turbo
```

## Documentation Links

- [Next.js 14 Documentation](https://nextjs.org/docs)
- [Next-Intl Documentation](https://github.com/amannn/next-intl)

## Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the `LICENSE` file for more details.

# Next.js 14 Boilerplate with Next-Intl and Next-Auth

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

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

This is a boilerplate project for Next.js 14 with Next-Intl for internationalization and Next-Auth for authentication support. It is designed to provide a quick starting point for developers building React-based web applications with a focus on multiple languages and secure user authentication.

## Prerequisites

- Node.js v18 or above
- npm v7 or above

## Installation

### Step 1: Clone the Repository

```bash
git clone https://github.com/teo-goulois/template-next-i18n-next-auth.git
```

### Step 2: Navigate to Project Directory

```bash
cd template-next-i18n-next-auth
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

## Integrating Authentication with Next-Auth

1. **Configure Providers:** In the `[...nextauth].ts` file, set up the providers you want to use for authentication.

   ```typescript
   import NextAuth from "next-auth";
   import Providers from "next-auth/providers";

   export default NextAuth({
     providers: [
       Providers.Google({
         clientId: process.env.GOOGLE_CLIENT_ID,
         clientSecret: process.env.GOOGLE_CLIENT_SECRET,
       }),
       // Add other providers as needed
     ],
   });
   ```

2. **Environment Variables:** Don't forget to set up environment variables like `GOOGLE_CLIENT_ID` and `GOOGLE_CLIENT_SECRET` for authentication to work.

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
- [Next-Auth Documentation](https://https://next-auth.js.org/)

## Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the `LICENSE` file for more details.

# vue-kosik.cz

A vue project, bootstraped with Vite and Vuex.

## Required environment variables

Create a file `.env.local` in the root directory of the project and add the following lines:

```
TENOR_API_KEY=YOURSECRETKEY
VITE_TENOR_API_TRENDING_URL=https://api.tenor.com/v1/trending?key=${TENOR_API_KEY}
VITE_TENOR_API_SEARCH_URL=https://api.tenor.com/v1/search?key=${TENOR_API_KEY}&q=
```

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Headed Component Tests with [Cypress Component Testing](https://on.cypress.io/component)

```sh
npm run test:unit # or `npm run test:unit:ci` for headless testing
```

### Run End-to-End Tests with [Cypress](https://www.cypress.io/)

```sh
npm run build
npm run test:e2e # or `npm run test:e2e:ci` for headless testing
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

[![Coverage Status](https://coveralls.io/repos/github/devbucket/github-react-explorer/badge.svg?branch=main)](https://coveralls.io/github/devbucket/github-react-explorer?branch=main)
![GitHub deployments](https://img.shields.io/github/deployments/devbucket/github-react-explorer/production?logo=vercel&logoColor=white&label=vercel)


# GitHub "React" Explorer

App URL: https://github-react-explorer.vercel.app/

**This application renders trending GitHub repositions in a table view.**

It lets you refine the repositories via a text search and provides sorting by number of "stars" and number of "forks.

## Running locally

The project was set up with `pnpm`. This install its dependencies, run the following command:

```sh
pnpm install
```

This will install all dependencies. Then the project is ready for running in development mode:

```sh
pnpm run dev
```

## Generated Types

To ensure a better development experience, the schema from the GitHub GraphQL API was downloaded into `./api/schema.docs.graphql`. With this, it is possible to auto-generate TypeScript types into `./api/index.ts`. Because of defined TypeScript paths, they can easily be imported and used from `@/api`.

The code generator will also generate React Hooks from GraphQL Operations, found in the code base. These hooks can then also very easily be imported from anywhere in the codebase.

To generate new types and hooks, we run a simple script call:

```sh
pnpm run schema
```

## Executing Tests

To run the Vitest unit tests, simple run the script:

```sh
pnpm run test
```

There is also a nice UI that can be used for development of tests. Simple run the following script:

```sh
pnpm run test:ui
```

/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_GRAPHQL_URL: string;
  readonly VITE_GITHUB_TOKEN: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

declare module 'apollo-link-logger' {
  import type { ApolloLink } from '@apollo/client';

  const apolloLink: ApolloLink;
  export default apolloLink;
}

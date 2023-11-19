import {
  ApolloClient,
  InMemoryCache,
  ApolloLink,
  HttpLink,
} from '@apollo/client';
import apolloLogger from 'apollo-link-logger';

export const client = new ApolloClient({
  link: ApolloLink.from([
    apolloLogger,
    new HttpLink({
      uri: import.meta.env.VITE_GRAPHQL_URL,
      headers: {
        authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,
      },
    }),
  ]),
  cache: new InMemoryCache(),
});

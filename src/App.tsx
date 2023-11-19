import { ApolloProvider } from '@apollo/client';
import { client } from '@/lib/apollo-client';
import { Layout, Header } from '@/layout';
import { Explorer } from '@/explorer';

export function App() {
  return (
    <ApolloProvider client={client}>
      <Layout>
        <Header />
        <Explorer />
      </Layout>
    </ApolloProvider>
  );
}

import Welcome from './Welcome';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost:3000/api/graphql',
  cache: new InMemoryCache(),
});

export default function Web() {
  return (
    <ApolloProvider client={client}>
      <Welcome />
    </ApolloProvider>
  );
}

import { ApolloClient, InMemoryCache, ApolloProvider, gql, HttpLink } from '@apollo/client';

export const bscClient = new ApolloClient({
  link: new HttpLink({
    uri: process.env.NEXT_PUBLIC_BSC_GRAPHQL_URL,
  }),
  cache: new InMemoryCache(),
});

export const ethClient = new ApolloClient({
  link: new HttpLink({
    uri: process.env.NEXT_PUBLIC_ETH_GRAPHQL_URL,
  }),
  cache: new InMemoryCache(),
});

export default bscClient;

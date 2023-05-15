import { ApolloClient, InMemoryCache, ApolloProvider, gql, HttpLink } from '@apollo/client';

export const bscClient = new ApolloClient({
  link: new HttpLink({
    uri: 'https://open-platform.nodereal.io/d05b7aedbde943dfb6c533fe4f6909cd/pancakeswap-free/graphql',
  }),
  cache: new InMemoryCache(),
});

export const ethClient = new ApolloClient({
  link: new HttpLink({
    uri: 'https://api.thegraph.com/subgraphs/name/pancakeswap/exchange-v3-eth',
  }),
  cache: new InMemoryCache(),
});

export default bscClient;

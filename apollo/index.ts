import { ApolloClient, InMemoryCache, ApolloProvider, gql, HttpLink } from '@apollo/client';

export const bscClient = new ApolloClient({
  link: new HttpLink({
    uri: 'https://open-platform.nodereal.io/58276e806095487f89756fb2029812a9/pancakeswap-free/graphql',
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

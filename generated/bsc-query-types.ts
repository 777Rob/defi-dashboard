import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Address: any;
  BigDecimal: any;
  BigInt: any;
  Bytes: any;
  Bytes32: any;
  Hash: any;
  Long: any;
};

export type Block_Height = {
  hash?: InputMaybe<Scalars['Bytes']>;
  number?: InputMaybe<Scalars['Int']>;
};

export type Bundle = {
  __typename?: 'Bundle';
  bnbPrice: Scalars['BigDecimal'];
  id: Scalars['ID'];
};

export type Burn = {
  __typename?: 'Burn';
  amount0?: Maybe<Scalars['BigDecimal']>;
  amount1?: Maybe<Scalars['BigDecimal']>;
  amountUSD?: Maybe<Scalars['BigDecimal']>;
  feeLiquidity?: Maybe<Scalars['BigDecimal']>;
  feeTo?: Maybe<Scalars['String']>;
  from: Scalars['String'];
  id: Scalars['ID'];
  liquidity: Scalars['BigDecimal'];
  logIndex?: Maybe<Scalars['BigInt']>;
  needsComplete: Scalars['Boolean'];
  pair: Pair;
  sender?: Maybe<Scalars['String']>;
  timestamp: Scalars['BigInt'];
  to?: Maybe<Scalars['String']>;
  token0: Token;
  token1: Token;
  transaction: Transaction;
};

export type Burn_Filter = {
  from_in?: InputMaybe<Array<Scalars['String']>>;
  pair?: InputMaybe<Scalars['ID']>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  token0?: InputMaybe<Scalars['String']>;
  token1?: InputMaybe<Scalars['String']>;
};

export enum Burn_OrderBy {
  Timestamp = 'timestamp',
}

export type FactoryFilter = {
  totalPairsGte?: InputMaybe<Scalars['BigInt']>;
  totalTransactionsGte?: InputMaybe<Scalars['BigInt']>;
};

export type Mint = {
  __typename?: 'Mint';
  amount0?: Maybe<Scalars['BigDecimal']>;
  amount1?: Maybe<Scalars['BigDecimal']>;
  amountUSD?: Maybe<Scalars['BigDecimal']>;
  feeLiquidity?: Maybe<Scalars['BigDecimal']>;
  feeTo?: Maybe<Scalars['String']>;
  from: Scalars['String'];
  id: Scalars['ID'];
  liquidity: Scalars['BigDecimal'];
  logIndex?: Maybe<Scalars['BigInt']>;
  pair: Pair;
  sender?: Maybe<Scalars['String']>;
  timestamp: Scalars['BigInt'];
  to: Scalars['String'];
  token0: Token;
  token1: Token;
  transaction: Transaction;
};

export type Mint_Filter = {
  from_in?: InputMaybe<Array<Scalars['String']>>;
  pair?: InputMaybe<Scalars['ID']>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  token0?: InputMaybe<Scalars['String']>;
  token1?: InputMaybe<Scalars['String']>;
};

export enum Mint_OrderBy {
  Timestamp = 'timestamp',
}

export enum OrderDirection {
  Asc = 'asc',
  Desc = 'desc',
}

export type Pair = {
  __typename?: 'Pair';
  block: Scalars['BigInt'];
  id: Scalars['ID'];
  name: Scalars['String'];
  reserve0: Scalars['BigDecimal'];
  reserve1: Scalars['BigDecimal'];
  reserveBNB: Scalars['BigDecimal'];
  reserveUSD: Scalars['BigDecimal'];
  timestamp: Scalars['BigInt'];
  token0: Token;
  token0Price: Scalars['BigDecimal'];
  token1: Token;
  token1Price: Scalars['BigDecimal'];
  totalSupply: Scalars['BigDecimal'];
  totalTransactions: Scalars['BigInt'];
  trackedReserveBNB: Scalars['BigDecimal'];
  untrackedVolumeUSD: Scalars['BigDecimal'];
  volumeToken0: Scalars['BigDecimal'];
  volumeToken1: Scalars['BigDecimal'];
  volumeUSD: Scalars['BigDecimal'];
};

export type PairDayData = {
  __typename?: 'PairDayData';
  dailyTxns: Scalars['BigInt'];
  dailyVolumeToken0: Scalars['BigDecimal'];
  dailyVolumeToken1: Scalars['BigDecimal'];
  dailyVolumeUSD: Scalars['BigDecimal'];
  date: Scalars['Int'];
  id: Scalars['ID'];
  pairAddress: Pair;
  reserve0: Scalars['BigDecimal'];
  reserve1: Scalars['BigDecimal'];
  reserveUSD: Scalars['BigDecimal'];
  token0: Token;
  token1: Token;
  totalSupply: Scalars['BigDecimal'];
};

export type PairDayData_Filter = {
  dailyTxns_gt?: InputMaybe<Scalars['BigInt']>;
  date?: InputMaybe<Scalars['Int']>;
  date_gt?: InputMaybe<Scalars['Int']>;
  date_in?: InputMaybe<Array<Scalars['Int']>>;
  date_lt?: InputMaybe<Scalars['Int']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  pairAddress?: InputMaybe<Scalars['Bytes']>;
  pairAddress_in?: InputMaybe<Array<Scalars['Bytes']>>;
  token0_not_in?: InputMaybe<Array<Scalars['String']>>;
  token1_not_in?: InputMaybe<Array<Scalars['String']>>;
};

export enum PairDayData_OrderBy {
  DailyVolumeUsd = 'dailyVolumeUSD',
  Date = 'date',
}

export type PairHourData = {
  __typename?: 'PairHourData';
  hourStartUnix: Scalars['Int'];
  hourlyTxns: Scalars['BigInt'];
  hourlyVolumeToken0: Scalars['BigDecimal'];
  hourlyVolumeToken1: Scalars['BigDecimal'];
  hourlyVolumeUSD: Scalars['BigDecimal'];
  id: Scalars['ID'];
  pair: Pair;
  reserve0: Scalars['BigDecimal'];
  reserve1: Scalars['BigDecimal'];
  reserveUSD: Scalars['BigDecimal'];
  totalSupply: Scalars['BigDecimal'];
};

export type PairHourData_Filter = {
  hourStartUnix?: InputMaybe<Scalars['Int']>;
  hourStartUnix_gt?: InputMaybe<Scalars['Int']>;
  hourStartUnix_lt?: InputMaybe<Scalars['Int']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  pair?: InputMaybe<Scalars['String']>;
};

export enum PairHourData_OrderBy {
  HourStartUnix = 'hourStartUnix',
}

export type Pair_Filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  token0?: InputMaybe<Scalars['String']>;
  token0_in?: InputMaybe<Array<Scalars['String']>>;
  token0_not_in?: InputMaybe<Array<Scalars['String']>>;
  token1?: InputMaybe<Scalars['String']>;
  token1_in?: InputMaybe<Array<Scalars['String']>>;
  token1_not_in?: InputMaybe<Array<Scalars['String']>>;
  totalTransactions_gt?: InputMaybe<Scalars['BigInt']>;
};

export enum Pair_OrderBy {
  TrackedReserveBnb = 'trackedReserveBNB',
}

export type PancakeDayData = {
  __typename?: 'PancakeDayData';
  dailyVolumeBNB: Scalars['BigDecimal'];
  dailyVolumeUSD: Scalars['BigDecimal'];
  dailyVolumeUntracked: Scalars['BigDecimal'];
  date: Scalars['Int'];
  id: Scalars['ID'];
  totalLiquidityBNB: Scalars['BigDecimal'];
  totalLiquidityUSD: Scalars['BigDecimal'];
  totalTransactions: Scalars['BigInt'];
  totalVolumeBNB: Scalars['BigDecimal'];
  totalVolumeUSD: Scalars['BigDecimal'];
};

export type PancakeDayData_Filter = {
  date?: InputMaybe<Scalars['Int']>;
  date_gt?: InputMaybe<Scalars['Int']>;
  date_lt?: InputMaybe<Scalars['Int']>;
};

export enum PancakeDayData_OrderBy {
  Date = 'date',
}

export type PancakeFactory = {
  __typename?: 'PancakeFactory';
  id: Scalars['ID'];
  totalLiquidityBNB: Scalars['BigDecimal'];
  totalLiquidityUSD: Scalars['BigDecimal'];
  totalPairs: Scalars['BigInt'];
  totalTransactions: Scalars['BigInt'];
  totalVolumeBNB: Scalars['BigDecimal'];
  totalVolumeUSD: Scalars['BigDecimal'];
  untrackedVolumeUSD: Scalars['BigDecimal'];
};

export type Query = {
  __typename?: 'Query';
  bundle?: Maybe<Bundle>;
  bundles: Array<Bundle>;
  burn?: Maybe<Burn>;
  burns: Array<Burn>;
  mint?: Maybe<Mint>;
  mints: Array<Mint>;
  pair?: Maybe<Pair>;
  pairDayData?: Maybe<PairDayData>;
  pairDayDatas: Array<PairDayData>;
  pairHourData?: Maybe<PairHourData>;
  pairHourDatas: Array<PairHourData>;
  pairs: Array<Pair>;
  pancakeDayData?: Maybe<PancakeDayData>;
  pancakeDayDatas: Array<PancakeDayData>;
  pancakeFactories: Array<PancakeFactory>;
  pancakeFactory?: Maybe<PancakeFactory>;
  swap?: Maybe<Swap>;
  swaps: Array<Swap>;
  token?: Maybe<Token>;
  tokenDayData?: Maybe<TokenDayData>;
  tokenDayDatas: Array<TokenDayData>;
  tokens: Array<Token>;
};

export type QueryBundleArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
};

export type QueryBundlesArgs = {
  block?: InputMaybe<Block_Height>;
};

export type QueryBurnArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
};

export type QueryBurnsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Burn_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Burn_Filter>;
};

export type QueryMintArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
};

export type QueryMintsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Mint_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Mint_Filter>;
};

export type QueryPairArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
};

export type QueryPairDayDataArgs = {
  id: Scalars['ID'];
};

export type QueryPairDayDatasArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PairDayData_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PairDayData_Filter>;
};

export type QueryPairHourDataArgs = {
  id: Scalars['ID'];
};

export type QueryPairHourDatasArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PairHourData_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PairHourData_Filter>;
};

export type QueryPairsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Pair_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Pair_Filter>;
};

export type QueryPancakeDayDataArgs = {
  id: Scalars['ID'];
};

export type QueryPancakeDayDatasArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PancakeDayData_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PancakeDayData_Filter>;
};

export type QueryPancakeFactoriesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export type QueryPancakeFactoryArgs = {
  block?: InputMaybe<Block_Height>;
};

export type QuerySwapArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
};

export type QuerySwapsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Swap_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Swap_Filter>;
};

export type QueryTokenArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
};

export type QueryTokenDayDataArgs = {
  id: Scalars['ID'];
};

export type QueryTokenDayDatasArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<TokenDayData_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TokenDayData_Filter>;
};

export type QueryTokensArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Token_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Token_Filter>;
};

export type Swap = {
  __typename?: 'Swap';
  amount0In: Scalars['BigDecimal'];
  amount0Out: Scalars['BigDecimal'];
  amount1In: Scalars['BigDecimal'];
  amount1Out: Scalars['BigDecimal'];
  amountFeeUSD: Scalars['BigDecimal'];
  amountUSD: Scalars['BigDecimal'];
  from: Scalars['String'];
  id: Scalars['ID'];
  logIndex?: Maybe<Scalars['BigInt']>;
  pair: Pair;
  sender: Scalars['String'];
  timestamp: Scalars['BigInt'];
  to: Scalars['String'];
  token0: Token;
  token1: Token;
  transaction: Transaction;
};

export type Swap_Or_Filter = {
  token0_in?: InputMaybe<Array<Scalars['String']>>;
  token1_in?: InputMaybe<Array<Scalars['String']>>;
};

export type Swap_Filter = {
  from_in?: InputMaybe<Array<Scalars['String']>>;
  or?: InputMaybe<Swap_Or_Filter>;
  pair?: InputMaybe<Scalars['ID']>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  token0?: InputMaybe<Scalars['String']>;
  token1?: InputMaybe<Scalars['String']>;
};

export enum Swap_OrderBy {
  Timestamp = 'timestamp',
}

export type Token = {
  __typename?: 'Token';
  decimals: Scalars['BigInt'];
  derivedBNB?: Maybe<Scalars['BigDecimal']>;
  derivedUSD?: Maybe<Scalars['BigDecimal']>;
  id: Scalars['ID'];
  name: Scalars['String'];
  symbol: Scalars['String'];
  totalLiquidity: Scalars['BigDecimal'];
  totalTransactions: Scalars['BigInt'];
  tradeVolume: Scalars['BigDecimal'];
  tradeVolumeUSD: Scalars['BigDecimal'];
  untrackedVolumeUSD: Scalars['BigDecimal'];
};

export type TokenDayData = {
  __typename?: 'TokenDayData';
  dailyTxns: Scalars['BigInt'];
  dailyVolumeBNB: Scalars['BigDecimal'];
  dailyVolumeToken: Scalars['BigDecimal'];
  dailyVolumeUSD: Scalars['BigDecimal'];
  date: Scalars['Int'];
  id: Scalars['ID'];
  priceUSD: Scalars['BigDecimal'];
  token: Token;
  totalLiquidityBNB: Scalars['BigDecimal'];
  totalLiquidityToken: Scalars['BigDecimal'];
  totalLiquidityUSD: Scalars['BigDecimal'];
};

export type TokenDayData_Filter = {
  dailyTxns_gt?: InputMaybe<Scalars['BigInt']>;
  date?: InputMaybe<Scalars['Int']>;
  date_gt?: InputMaybe<Scalars['Int']>;
  date_lt?: InputMaybe<Scalars['Int']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  token?: InputMaybe<Scalars['String']>;
};

export enum TokenDayData_OrderBy {
  DailyVolumeUsd = 'dailyVolumeUSD',
  Date = 'date',
}

export type Token_Filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  name_contains?: InputMaybe<Scalars['String']>;
  symbol_contains?: InputMaybe<Scalars['String']>;
};

export enum Token_OrderBy {
  TradeVolumeUsd = 'tradeVolumeUSD',
}

export type Transaction = {
  __typename?: 'Transaction';
  block: Scalars['BigInt'];
  burns: Array<Maybe<Burn>>;
  id: Scalars['ID'];
  mints: Array<Maybe<Mint>>;
  swaps: Array<Maybe<Swap>>;
  timestamp: Scalars['BigInt'];
};

export type GetPairDayDatasBscQueryVariables = Exact<{
  pairAddress: Scalars['Bytes'];
}>;

export type GetPairDayDatasBscQuery = {
  __typename?: 'Query';
  pairDayDatas: Array<{
    __typename?: 'PairDayData';
    dailyVolumeUSD: any;
    date: number;
    dailyTxns: any;
    reserveUSD: any;
    id: string;
    token0: {
      __typename?: 'Token';
      name: string;
      symbol: string;
      totalTransactions: any;
      tradeVolume: any;
      derivedUSD?: any | null;
      id: string;
    };
    token1: {
      __typename?: 'Token';
      name: string;
      symbol: string;
      totalTransactions: any;
      tradeVolume: any;
      derivedUSD?: any | null;
      id: string;
    };
  }>;
};

export type GetTopTokensBscQueryVariables = Exact<{
  topTokens?: InputMaybe<Array<Scalars['ID']> | Scalars['ID']>;
}>;

export type GetTopTokensBscQuery = {
  __typename?: 'Query';
  tokenDayDatas: Array<{
    __typename?: 'TokenDayData';
    dailyVolumeUSD: any;
    totalLiquidityUSD: any;
    token: {
      __typename?: 'Token';
      id: string;
      name: string;
      symbol: string;
      totalLiquidity: any;
      derivedUSD?: any | null;
    };
  }>;
};

export type GetPancakeDayDatasBscQueryVariables = Exact<{ [key: string]: never }>;

export type GetPancakeDayDatasBscQuery = {
  __typename?: 'Query';
  pancakeDayDatas: Array<{
    __typename?: 'PancakeDayData';
    dailyVolumeUSD: any;
    date: number;
    totalTransactions: any;
    id: string;
    dailyVolumeBNB: any;
    dailyVolumeUntracked: any;
    totalLiquidityUSD: any;
  }>;
};

export type GetCombinedDetailsBscQueryVariables = Exact<{ [key: string]: never }>;

export type GetCombinedDetailsBscQuery = {
  __typename?: 'Query';
  pancakeFactory?: {
    __typename?: 'PancakeFactory';
    id: string;
    totalPairs: any;
    totalVolumeUSD: any;
    totalLiquidityUSD: any;
  } | null;
  pancakeDayDatas: Array<{
    __typename?: 'PancakeDayData';
    dailyVolumeUSD: any;
    date: number;
    totalTransactions: any;
    id: string;
    dailyVolumeBNB: any;
    dailyVolumeUntracked: any;
    totalLiquidityUSD: any;
  }>;
};

export type GetTopPairsBscQueryVariables = Exact<{
  first: Scalars['Int'];
  date_gt: Scalars['Int'];
  skip?: InputMaybe<Scalars['Int']>;
}>;

export type GetTopPairsBscQuery = {
  __typename?: 'Query';
  pairDayDatas: Array<{
    __typename?: 'PairDayData';
    id: string;
    dailyVolumeUSD: any;
    reserveUSD: any;
    dailyTxns: any;
    token0: { __typename?: 'Token'; name: string; id: string; symbol: string };
    token1: { __typename?: 'Token'; name: string; id: string; symbol: string };
  }>;
};

export const GetPairDayDatasBscDocument = gql`
  query GetPairDayDatasBSC($pairAddress: Bytes!) {
    pairDayDatas(
      where: { pairAddress: $pairAddress }
      orderBy: date
      orderDirection: desc
      first: 90
    ) {
      dailyVolumeUSD
      date
      token0 {
        name
        symbol
        totalTransactions
        tradeVolume
        derivedUSD
        id
      }
      token1 {
        name
        symbol
        totalTransactions
        tradeVolume
        derivedUSD
        id
      }
      dailyTxns
      reserveUSD
      id
    }
  }
`;

/**
 * __useGetPairDayDatasBscQuery__
 *
 * To run a query within a React component, call `useGetPairDayDatasBscQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPairDayDatasBscQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPairDayDatasBscQuery({
 *   variables: {
 *      pairAddress: // value for 'pairAddress'
 *   },
 * });
 */
export function useGetPairDayDatasBscQuery(
  baseOptions: Apollo.QueryHookOptions<GetPairDayDatasBscQuery, GetPairDayDatasBscQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetPairDayDatasBscQuery, GetPairDayDatasBscQueryVariables>(
    GetPairDayDatasBscDocument,
    options
  );
}
export function useGetPairDayDatasBscLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetPairDayDatasBscQuery,
    GetPairDayDatasBscQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetPairDayDatasBscQuery, GetPairDayDatasBscQueryVariables>(
    GetPairDayDatasBscDocument,
    options
  );
}
export type GetPairDayDatasBscQueryHookResult = ReturnType<typeof useGetPairDayDatasBscQuery>;
export type GetPairDayDatasBscLazyQueryHookResult = ReturnType<
  typeof useGetPairDayDatasBscLazyQuery
>;
export type GetPairDayDatasBscQueryResult = Apollo.QueryResult<
  GetPairDayDatasBscQuery,
  GetPairDayDatasBscQueryVariables
>;
export const GetTopTokensBscDocument = gql`
  query GetTopTokensBSC($topTokens: [ID!]) {
    tokenDayDatas(orderBy: dailyVolumeUSD, orderDirection: desc, where: { id_in: $topTokens }) {
      token {
        id
        name
        symbol
        totalLiquidity
        derivedUSD
      }
      dailyVolumeUSD
      totalLiquidityUSD
    }
  }
`;

/**
 * __useGetTopTokensBscQuery__
 *
 * To run a query within a React component, call `useGetTopTokensBscQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTopTokensBscQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTopTokensBscQuery({
 *   variables: {
 *      topTokens: // value for 'topTokens'
 *   },
 * });
 */
export function useGetTopTokensBscQuery(
  baseOptions?: Apollo.QueryHookOptions<GetTopTokensBscQuery, GetTopTokensBscQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetTopTokensBscQuery, GetTopTokensBscQueryVariables>(
    GetTopTokensBscDocument,
    options
  );
}
export function useGetTopTokensBscLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetTopTokensBscQuery, GetTopTokensBscQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetTopTokensBscQuery, GetTopTokensBscQueryVariables>(
    GetTopTokensBscDocument,
    options
  );
}
export type GetTopTokensBscQueryHookResult = ReturnType<typeof useGetTopTokensBscQuery>;
export type GetTopTokensBscLazyQueryHookResult = ReturnType<typeof useGetTopTokensBscLazyQuery>;
export type GetTopTokensBscQueryResult = Apollo.QueryResult<
  GetTopTokensBscQuery,
  GetTopTokensBscQueryVariables
>;
export const GetPancakeDayDatasBscDocument = gql`
  query GetPancakeDayDatasBSC {
    pancakeDayDatas(first: 90, orderBy: date, orderDirection: desc) {
      dailyVolumeUSD
      date
      totalTransactions
      id
      dailyVolumeBNB
      dailyVolumeUntracked
      totalLiquidityUSD
    }
  }
`;

/**
 * __useGetPancakeDayDatasBscQuery__
 *
 * To run a query within a React component, call `useGetPancakeDayDatasBscQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPancakeDayDatasBscQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPancakeDayDatasBscQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetPancakeDayDatasBscQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetPancakeDayDatasBscQuery,
    GetPancakeDayDatasBscQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetPancakeDayDatasBscQuery, GetPancakeDayDatasBscQueryVariables>(
    GetPancakeDayDatasBscDocument,
    options
  );
}
export function useGetPancakeDayDatasBscLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetPancakeDayDatasBscQuery,
    GetPancakeDayDatasBscQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetPancakeDayDatasBscQuery, GetPancakeDayDatasBscQueryVariables>(
    GetPancakeDayDatasBscDocument,
    options
  );
}
export type GetPancakeDayDatasBscQueryHookResult = ReturnType<typeof useGetPancakeDayDatasBscQuery>;
export type GetPancakeDayDatasBscLazyQueryHookResult = ReturnType<
  typeof useGetPancakeDayDatasBscLazyQuery
>;
export type GetPancakeDayDatasBscQueryResult = Apollo.QueryResult<
  GetPancakeDayDatasBscQuery,
  GetPancakeDayDatasBscQueryVariables
>;
export const GetCombinedDetailsBscDocument = gql`
  query GetCombinedDetailsBSC {
    pancakeFactory {
      id
      totalPairs
      totalVolumeUSD
      totalLiquidityUSD
    }
    pancakeDayDatas(first: 1, orderBy: date, orderDirection: desc) {
      dailyVolumeUSD
      date
      totalTransactions
      id
      dailyVolumeBNB
      dailyVolumeUntracked
      totalLiquidityUSD
    }
  }
`;

/**
 * __useGetCombinedDetailsBscQuery__
 *
 * To run a query within a React component, call `useGetCombinedDetailsBscQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCombinedDetailsBscQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCombinedDetailsBscQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetCombinedDetailsBscQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetCombinedDetailsBscQuery,
    GetCombinedDetailsBscQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetCombinedDetailsBscQuery, GetCombinedDetailsBscQueryVariables>(
    GetCombinedDetailsBscDocument,
    options
  );
}
export function useGetCombinedDetailsBscLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetCombinedDetailsBscQuery,
    GetCombinedDetailsBscQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetCombinedDetailsBscQuery, GetCombinedDetailsBscQueryVariables>(
    GetCombinedDetailsBscDocument,
    options
  );
}
export type GetCombinedDetailsBscQueryHookResult = ReturnType<typeof useGetCombinedDetailsBscQuery>;
export type GetCombinedDetailsBscLazyQueryHookResult = ReturnType<
  typeof useGetCombinedDetailsBscLazyQuery
>;
export type GetCombinedDetailsBscQueryResult = Apollo.QueryResult<
  GetCombinedDetailsBscQuery,
  GetCombinedDetailsBscQueryVariables
>;
export const GetTopPairsBscDocument = gql`
  query GetTopPairsBSC($first: Int!, $date_gt: Int!, $skip: Int) {
    pairDayDatas(
      first: $first
      where: { dailyTxns_gt: 1000, date_gt: $date_gt }
      orderDirection: desc
      skip: $skip
      orderBy: dailyVolumeUSD
    ) {
      id
      dailyVolumeUSD
      token0 {
        name
        id
        symbol
      }
      token1 {
        name
        id
        symbol
      }
      reserveUSD
      dailyVolumeUSD
      dailyTxns
    }
  }
`;

/**
 * __useGetTopPairsBscQuery__
 *
 * To run a query within a React component, call `useGetTopPairsBscQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTopPairsBscQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTopPairsBscQuery({
 *   variables: {
 *      first: // value for 'first'
 *      date_gt: // value for 'date_gt'
 *      skip: // value for 'skip'
 *   },
 * });
 */
export function useGetTopPairsBscQuery(
  baseOptions: Apollo.QueryHookOptions<GetTopPairsBscQuery, GetTopPairsBscQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetTopPairsBscQuery, GetTopPairsBscQueryVariables>(
    GetTopPairsBscDocument,
    options
  );
}
export function useGetTopPairsBscLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetTopPairsBscQuery, GetTopPairsBscQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetTopPairsBscQuery, GetTopPairsBscQueryVariables>(
    GetTopPairsBscDocument,
    options
  );
}
export type GetTopPairsBscQueryHookResult = ReturnType<typeof useGetTopPairsBscQuery>;
export type GetTopPairsBscLazyQueryHookResult = ReturnType<typeof useGetTopPairsBscLazyQuery>;
export type GetTopPairsBscQueryResult = Apollo.QueryResult<
  GetTopPairsBscQuery,
  GetTopPairsBscQueryVariables
>;

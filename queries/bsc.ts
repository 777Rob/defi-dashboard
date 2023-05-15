import { gql } from '@apollo/client';

export const GET_PAIR_DAY_DATAS_BSC = gql`
  query GetPairDayDatasBSC($pairAddress: Bytes!) {
    pairDayDatas(
      where: { pairAddress: $pairAddress }
      orderBy: date
      orderDirection: desc
      first: 90
    ) {
      dailyVolumeUSD
      date
      dailyVolumeToken0
      dailyVolumeToken1
      reserve0
      reserve1
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

export const GET_TOP_TOKENS = gql`
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

export const GET_VOLUMES_BSC = gql`
  query GetPancakeDayDatasBSC {
    pancakeDayDatas(first: 90, orderBy: date, orderDirection: desc) {
      dailyVolumeUSD
      date
      totalTransactions
      id
      dailyVolumeBNB
      totalLiquidityUSD
    }
  }
`;

export const GET_PANCAKE_DETAILS_BSC = gql`
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

export const GET_TOP_PAIRS = gql`
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

export const GET_TOKEN_DATA = gql`
  query GetTokenDayDatasBSC($tokenAddress: String!) {
    tokenDayDatas(where: { token: $tokenAddress }, orderBy: date, orderDirection: desc, first: 90) {
      id
      dailyVolumeUSD
      date
      dailyTxns
      totalLiquidityToken
      priceUSD
      dailyVolumeUSD
      date
      totalLiquidityUSD
      token {
        id
        name
        symbol
        totalTransactions
        tradeVolume
        derivedUSD
        tradeVolumeUSD
      }
    }
  }
`;

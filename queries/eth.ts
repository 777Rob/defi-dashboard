import { gql } from '@apollo/client';

export const GET_PAIR_DAY_DATAS_ETH = gql`
  query GetPairDayDatasETH($pairAddress: String!) {
    poolDayDatas(orderBy: date, orderDirection: desc, first: 90, where: { pool: $pairAddress }) {
      dailyVolumeUSD: volumeUSD
      date
      dailyVolumeToken0: volumeToken0
      dailyVolumeToken1: volumeToken1
      token0Price
      token1Price
      reserveUSD: tvlUSD
      pool {
        reserve0: totalValueLockedToken0
        reserve1: totalValueLockedToken1
        token0 {
          id
          name
          symbol
          derivedUSD
          totalTransactions: txCount
          tradeVolume: volumeUSD
        }
        token1 {
          id
          name
          symbol
          derivedUSD
          totalTransactions: txCount
          tradeVolume: volumeUSD
        }
      }
      id
    }
  }
`;

export const GET_PANCAKE_DETAILS_ETH = gql`
  query GetCombinedDetailsETH {
    pancakeFactory: factory(id: "0x0bfbcf9fa4f9c56b0f40a671ad40e0805a091865") {
      id
      totalPairs: poolCount
      totalVolumeUSD
      totalLiquidityUSD: totalValueLockedUSD
    }
    pancakeDayDatas(first: 1, orderBy: date, orderDirection: desc) {
      dailyVolumeUSD: volumeUSD
      dailyVolumeBNB: volumeETH
      date
      totalTransactions: txCount
      totalLiquidityUSD: tvlUSD
    }
  }
`;

export const GET_VOLUMES_ETH = gql`
  query GetPancakeDayDatasETH {
    pancakeDayDatas(first: 90, orderBy: date, orderDirection: desc) {
      dailyVolumeUSD: volumeUSD
      date
      totalTransactions: txCount
      id
      dailyVolumeBNB: volumeETH
      totalLiquidityUSD: tvlUSD
    }
  }
`;

export const GET_TOP_PAIRS_ETH = gql`
  query GetTopPairsETH($first: Int!, $date_gt: Int!, $skip: Int) {
    poolDayDatas(first: $first, where: { date_gt: $date_gt }, orderBy: liquidity) {
      id
      dailyVolumeUSD: volumeUSD
      date
      reserveUSD: tvlUSD
      dailyTxns: txCount
      pool {
        token0 {
          name
          symbol
          id
        }
        token1 {
          id
          name
          symbol
        }
      }
    }
  }
`;

export const GET_TOP_TOKENS = gql`
  query GetTopTokensETH($date_gt: Int!) {
    tokenDayDatas(orderBy: token__volumeUSD, orderDirection: desc, where: { date_gt: $date_gt }) {
      dailyVolumeUSD: volumeUSD
      totalLiquidityUSD: totalValueLockedUSD
      token {
        id
        symbol
        name
        derivedUSD
        totalLiquidity: totalValueLockedUSD
      }
    }
  }
`;

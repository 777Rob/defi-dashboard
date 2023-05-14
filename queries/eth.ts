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

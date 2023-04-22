import { gql, useQuery } from '@apollo/client';
import bscClient, { ethClient } from 'apollo';

type Chain = 'bsc' | 'eth';

const usePancakeDetails = (chain: Chain = 'bsc') => {
  const GET_PANCAKE_DETAILS_BSC = gql`
    query GetCombinedDetails {
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

  let QUERY = GET_PANCAKE_DETAILS_BSC;
  let client;

  if (chain == 'bsc') {
    client = bscClient;
    QUERY = GET_PANCAKE_DETAILS_BSC;
  } else if (chain == 'eth') {
    client = ethClient;
    QUERY = GET_PANCAKE_DETAILS_BSC;
  }

  const { loading, data, error, networkStatus } = useQuery(QUERY, {
    client,
    fetchPolicy: 'cache-first',
  });
  if (error) {
    throw new Error(error.message);
  }

  if (loading) return { loading, data, error };

  if (chain == 'bsc') {
    const { pancakeFactory, pancakeDayDatas } = data;
    const { totalPairs, totalVolumeUSD, totalLiquidityUSD, id } = pancakeFactory;
    const { dailyVolumeUSD, totalTransactions } = pancakeDayDatas[0];
    const pancakeDetails = {
      totalPairs,
      totalVolumeUSD,
      dailyVolumeUSD,
      totalTransactions,
      totalLiquidityUSD,
      id,
    };

    return {
      loading,
      data: pancakeDetails,
      error,
    };
  }

  if (chain === 'eth') {
    return {
      loading,
      data,
      error,
    };
  }

  return { loading, data, error };
};

export default usePancakeDetails;

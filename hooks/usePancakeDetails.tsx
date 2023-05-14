import { gql, useQuery } from '@apollo/client';
import bscClient, { ethClient } from 'apollo';
import { useGetCombinedDetailsBscLazyQuery } from 'generated/bsc-query-types';
import { useEffect } from 'react';
import { Chains } from 'utils/chain';
import { useChain } from './useChain';

type PancakeDetails = {
  totalPairs: number;
  totalVolumeUSD: number;
  dailyVolumeUSD: number;
  totalTransactions: number;
  totalLiquidityUSD: number;
  id: string;
};

const usePancakeDetails = (): {
  loading: boolean;
  data?: PancakeDetails | any;
  error?: any;
} => {
  const { chain } = useChain();
  const [getCombinedDetailsBSC, { loading, data, error, called }] =
    useGetCombinedDetailsBscLazyQuery({
      fetchPolicy: 'cache-first',
    });

  // const [getCombinedDetailsETH, { loading, data, error, networkStatus }] =
  // useGetCombinedDetailsEthLazyQuery({
  //   fetchPolicy: 'cache-first',
  // });

  useEffect(() => {
    if (chain == Chains.BSC) {
      getCombinedDetailsBSC();
    } else {
      // getCombinedDetailsETH();
    }
  }, [chain]);

  if (error) {
    throw new Error(error.message);
  }

  if (loading || !called) return { loading, data, error };

  if (chain == Chains.BSC && data) {
    const { pancakeFactory, pancakeDayDatas } = data;
    const { totalPairs, totalVolumeUSD, totalLiquidityUSD, id } = pancakeFactory!;
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

  if (chain === Chains.ETH && data) {
    return {
      loading,
      data,
      error,
    };
  }

  return { loading, data, error };
};

export default usePancakeDetails;

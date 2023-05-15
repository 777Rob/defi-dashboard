import { gql, useQuery } from '@apollo/client';
import bscClient, { ethClient } from 'apollo';
import { useGetCombinedDetailsBscLazyQuery } from 'generated/bsc-query-types';
import { useEffect } from 'react';
import { Chains } from 'utils/chain';
import { useChain } from './useChain';
import { useGetCombinedDetailsEthLazyQuery } from 'generated/eth-query-types';
import { mockPancakeData } from 'constants/mockPancakeData';

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
  const [
    getCombinedDetailsBSC,
    { loading: loadingBSC, data: dataBSC, error: errorBSC, called: calledBSC },
  ] = useGetCombinedDetailsBscLazyQuery({
    fetchPolicy: 'cache-first',
  });

  const [
    getCombinedDetailsETH,
    { loading: loadingETH, data: dataETH, error: errorETH, called: calledETH },
  ] = useGetCombinedDetailsEthLazyQuery({
    fetchPolicy: 'cache-first',
    client: ethClient,
  });

  useEffect(() => {
    if (chain == Chains.BSC) {
      getCombinedDetailsBSC();
    } else {
      getCombinedDetailsETH();
    }
  }, [chain]);

  let { loading, data, error, called } =
    chain == Chains.BSC
      ? { loading: loadingBSC, data: dataBSC, error: errorBSC, called: calledBSC }
      : { loading: loadingETH, data: dataETH, error: errorETH, called: calledETH };

  if (error) {
    return {
      loading,
      data: mockPancakeData,
      error,
    };
  }

  if (loading || !called) return { loading, data, error };

  if (data) {
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

  return { loading, data, error };
};

export default usePancakeDetails;

import { gql, useLazyQuery, useQuery } from '@apollo/client';
import { PancakeDataEntryRequest, PancakeDataEntry } from './usePancakeDayData.dto';
import { mockPancakeBSCVolumeData } from '../data/MockPancakeVolumeBSC';
import { Chains } from 'utils/chain';
import { useEffect } from 'react';
import { useGetPancakeDayDatasBscLazyQuery } from 'generated/bsc-query-types';
import { useChain } from './useChain';
import { useGetPancakeDayDatasEthLazyQuery } from 'generated/eth-query-types';
import { ethClient } from 'apollo';

const usePancakeDayData = () => {
  const { chain } = useChain();
  const [
    getPancakeDayDatasBsc,
    { loading: loadingBSC, data: dataBSC, error: errorBSC, called: calledBSC },
  ] = useGetPancakeDayDatasBscLazyQuery({
    fetchPolicy: 'cache-first',
  });

  const [
    getPancakeDayDatasEth,
    { loading: loadingETH, data: dataETH, error: errorETH, called: calledETH },
  ] = useGetPancakeDayDatasEthLazyQuery({
    fetchPolicy: 'cache-first',
    client: ethClient,
  });

  useEffect(() => {
    if (chain == Chains.BSC) {
      getPancakeDayDatasBsc();
    } else {
      getPancakeDayDatasEth();
    }
  }, [chain]);

  let { loading, data, error, called } =
    chain == Chains.BSC
      ? { loading: loadingBSC, data: dataBSC, error: errorBSC, called: calledBSC }
      : { loading: loadingETH, data: dataETH, error: errorETH, called: calledETH };

  if (!loading && called) {
    let pancakeDayDatas: PancakeDataEntryRequest[] = [];
    /**
     * @NOTE: API Rate is limited in case limit is reached, use mock data
     */

    if (error || !data) {
      pancakeDayDatas = mockPancakeBSCVolumeData;
    } else {
      pancakeDayDatas = data?.pancakeDayDatas;
    }

    let pancakeDayDatasFormatted: PancakeDataEntry[] = pancakeDayDatas?.map(
      (dataEntry: PancakeDataEntryRequest, index: any) => {
        return {
          ...dataEntry,
          dailyVolumeUSD: dataEntry.dailyVolumeUSD.split('.')[0],
          date: new Date(dataEntry.date * 1000).toLocaleDateString(),
          totalTransactions: Math.abs(
            parseInt(dataEntry.totalTransactions) -
              (parseInt(pancakeDayDatas[index - 1]?.totalTransactions) || 0)
          ),
        };
      }
    );

    return {
      loading,
      data: pancakeDayDatasFormatted,
      error,
    };
  }
  return { loading, data: undefined, error };
};

export default usePancakeDayData;

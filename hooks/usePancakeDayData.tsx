import { gql, useLazyQuery, useQuery } from '@apollo/client';
import { PancakeDataEntryRequest, PancakeDataEntry } from './usePancakeDayData.dto';
import { mockPancakeDayData } from '../constants';
import { Chains } from 'utils/chain';
import { useCallback, useEffect, useState } from 'react';
import { useGetPancakeDayDatasBscLazyQuery } from 'generated/bsc-query-types';
import { useChain } from './useChain';
import { useGetPancakeDayDatasEthLazyQuery } from 'generated/eth-query-types';
import { ethClient } from 'apollo';

const usePancakeDayData = () => {
  const { chain } = useChain();
  const [formattedData, setFormattedData] = useState<PancakeDataEntry[] | undefined>(undefined);

  const [
    getPancakeDayDatasBsc,
    { loading: loadingBSC, data: dataBSC, error: errorBSC, called: calledBSC },
  ] = useGetPancakeDayDatasBscLazyQuery({
    fetchPolicy: 'cache-first',
    onCompleted: (data) => {
      if (data) {
        const formattedData = formatData(data.pancakeDayDatas);
        setFormattedData(formattedData);
      }
    },
  });

  const [
    getPancakeDayDatasEth,
    { loading: loadingETH, data: dataETH, error: errorETH, called: calledETH },
  ] = useGetPancakeDayDatasEthLazyQuery({
    fetchPolicy: 'cache-first',
    client: ethClient,
    onCompleted: (data) => {
      if (data) {
        const formattedData = formatData(data.pancakeDayDatas);
        setFormattedData(formattedData);
      }
    },
  });

  useEffect(() => {
    if (chain == Chains.BSC) {
      getPancakeDayDatasBsc();
    } else {
      getPancakeDayDatasEth();
    }
  }, [chain]);

  const formatData = useCallback(
    (rawData: PancakeDataEntryRequest[]) => {
      let pancakeDayDatasFormatted: PancakeDataEntry[] = rawData.map(
        (dataEntry: PancakeDataEntryRequest, index: any) => {
          return {
            ...dataEntry,
            dailyVolumeUSD: dataEntry.dailyVolumeUSD.split('.')[0],
            date: new Date(dataEntry.date * 1000).toLocaleDateString(),
            totalTransactions: parseInt(dataEntry.totalTransactions),
          };
        }
      );
      return pancakeDayDatasFormatted;
    },
    [chain]
  );

  let { loading, data, error, called } =
    chain == Chains.BSC
      ? { loading: loadingBSC, data: dataBSC, error: errorBSC, called: calledBSC }
      : { loading: loadingETH, data: dataETH, error: errorETH, called: calledETH };

  if (!loading && called) {
    /**
     * @NOTE: API Rate is limited in case limit is reached, use mock data
     */

    if (error) {
      return {
        loading,
        data: mockPancakeDayData,
        error,
      };
    }

    return {
      loading,
      data: formattedData,
      error,
    };
  }

  return { loading, data: undefined, error };
};

export default usePancakeDayData;

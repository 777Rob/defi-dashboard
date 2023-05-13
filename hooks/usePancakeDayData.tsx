import { gql, useLazyQuery, useQuery } from '@apollo/client';
import { PancakeDataEntryRequest, PancakeDataEntry } from './usePancakeDayData.dto';
import { mockPancakeBSCVolumeData } from '../data/MockPancakeVolumeBSC';
import {
  useGetPancakeDayDatasBscLazyQuery,
  useGetPancakeDayDatasBscQuery,
} from 'generated/graphql';
import { Chains } from 'utils/chain';
import { useEffect } from 'react';

const usePancakeDayData = (chain = Chains.BSC) => {
  const [getPancakeDayDatasBsc, { loading, data, error, networkStatus }] =
    useGetPancakeDayDatasBscLazyQuery({
      fetchPolicy: 'cache-first',
    });

  // const [getPancakeDayDatasEth, { loading, data, error, networkStatus }] =
  //   useGetPancakeDayDatasEthLazyQuery({
  //     fetchPolicy: 'cache-first',
  //   });

  useEffect(() => {
    if (chain == Chains.BSC) {
      getPancakeDayDatasBsc();
    } else {
      // getPancakeDayDatasEth();
    }
  }, [chain]);

  if (!loading) {
    /**
     * @NOTE: API Rate is limited in case limit is reached, use mock data
     */

    let pancakeDayDatas: PancakeDataEntryRequest[] = [];
    if (error) {
      pancakeDayDatas = mockPancakeBSCVolumeData;
    } else {
      pancakeDayDatas = data?.pancakeDayDatas;
    }

    let pancakeDayDatasFormatted: PancakeDataEntry[] = pancakeDayDatas.map(
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
  return { loading, data, error };
};

export default usePancakeDayData;

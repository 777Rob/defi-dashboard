import { gql, useQuery } from '@apollo/client';
import { topTokens } from 'data/topTokens';
import { getAddress } from 'ethers';
import {
  GetTopPairsBscQuery,
  Maybe,
  PairDayData,
  useGetTopPairsBscLazyQuery,
} from 'generated/bsc-query-types';
import { useCallback, useEffect, useState } from 'react';
import { customRound } from 'utils/customRound';
import { Chains } from 'utils/chain';
import { useChain } from './useChain';

export type FormattedPairDayData = Pick<
  PairDayData,
  'id' | 'dailyVolumeUSD' | 'reserveUSD' | 'dailyTxns'
> & {
  token0: Pick<PairDayData['token0'], 'name' | 'id' | 'symbol'>;
  token1: Pick<PairDayData['token1'], 'name' | 'id' | 'symbol'>;
};

const yesterdayTimestampInSeconds = Math.floor((Date.now() - 24 * 60 * 60 * 1000) / 1000);

const useTopPairs = (): {
  loading: boolean;
  data: FormattedPairDayData[] | undefined;
  error: any | undefined;
} => {
  const { chain } = useChain();

  const [getTopPairsBSC, { loading, data, error, called }] = useGetTopPairsBscLazyQuery({
    fetchPolicy: 'cache-first',
    variables: {
      date_gt: yesterdayTimestampInSeconds,
      first: 100,
      skip: 0,
    },
    onCompleted: (data) => {
      if (data) {
        const formattedData = formatData(data.pairDayDatas);
        setFormattedData(formattedData);
      }
    },
  });

  const [formattedData, setFormattedData] = useState<FormattedPairDayData[] | undefined>(undefined);

  const formatData = useCallback(
    (rawData: FormattedPairDayData[]) => {
      const formattedData = rawData.map((item) => {
        return {
          ...item,
          dailyVolumeUSD: parseFloat(item.dailyVolumeUSD),
          reserveUSD: parseFloat(item.reserveUSD),
        };
      });

      return formattedData;
    },
    [data]
  );

  // const [getTopPairsETH, { loading, data, error }] = useGetTopPairsETHLazyQuery({
  //   fetchPolicy: 'cache-first',
  //   variables: {
  //     date_gt: yesterdayTimestampInSeconds,
  //     first: 100,
  //     skip: 0,
  //   },
  // });

  useEffect(() => {
    if (chain === Chains.BSC) {
      getTopPairsBSC();
    } else {
      // getTopPairsETH()
    }
  }, [chain]);

  if (!loading && called) {
    /**
     * @NOTE: API Rate is limited in case limit is reached, use mock data
     */
    let topTokens = [];
    if (error) {
      topTokens = mockTopTokens;
    } else {
      topTokens = data?.pairDayDatas!;
    }

    return {
      loading,
      data: formattedData,
      error,
    };
  }

  return { loading, data: undefined, error };
};

export default useTopPairs;

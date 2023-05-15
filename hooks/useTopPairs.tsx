import { gql, useQuery } from '@apollo/client';
import { topTokens } from 'constants/topTokens';
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
import { useGetTopPairsEthLazyQuery } from 'generated/eth-query-types';
import { ethClient } from 'apollo';
import { mockTopPairs } from 'constants/mockTopPairs';
import _ from 'lodash';

export type FormattedPairDayData = Pick<
  PairDayData,
  'id' | 'dailyVolumeUSD' | 'reserveUSD' | 'dailyTxns'
> & {
  token0: Pick<PairDayData['token0'], 'name' | 'id' | 'symbol'>;
  token1: Pick<PairDayData['token1'], 'name' | 'id' | 'symbol'>;
};

const yesterdayTimestampInSeconds = Math.floor((Date.now() - 36 * 60 * 60 * 1000) / 1000);

const useTopPairs = (): {
  loading: boolean;
  data: FormattedPairDayData[] | undefined;
  error: any | undefined;
} => {
  const { chain } = useChain();

  const [
    getTopPairsBSC,
    { loading: loadingBSC, data: dataBSC, error: errorBSC, called: calledBSC, fetchMore },
  ] = useGetTopPairsBscLazyQuery({
    fetchPolicy: 'cache-first',
    variables: {
      date_gt: yesterdayTimestampInSeconds,
      first: 100,
      skip: 0,
    },
    onCompleted: (data) => {
      const preformatedData = _.uniqBy(
        _.orderBy(data.pairDayDatas, [(e) => -parseInt(e.id.split('-')[1])]),
        (e) => e.id.split('-')[0]
      );
      const formattedData = formatData(preformatedData);
      setFormattedData(formattedData);
    },
  });

  const [
    getTopPairsETH,
    { loading: loadingETH, data: dataETH, error: errorETH, called: calledETH },
  ] = useGetTopPairsEthLazyQuery({
    fetchPolicy: 'cache-first',
    variables: {
      date_gt: yesterdayTimestampInSeconds,
      first: 100,
      skip: 0,
    },
    onCompleted: (data) => {
      if (data) {
        const preformattedData = data.poolDayDatas.map((item) => {
          return { ...item, token0: item.pool.token0, token1: item.pool.token1 };
        });
        const uniquePreformattedData = _.uniqBy(
          _.orderBy(preformattedData, [(e) => -parseInt(e.id.split('-')[1])]),
          (e) => e.id.split('-')[0]
        );

        const formattedData = formatData(uniquePreformattedData);
        setFormattedData(formattedData);
      }
    },
    client: ethClient,
  });
  const [formattedData, setFormattedData] = useState<FormattedPairDayData[] | undefined>(undefined);

  let { loading, data, error, called } =
    chain == Chains.BSC
      ? { loading: loadingBSC, data: dataBSC, error: errorBSC, called: calledBSC }
      : { loading: loadingETH, data: dataETH, error: errorETH, called: calledETH };

  const formatData = useCallback(
    (rawData: FormattedPairDayData[]) => {
      const formattedData = rawData.map((item) => {
        return {
          ...item,
          dailyVolumeUSD: parseFloat(item.dailyVolumeUSD),
          reserveUSD: parseFloat(item.reserveUSD),
        };
      });

      console.log('formattedData', formattedData);
      return formattedData;
    },
    [chain, data]
  );

  useEffect(() => {
    if (chain === Chains.BSC) {
      getTopPairsBSC();
    } else {
      getTopPairsETH();
    }
  }, [chain]);

  if (!loading && called) {
    /**
     * @NOTE: API Rate is limited in case limit is reached, use mock data
     */

    if (error) {
      return {
        loading,
        data: mockTopPairs,
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

export default useTopPairs;

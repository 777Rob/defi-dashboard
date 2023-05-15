import { useCallback, useEffect, useState } from 'react';
import { Chains } from 'utils/chain';
import { mockPairDayDataBSC } from '../constants/mockPairDayDataBSC';
import { PairDayData, Token, useGetPairDayDatasBscLazyQuery } from '../generated/bsc-query-types';
import { getLogoUri } from '../utils/getLogoUri';
import { useChain } from './useChain';
import { useGetPairDayDatasEthLazyQuery } from 'generated/eth-query-types';
import { ethClient } from 'apollo';

export type RawPairDayData = Pick<
  PairDayData,
  | 'id'
  | 'dailyVolumeUSD'
  | 'reserveUSD'
  | 'dailyTxns'
  | 'date'
  | 'dailyVolumeToken0'
  | 'dailyVolumeToken1'
  | 'reserve0'
  | 'reserve1'
> & {
  token0: Pick<
    Token,
    'name' | 'id' | 'symbol' | 'totalTransactions' | 'tradeVolume' | 'derivedUSD'
  >;
  token1: Pick<
    Token,
    'name' | 'id' | 'symbol' | 'totalTransactions' | 'tradeVolume' | 'derivedUSD'
  >;
};

export type FormattedToken = Pick<
  Token,
  'name' | 'id' | 'symbol' | 'totalTransactions' | 'tradeVolume' | 'derivedUSD'
> & {
  logoURI: string;
};

export type FormattedPairDayData = Omit<
  Pick<
    PairDayData,
    | 'id'
    | 'dailyVolumeUSD'
    | 'reserveUSD'
    | 'dailyTxns'
    | 'date'
    | 'dailyVolumeToken0'
    | 'dailyVolumeToken1'
    | 'reserve0'
    | 'reserve1'
  >,
  'date'
> & {
  date: string;
  token0: FormattedToken;
  token1: FormattedToken;
};

const usePairDayDatas = (
  pairAddress: string
): {
  data: FormattedPairDayData[] | undefined;
  loading: boolean;
  error: any | undefined;
} => {
  const { chain } = useChain();
  const [
    getPancakeDayDatasBsc,

    { loading: loadingBSC, data: dataBSC, error: errorBSC, called: calledBSC },
  ] = useGetPairDayDatasBscLazyQuery({
    fetchPolicy: 'cache-first',
    variables: {
      pairAddress: pairAddress,
    },
    onCompleted: (data) => {
      if (data) {
        const formattedData = formatData(data.pairDayDatas);
        setFormattedData(formattedData as FormattedPairDayData[]);
      }
    },
  });

  const [
    getPancakeDayDatasEth,
    { loading: loadingETH, data: dataETH, error: errorETH, called: calledETH },
  ] = useGetPairDayDatasEthLazyQuery({
    fetchPolicy: 'cache-first',
    variables: {
      pairAddress: pairAddress,
    },
    onCompleted: (data) => {
      if (data) {
        const preFormattedData = data.poolDayDatas.map((entry) => {
          return {
            ...entry,
            reserve0: entry.pool.reserve0,
            reserve1: entry.pool.reserve1,
            token0: entry.pool.token0,
            token1: entry.pool.token1,
          };
        });
        const formattedData = formatData(preFormattedData as unknown as RawPairDayData[]);
        setFormattedData(formattedData as FormattedPairDayData[]);
      }
    },
    client: ethClient,
  });

  let { loading, data, error, called } =
    chain == Chains.BSC
      ? { loading: loadingBSC, data: dataBSC, error: errorBSC, called: calledBSC }
      : { loading: loadingETH, data: dataETH, error: errorETH, called: calledETH };

  useEffect(() => {
    if (chain == Chains.BSC) {
      getPancakeDayDatasBsc();
    } else {
      getPancakeDayDatasEth();
    }
  }, [chain, pairAddress]);

  const [formattedData, setFormattedData] = useState<FormattedPairDayData[] | undefined>(undefined);

  const formatData = useCallback(
    (rawData: RawPairDayData[]) => {
      const formattedData = rawData.map((item, index: number) => {
        return {
          ...item,
          dailyVolumeUSD: item.dailyVolumeUSD.split('.')[0],
          date: new Date(item.date * 1000).toLocaleDateString(),
          dailyTxns: Math.abs(parseInt(item.dailyTxns)),
          token0: {
            ...item.token0,
            logoURI: getLogoUri(item.token0.id),
          },
          token1: {
            ...item.token1,
            logoURI: getLogoUri(item.token1.id),
          },
        };
      });

      return formattedData;
    },
    [data, chain]
  );

  if (!loading && called) {
    /**
     * @NOTE: API Rate is limited in case limit is reached, use mock data
     */
    if (error || !data) {
      return { loading, error, data: mockPairDayDataBSC };
    }

    return {
      loading,
      data: formattedData,
      error,
    };
  }

  return { loading, data: undefined, error };
};

export default usePairDayDatas;

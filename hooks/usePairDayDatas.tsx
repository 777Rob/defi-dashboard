import { gql, useLazyQuery, useQuery } from '@apollo/client';
import { PancakeDataEntryRequest, PancakeDataEntry } from './usePancakeDayData.dto';
import { mockPancakeBSCVolumeData } from '../data/MockPancakeVolumeBSC';
import { Chains } from 'utils/chain';
import { useCallback, useEffect, useState } from 'react';
import { PairDayData, Token, useGetPairDayDatasBscLazyQuery } from '../generated/bsc-query-types';
import { mockPairDayDataBSC } from '../data/mockPairDayDataBSC';
import { getLogoUri } from '../utils/getLogoUri';

export type RawPairDayData = Pick<
  PairDayData,
  'id' | 'dailyVolumeUSD' | 'reserveUSD' | 'dailyTxns' | 'date'
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
  Pick<PairDayData, 'id' | 'dailyVolumeUSD' | 'reserveUSD' | 'dailyTxns' | 'date'>,
  'date'
> & {
  date: string;
  token0: FormattedToken;
  token1: FormattedToken;
};

const usePairDayDatas = (
  chain = Chains.BSC,
  pairAddress: string
): {
  data: FormattedPairDayData[] | undefined;
  loading: boolean;
  error: any | undefined;
} => {
  const [getPancakeDayDatasBsc, { loading, data, error, called }] = useGetPairDayDatasBscLazyQuery({
    fetchPolicy: 'cache-first',
    variables: {
      pairAddress: pairAddress,
    },
    onCompleted: (data) => {
      console.log(data);
      if (data) {
        const formattedData = formatData(data.pairDayDatas);
        setFormattedData(formattedData);
      }
    },
  });

  useEffect(() => {
    if (chain == Chains.BSC) {
      getPancakeDayDatasBsc();
    } else {
      // getPancakeDayDatasEth();
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
          dailyTxns: Math.abs(
            parseInt(item.dailyTxns) - (parseInt(item[index - 1]?.totalTransactions) || 0)
          ),
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
    [data]
  );

  if (!loading && called) {
    /**
     * @NOTE: API Rate is limited in case limit is reached, use mock data
     */
    if (error) {
      return { loading, error, data: formatData(mockPairDayDataBSC) };
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

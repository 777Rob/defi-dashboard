import { useCallback, useEffect, useState } from 'react';
import { Chains } from 'utils/chain';
import { mockPairDayData } from '../constants';
import { useGetTokenDayDatasBscLazyQuery } from '../generated/bsc-query-types';
import { useTokenDayDatasEthLazyQuery } from '../generated/eth-query-types';
import { getLogoUri } from '../utils/getLogoUri';
import { useChain } from './useChain';
import { ethClient } from 'apollo';

const useTokenData = (tokenAddress: string) => {
  const { chain } = useChain();

  const [
    getPancakeDayDatasBsc,

    { loading: loadingBSC, data: dataBSC, error: errorBSC, called: calledBSC },
  ] = useGetTokenDayDatasBscLazyQuery({
    fetchPolicy: 'cache-first',
    variables: {
      tokenAddress: tokenAddress,
    },
    onCompleted: (data) => {
      if (data) {
        const formattedData = formatData(data.tokenDayDatas);
        setFormattedData(formattedData);
      }
    },
  });

  const [
    getPancakeDayDatasEth,
    { loading: loadingETH, data: dataETH, error: errorETH, called: calledETH },
  ] = useTokenDayDatasEthLazyQuery({
    fetchPolicy: 'cache-first',
    variables: {
      tokenAddress: tokenAddress,
    },
    onCompleted: (data) => {
      if (data) {
        const preformattedData = data.tokenDayDatas.map((entry) => {
          return {
            ...entry,
            ...entry.token,
            totalLiquidityToken: entry.token.totalLiquidity,
          };
        });
        const formattedData = formatData(preformattedData);
        setFormattedData(formattedData);
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
  }, [chain, tokenAddress]);

  const [formattedData, setFormattedData] = useState(undefined);

  const formatData = useCallback(
    (rawData: any) => {
      const formattedData = rawData.map((item: any, index: number) => {
        return {
          ...item,
          dailyVolumeUSD: item.dailyVolumeUSD.split('.')[0],
          date: new Date(item.date * 1000).toLocaleDateString(),
          dailyTxns: Math.abs(parseInt(item.dailyTxns)),
          logoURI: getLogoUri(item.id),
          ...item.token,
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
      return { loading, error, data: mockPairDayData };
    }

    return {
      loading,
      data: formattedData,
      error,
    };
  }

  return { loading, data: undefined, error };
};

export default useTokenData;

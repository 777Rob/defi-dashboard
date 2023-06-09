import _ from 'lodash';
import { mockTopTokens } from 'constants/mockTopTokens';
import { topTokens } from 'constants/topTokens';
import { useGetTopTokensBscLazyQuery } from 'generated/bsc-query-types';
import { customRound } from 'utils/customRound';
import { Chains } from 'utils/chain';
import { useEffect, useCallback, useState } from 'react';
import { getLogoUri } from 'utils/getLogoUri';
import { useChain } from './useChain';
import { ethClient } from 'apollo';
import { useGetTopTokensEthLazyQuery } from 'generated/eth-query-types';
export type TopToken = {
  name: string;
  symbol: string;
  address: string;
  liquidityUSD: number;
  volumeUSD: number;
  priceUSD: number;
  logoUri: string;
};
const yesterdayTimestampInSeconds = Math.floor((Date.now() - 30 * 60 * 60 * 1000) / 1000);

const useTopTokens = (): {
  loading: boolean;
  data: TopToken[] | undefined;
  error: any | undefined;
} => {
  const { chain } = useChain();
  const [formattedData, setFormattedData] = useState<TopToken[] | undefined>(undefined);

  const [
    getTopTokensBSC,
    { loading: loadingBSC, data: dataBSC, error: errorBSC, called: calledBSC },
  ] = useGetTopTokensBscLazyQuery({
    fetchPolicy: 'cache-first',
    variables: {
      topTokens: topTokens,
    },
    onCompleted: (data) => {
      if (data) {
        const formattedData = formatData(data.tokenDayDatas);
        setFormattedData(formattedData);
      }
    },
  });

  const [
    getTopTokensETH,
    { loading: loadingETH, data: dataETH, error: errorETH, called: calledETH },
  ] = useGetTopTokensEthLazyQuery({
    fetchPolicy: 'cache-first',
    variables: {
      date_gt: yesterdayTimestampInSeconds,
    },
    client: ethClient,
    onCompleted: (data) => {
      if (data) {
        const formattedData = formatData(data.tokenDayDatas);
        setFormattedData(formattedData);
      }
    },
  });

  let { loading, data, error, called } =
    chain == Chains.BSC
      ? { loading: loadingBSC, data: dataBSC, error: errorBSC, called: calledBSC }
      : { loading: loadingETH, data: dataETH, error: errorETH, called: calledETH };

  useEffect(() => {
    if (chain === Chains.BSC) {
      getTopTokensBSC();
    } else {
      getTopTokensETH();
    }
  }, [chain]);

  const formatData = useCallback(
    (rawData: any) => {
      let formattedData: TopToken[] = rawData.map((dataEntry: any, index: any) => {
        return {
          name: dataEntry.token.name,
          symbol: dataEntry.token.symbol,
          address: dataEntry.token.id,
          liquidityUSD: parseFloat(dataEntry.totalLiquidityUSD),
          volumeUSD: parseFloat(dataEntry.dailyVolumeUSD),
          priceUSD: customRound(parseFloat(dataEntry.token.derivedUSD)),
          logoUri: getLogoUri(dataEntry.token.id)!,
        };
      });
      const uniqueData = _.uniqBy(formattedData, 'address');
      console.log(uniqueData, 'uniqueData');
      return uniqueData;
    },
    [chain]
  );

  if (!loading && called) {
    /**
     * @NOTE: API Rate is limited in case limit is reached, use mock data
     */

    if (error || !formattedData) {
      console.log('Error fetching top tokens');
      console.error(error);
      return {
        loading,
        data: mockTopTokens,
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

export default useTopTokens;

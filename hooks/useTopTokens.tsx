import { gql, useQuery } from '@apollo/client';
import { topTokens } from 'data/topTokens';
import { getAddress } from 'ethers';
import { useGetTopTokensBscLazyQuery } from 'generated/bsc-query-types';
import { customRound } from 'utils';
import { Chains } from 'utils/chain';
import { useEffect } from 'react';
import { getLogoUri } from 'utils/getLogoUri';
import { useChain } from './useChain';
export type TopToken = {
  name: string;
  symbol: string;
  address: string;
  liquidityUSD: number;
  volumeUSD: number;
  priceUSD: number;
  logoUri: string;
};

const useTopTokens = (): {
  loading: boolean;
  data: TopToken[] | undefined;
  error: any | undefined;
} => {
  const { chain } = useChain();

  const [getTopTokensBSC, { loading, data, error, called }] = useGetTopTokensBscLazyQuery({
    fetchPolicy: 'cache-first',
    variables: {
      topTokens: topTokens,
    },
  });

  useEffect(() => {
    if (chain === Chains.BSC) {
      getTopTokensBSC();
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
      topTokens = data?.tokenDayDatas!;
    }

    let topTokensFormatted: TopToken[] = topTokens.map((dataEntry: any, index: any) => {
      return {
        name: dataEntry.token.name,
        symbol: dataEntry.token.symbol,
        address: dataEntry.token.id,
        liquidityUSD: parseFloat(dataEntry.totalLiquidityUSD),
        volumeUSD: parseFloat(dataEntry.dailyVolumeUSD),
        priceUSD: customRound(parseFloat(dataEntry.token.derivedUSD)),
        logoUri: getLogoUri(dataEntry.token.id),
      };
    });

    return {
      loading,
      data: topTokensFormatted,
      error,
    };
  }
  return { loading, data: undefined, error };
};

export default useTopTokens;

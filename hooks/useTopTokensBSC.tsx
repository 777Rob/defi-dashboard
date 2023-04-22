import { gql, useQuery } from '@apollo/client';
import { topTokens } from 'data/topTokens';
import { getAddress } from 'ethers';
import { customRound } from 'utils';

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
  /**
   * @NOTE: date is in unix timestamp in seconds (not milliseconds) !!!
   */

  const GET_TOP_TOKENS = gql`
    query tokens($topTokens: [ID!]) {
      tokenDayDatas(orderBy: dailyVolumeUSD, orderDirection: desc, where: { id_in: $topTokens }) {
        token {
          id
          name
          symbol
          totalLiquidity
          derivedUSD
        }
        dailyVolumeUSD
        totalLiquidityUSD
      }
    }
  `;

  const { loading, data, error, networkStatus } = useQuery(GET_TOP_TOKENS, {
    fetchPolicy: 'cache-first',
    variables: {
      topTokens: topTokens,
    },
  });

  console.log(data);
  const getLogoUri = (address: string) => {
    const checksumAddress = getAddress(address);
    const baseURL = `https://tokens.pancakeswap.finance/images/${checksumAddress}.png`;

    // const logoURL = `${baseURL}${checksumAddress}/logo.png`;

    return baseURL;
  };

  if (!loading) {
    /**
     * @NOTE: API Rate is limited in case limit is reached, use mock data
     */
    let topTokens = [];
    if (error) {
      topTokens = mockTopTokens;
    } else {
      topTokens = data.tokenDayDatas;
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
  return { loading, data, error };
};

export default useTopTokens;

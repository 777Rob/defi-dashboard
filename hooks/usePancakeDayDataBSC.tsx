import { gql, useLazyQuery, useQuery } from '@apollo/client';

type PancakeDataEntry = {
  date: Date;
  dailyVolumeUSD: string;
  dailyVolumeBNB: string;
  dailyVolumeUntracked: string;
  totalTransactions: string;
  id: number;
};

type PancakeDataEntryRequest = {
  date: number;
  dailyVolumeUSD: string;
  dailyVolumeBNB: string;
  dailyVolumeUntracked: string;
  totalTransactions: string;
  id: number;
};

const usePancakeDayDataBSC = () => {
  /**
   * @NOTE: date is in unix timestamp in seconds (not milliseconds) !!!
   */

  const GET_VOLUMES_BSC = gql`
    query GetPancakeDayDatasBSC {
      pancakeDayDatas(first: 120) {
        dailyVolumeUSD
        date
        totalTransactions
        id
        dailyVolumeBNB
        dailyVolumeUntracked
        totalLiquidityUSD
        totalTransactions
      }
    }
  `;

  const { loading, data, error, networkStatus } = useQuery(GET_VOLUMES_BSC, {
    fetchPolicy: 'cache-first',
  });

  if (!loading) {
    const { pancakeDayDatas } = data;

    const pancakeDayDatasFormatted: PancakeDataEntry = pancakeDayDatas.map(
      (dataEntry: PancakeDataEntryRequest) => {
        return {
          ...dataEntry,
          date: new Date(dataEntry.date * 1000),
        };
      }
    );

    console.log(pancakeDayDatasFormatted);

    return {
      loading,
      data: pancakeDayDatasFormatted,
      error,
    };
  }
  return { loading, data, error };
};

export default usePancakeDayDataBSC;

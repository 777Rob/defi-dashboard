import { gql, useLazyQuery, useQuery } from '@apollo/client';

type PancakeDataEntry = {
  date: Date;
  dailyVolumeUSD: string;
  dailyVolumeBNB: string;
  dailyVolumeUntracked: string;
  totalTransactions: string;
  id: number;
  uniqueUserWallets: number;
};

type PancakeDataEntryRequest = {
  date: number;
  dailyVolumeUSD: string;
  dailyVolumeBNB: string;
  dailyVolumeUntracked: string;
  totalTransactions: string;
  id: number;
};

const calculateDailyTransactionCount = (data) => {
  return data.map((item, index) => {
    if (index === 0) {
      return { ...item, dailyTransactionCount: item.transactionCount };
    } else {
      const dailyTransactionCount = item.transactionCount - data[index - 1].transactionCount;
      return { ...item, dailyTransactionCount };
    }
  });
};

const clipOutliers = (data: any, threshold = 500000000) => {
  return data.map((item: any) => {
    if (item.volume > threshold) {
      return { ...item, volume: threshold, clipped: true, originalVolume: item.volume };
    }
    return item;
  });
};

const usePancakeDayDataBSC = () => {
  /**
   * @NOTE: date is in unix timestamp in seconds (not milliseconds) !!!
   */

  const GET_VOLUMES_BSC = gql`
    query GetPancakeDayDatasBSC {
      pancakeDayDatas(first: "90") {
        dailyVolumeUSD
        date
        totalTransactions
        id
        dailyVolumeBNB
        dailyVolumeUntracked
        totalLiquidityUSD
      }
    }
  `;

  const { loading, data, error, networkStatus } = useQuery(GET_VOLUMES_BSC, {
    fetchPolicy: 'cache-first',
  });

  if (error) {
    console.log('TCL: usePancakeDayDataBSC -> error', error);
  }

  if (!loading) {
    const { pancakeDayDatas } = data;

    let pancakeDayDatasFormatted: PancakeDataEntry[] = pancakeDayDatas.map(
      (dataEntry: PancakeDataEntryRequest) => {
        return {
          ...dataEntry,
          date: new Date(dataEntry.date * 1000).toLocaleDateString(),
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

export default usePancakeDayDataBSC;

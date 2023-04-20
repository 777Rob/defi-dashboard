import { gql, useLazyQuery, useQuery } from '@apollo/client';
import { dummyData } from './dummyData';
import { PancakeDataEntryRequest, PancakeDataEntry } from './usePancakeDayDataBSC.dto';

const calculateDailyTransactionCount = (data: any[]) => {
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
      return { ...item, volume: threshold, clipped: true, originalVolume: item.dailyVolumeUSD };
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

  if (!loading) {
    /**
     * @NOTE: API Rate is limited in case limit is reached, use dummy data
     */

    let pancakeDayDatas: PancakeDataEntryRequest[] = [];
    if (error) {
      pancakeDayDatas = dummyData;
    } else {
      pancakeDayDatas = data.pancakeDayDatas;
    }

    let pancakeDayDatasFormatted: PancakeDataEntry[] = pancakeDayDatas.map(
      (dataEntry: PancakeDataEntryRequest, index: any) => {
        return {
          ...dataEntry,
          date: new Date(dataEntry.date * 1000).toLocaleDateString(),
          totalTransactions: Math.abs(
            parseInt(dataEntry.totalTransactions) -
              (parseInt(pancakeDayDatas[index - 1]?.totalTransactions) || 0)
          ),
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

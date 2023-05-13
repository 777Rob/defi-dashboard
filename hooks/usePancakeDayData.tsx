import { gql, useLazyQuery, useQuery } from '@apollo/client';
import { PancakeDataEntryRequest, PancakeDataEntry } from './usePancakeDayDataBSC.dto';
import { mockPancakeBSCVolumeData } from '../data/MockPancakeVolumeBSC';

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
      pancakeDayDatas(first: 90, orderBy: date, orderDirection: desc) {
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
     * @NOTE: API Rate is limited in case limit is reached, use mock data
     */

    let pancakeDayDatas: PancakeDataEntryRequest[] = [];
    if (error) {
      pancakeDayDatas = mockPancakeBSCVolumeData;
    } else {
      pancakeDayDatas = data.pancakeDayDatas;
    }

    let pancakeDayDatasFormatted: PancakeDataEntry[] = pancakeDayDatas.map(
      (dataEntry: PancakeDataEntryRequest, index: any) => {
        return {
          ...dataEntry,
          dailyVolumeUSD: dataEntry.dailyVolumeUSD.split('.')[0],
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

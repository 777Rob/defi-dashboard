export type PancakeDataEntry = {
  date: string;
  dailyVolumeUSD: string;
  dailyVolumeBNB: string;
  dailyVolumeUntracked: string;
  totalTransactions: string;
  id: string;
  clipped?: boolean;
  originalVolume?: string;
};

export type PancakeDataEntryRequest = {
  date: number;
  dailyVolumeUSD: string;
  dailyVolumeBNB: string;
  dailyVolumeUntracked: string;
  totalLiquidityUSD: string;
  totalTransactions: string;
  id: string;
};

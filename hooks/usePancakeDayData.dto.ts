export type PancakeDataEntry = {
  date: string;
  dailyVolumeUSD: string;
  dailyVolumeBNB: string;
  totalTransactions: number;
  id: string;
  clipped?: boolean;
  originalVolume?: string;
};

export type PancakeDataEntryRequest = {
  date: number;
  dailyVolumeUSD: string;
  dailyVolumeBNB: string;
  totalLiquidityUSD: string;
  totalTransactions: string;
  id: string;
};

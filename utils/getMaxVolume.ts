export const getMaxVolume = (data: any) => {
  return Math.max(...data.map((entry: any) => entry.dailyVolumeUSD));
};

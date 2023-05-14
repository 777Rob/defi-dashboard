export const clipOutliers = (data: any, threshold = 500000000) => {
  return data.map((item: any) => {
    if (item.volume > threshold) {
      return { ...item, volume: threshold, clipped: true, originalVolume: item.dailyVolumeUSD };
    }
    return item;
  });
};

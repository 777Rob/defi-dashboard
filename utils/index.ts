export const displayNumber = (number: number) => {
  if (number > 1000000000) {
    return `${(number / 1000000000).toFixed(2)}B`;
  } else if (number > 1000000) {
    return `${(number / 1000000).toFixed(2)}M`;
  } else if (number > 1000) {
    return `${(number / 1000).toFixed(2)}K`;
  } else {
    return number;
  }
};

export const calculateDailyTransactionCount = (data: any[]) => {
  return data.map((item, index) => {
    if (index === 0) {
      return { ...item, dailyTransactionCount: item.transactionCount };
    } else {
      const dailyTransactionCount = item.transactionCount - data[index - 1].transactionCount;
      return { ...item, dailyTransactionCount };
    }
  });
};

export const clipOutliers = (data: any, threshold = 500000000) => {
  return data.map((item: any) => {
    if (item.volume > threshold) {
      return { ...item, volume: threshold, clipped: true, originalVolume: item.dailyVolumeUSD };
    }
    return item;
  });
};

export const getMaxVolume = (data: any) => {
  return Math.max(...data.map((entry: any) => entry.dailyVolumeUSD));
};

export const generateTicks = (data: any) => {
  if (!data) return [];

  const tickInterval = getMaxVolume(data) / 5;

  return Array.from({ length: 6 }, (_, i) => i * tickInterval);
};

export const customRound = (value: any) => {
  try {
    let precision;
    if (Math.floor(value) !== 0) {
      precision = 2;
    } else {
      const decimalPart = value.toString().split('.')[1];
      let nonZeroCount = 0;
      let idx = 0;

      while (nonZeroCount < 2 && idx < decimalPart.length) {
        if (decimalPart[idx] !== '0') {
          nonZeroCount++;
        }
        idx++;
      }
      precision = idx;
    }
    const multiplier = Math.pow(10, precision);
    return Math.round(value * multiplier) / multiplier;
  } catch {
    return 0;
  }
};

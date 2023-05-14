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

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

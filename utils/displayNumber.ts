export const displayNumber = (number: number) => {
  if (typeof number === 'string') {
    number = parseFloat(number);
  }
  if (typeof number !== 'number') {
    console.log('Error displayNumber: wrong input type ', number);
    return number;
  }

  if (number > 1000000000) {
    return `${(number / 1000000000).toFixed(2)}B`;
  } else if (number > 1000000) {
    return `${(number / 1000000).toFixed(2)}M`;
  } else if (number > 1000) {
    return `${(number / 1000).toFixed(2)}K`;
  } else {
    return number.toFixed(2);
  }
};

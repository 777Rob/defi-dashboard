export const generateTicks = (data: any) => {
  if (!data) return [];

  const ticks = [];
  const step = 20000000;
  let max = 0;

  for (let i = 0; i < data.length; i++) {
    if (data[i].dailyVolumeUSD > max) {
      max = data[i].dailyVolumeUSD;
    }
  }

  for (let i = 0; i < max / step; i++) {
    ticks.push(step * i);
    console.log(max, ticks);
  }

  return ticks;
};

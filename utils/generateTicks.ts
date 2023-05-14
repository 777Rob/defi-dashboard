import { getMaxVolume } from './getMaxVolume';

export const generateTicks = (data: any) => {
  if (!data) return [];

  const tickInterval = getMaxVolume(data) / 5;

  return Array.from({ length: 6 }, (_, i) => i * tickInterval);
};

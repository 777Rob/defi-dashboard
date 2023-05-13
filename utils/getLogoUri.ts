import { getAddress } from 'ethers';

export const getLogoUri = (address: string) => {
  const checksumAddress = getAddress(address);
  const baseURL = `https://tokens.pancakeswap.finance/images/${checksumAddress}.png`;

  // const logoURL = `${baseURL}${checksumAddress}/logo.png`;

  return baseURL;
};

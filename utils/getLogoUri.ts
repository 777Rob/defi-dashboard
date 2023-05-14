import { getAddress } from 'ethers';
import { tokens } from 'data/tokens.json';

export const getLogoUri = (address: string) => {
  const checksumAddress = getAddress(address);

  // const baseUrlTrustwallet = `https://github.com/trustwallet/assets/tree/master/blockchains/binance/assets/${checksumAddress}/logo.png`;
  const token = tokens.find((token) => token.address === address);
  if (token) {
    const logoURI = token?.logoURI;
    return logoURI;
  }
  const logoUri = `https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/binance/assets/${checksumAddress}/logo.png`;

  return logoUri;
};

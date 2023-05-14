import { getAddress, isAddress } from 'ethers';
import tokenData from 'data/tokens.json';

export const getLogoUri = (address: string) => {
  const { tokens } = tokenData;
  if (!isAddress(address)) return null;

  const checksumAddress = getAddress(address);
  const token = tokens.find((token) => token.address === address);

  if (token) {
    const logoURI = token?.logoURI;
    return logoURI;
  }

  const logoUri = `https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/${checksumAddress}/logo.png`;

  return logoUri;
};

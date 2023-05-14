import React, { createContext, useState } from 'react';
import { Chains } from 'utils/chain';

export interface ChainContextType {
  chain: Chains;
  setChain: (chain: Chains) => void;
}

export const ChainContext = createContext<ChainContextType | undefined>(undefined);

export const ChainProvider = ({ children }: { children: React.ReactNode }) => {
  const [chain, setChain] = useState<Chains>(Chains.BSC);

  return <ChainContext.Provider value={{ chain, setChain }}>{children}</ChainContext.Provider>;
};

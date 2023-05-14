import { useContext } from 'react';
import { ChainContextType, ChainContext } from '../store/ChainProvider';

export function useChain(): ChainContextType {
  const context = useContext(ChainContext);

  if (!context) {
    throw new Error('useChain must be used within a ChainProvider');
  }

  return context;
}

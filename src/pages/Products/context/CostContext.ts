import { Dispatch, SetStateAction, createContext, useContext } from 'react';
import { CostTypes } from '../types/CostTypes';

interface CostContextValue {
  step: number;
  setStep: Dispatch<SetStateAction<number>>;
  cost: CostTypes | null;
  setCost: Dispatch<SetStateAction<CostTypes>>;
  handleNextStep: () => void;
}

const CostContext = createContext<CostContextValue>({} as CostContextValue);
export const CostProvider = CostContext.Provider;
export const CostConsumer = CostContext.Consumer;

export function useCosts(): CostContextValue {
  return useContext(CostContext);
}

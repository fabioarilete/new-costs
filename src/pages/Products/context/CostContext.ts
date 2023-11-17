import { Dispatch, SetStateAction, createContext, useContext } from 'react';
import { CostTypes } from '../types/CostTypes';

interface CostContextValue {
  step: number;
  setStep: Dispatch<SetStateAction<number>>;
  cost: CostTypes | null;
  setCost: Dispatch<SetStateAction<CostTypes>>;
  costs: CostTypes[];
  setCosts: Dispatch<SetStateAction<CostTypes[]>>;
  handleNextStep: () => void;
  handleLastStep: () => void;
  handleRemove(id: number): void;
}

const CostContext = createContext<CostContextValue>({} as CostContextValue);
export const CostProvider = CostContext.Provider;
export const CostConsumer = CostContext.Consumer;

export function useCosts(): CostContextValue {
  return useContext(CostContext);
}

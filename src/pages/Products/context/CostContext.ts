import { Dispatch, SetStateAction, createContext, useContext } from 'react';
import { CostTypes } from '../types/CostTypes';

interface CostContextValue {
  selectedCost: CostTypes | null;
  setSelectedCost: Dispatch<SetStateAction<CostTypes | null>>;
  cost: CostTypes | null;
  setCost: Dispatch<SetStateAction<CostTypes>>;
  costs: CostTypes[];
  setCosts: Dispatch<SetStateAction<CostTypes[]>>;
  modalCostForm: boolean;
  setModalCostForm: Dispatch<SetStateAction<boolean>>;
  handleRemove(id: string): void;
}

const CostContext = createContext<CostContextValue>({} as CostContextValue);
export const CostProvider = CostContext.Provider;
export const CostConsumer = CostContext.Consumer;

export function useCosts(): CostContextValue {
  return useContext(CostContext);
}

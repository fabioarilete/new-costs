import { Dispatch, SetStateAction, createContext, useContext } from 'react';
import { CostTypes } from '../types/CostTypes';
import { SourceMaterialTypes } from '../CostForms/SourceMaterialsForm/types/SourceMaterialTypes';

interface CostContextValue {
  selectedCost: CostTypes | null;
  setSelectedCost: Dispatch<SetStateAction<CostTypes | null>>;
  cost: CostTypes | null;
  setCost: Dispatch<SetStateAction<CostTypes>>;
  materialProduto: SourceMaterialTypes[];
  setMaterialProduto: Dispatch<SetStateAction<SourceMaterialTypes[]>>;
  costs: CostTypes[];
  setCosts: Dispatch<SetStateAction<CostTypes[]>>;
  headerForm: boolean;
  setHeaderForm: Dispatch<SetStateAction<boolean>>;
  sourceMaterialsForm: boolean;
  setSourceMaterialsForm: Dispatch<SetStateAction<boolean>>;
  sourceOperationsForm: boolean;
  setSourceOperationsForm: Dispatch<SetStateAction<boolean>>;
  handleRemove(id: string): void;
}

const CostContext = createContext<CostContextValue>({} as CostContextValue);
export const CostProvider = CostContext.Provider;
export const CostConsumer = CostContext.Consumer;

export function useCosts(): CostContextValue {
  return useContext(CostContext);
}

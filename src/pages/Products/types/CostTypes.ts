import { OperationTypes } from '../../Operations/types/OperationTypes';
import { MaterialTypes } from '../../rawMaterials/types/MaterialTypes';

export interface CostMaterial extends MaterialTypes {
  totalItemMaterial: number;
  obs: string;
  qt: string;
}

export interface CostTypes {
  cod: string;
  name: string;
  unid: string;
  qt: string;
  st: string;
  tipoProduto: string;
  sf_st: string;
  id: string;
  materiaisProduto: CostMaterial[];
  operacoesProduto: OperationTypes[];
}

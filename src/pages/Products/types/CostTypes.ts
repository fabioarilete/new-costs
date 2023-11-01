import { OperationTypes } from '../../Operations/types/OperationTypes';
import { MaterialTypes } from '../../rawMaterials/types/MaterialTypes';

export interface CostMaterial extends MaterialTypes {
  totalItemMaterial: number;
  obs: string;
  qt: string;
  id: number;
}

export interface CostOperation extends OperationTypes {
  totalItemOperation: number;
  obs: string;
  qt: string;
  cav: string;
  ciclo: string;
  id: number;
}

export interface CostTypes {
  cod: string;
  name: string;
  unid: string;
  qt: string;
  st: string;
  tipoProduto: string;
  sf_st: string;
  id: number;
  materiaisProduto: CostMaterial[];
  operacoesProduto: CostOperation[];
}

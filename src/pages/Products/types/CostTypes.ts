import { MarkUpTypes } from '../../MarkUps/types/MarkUpTypes';
import { OperationTypes } from '../../Operations/types/OperationTypes';
import { MaterialTypes } from '../../rawMaterials/types/MaterialTypes';
import { InfoTypes } from './InfoTypes';

export interface CostMaterial extends MaterialTypes {
  totalItemMaterial: number;
  obs: string;
  qt: string;
  uuid: string;
}

export interface CostOperation extends OperationTypes {
  totalItemOperation: number;
  obs: string;
  qt: string;
  cav: string;
  ciclo: string;
  uuid: string;
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
  totalOperations: number;
  totalMaterials: number;
  markUpProduct: MarkUpTypes | null;
  infoProduct: InfoTypes | null;
  totalCost: number;
  unitCost: number;
  priceList: number;
  mediumPrice: number;
}

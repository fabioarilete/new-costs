import formatCurrency from '../../../../../utils/formatCurrency';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import { CostOperation } from '../../../types/CostTypes';
import * as S from './Style';
type Props = {
  removeOperation(id: string): void;
  operation: CostOperation;
};

const ItemOperation = ({ operation, removeOperation }: Props) => {
  return (
    <S.Container>
      <div className="material">
        <p>{operation.name}</p>
      </div>
      <div className="obsOperation">
        {operation.tipoOperation === '0' ? (
          <p>
            {operation.obs} - Cav: {operation.cav} - Ciclo: {operation.ciclo}
          </p>
        ) : (
          <p>{operation.obs}</p>
        )}
      </div>
      <div className="qtMaterial">
        <p>
          {operation.tipoOperation === '0' ? (operation.valor / operation.totalItemOperation).toFixed(1) : operation.qt}
        </p>
      </div>

      <div className="valueMaterial">
        <p>{formatCurrency(operation.valor, 'BRL')}</p>
      </div>
      <div className="totalMaterial">
        <p>{formatCurrency(operation.totalItemOperation, 'BRL')}</p>
      </div>
      <button type="button" className="icon" onClick={() => removeOperation(operation.uuid)}>
        <RemoveCircleIcon />
      </button>
    </S.Container>
  );
};

export default ItemOperation;

import formatCurrency from '../../../../../utils/formatCurrency';
import { CostOperation } from '../../../types/CostTypes';
import * as S from './Style';
type Props = {
  handleRemove(id: string): void;
  operation: CostOperation;
};

const ItemOperation = ({ operation, handleRemove }: Props) => {
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
        <p>{operation.qt}</p>
      </div>

      <div className="valueMaterial">
        <p>{formatCurrency(operation.valor, 'BRL')}</p>
      </div>
      <div className="totalMaterial">
        <p>{formatCurrency(operation.totalItemOperation, 'BRL')}</p>
      </div>
    </S.Container>
  );
};

export default ItemOperation;

import * as S from './Style';
import formatCurrency from '../../../../utils/formatCurrency';
import ItemOperation from '../../Costs/new/Item/ItemOperation/ItemOperation';
import { CostTypes } from '../../types/CostTypes';

type Props = {
  removeOperation(operationUuid: string): void;
  cost: CostTypes;
};

const OperationCost = ({ cost, removeOperation }: Props) => {
  return (
    <S.Container>
      <div className="productOperationsContainer">
        <div className="productOperations">
          <div className="operation headerT">
            <h4>Operação</h4>
          </div>
          <div className="obsOperation headerT">
            <h4>Observação</h4>
          </div>
          <div className="qtOperation headerT">
            <h4>Quant</h4>
          </div>

          <div className="valueOperation headerT">
            <h4>Valor Hora</h4>
          </div>
          <div className="totalOperation headerT">
            <h4>Valor Total</h4>
          </div>
        </div>
        {cost.operacoesProduto.map(operation => (
          <ItemOperation operation={operation} removeOperation={removeOperation} key={operation.id} />
        ))}

        <div className="subtotals">
          <div className="totalTitle">Total - Operações</div>
          <div className="total">{formatCurrency(cost.totalOperations, 'BRL')}</div>
        </div>
      </div>
    </S.Container>
  );
};

export default OperationCost;

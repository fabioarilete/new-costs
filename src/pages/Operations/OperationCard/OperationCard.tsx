import formatCurrency from '../../../utils/formatCurrency';
import { useOperations } from '../context/OperationContext';
import { OperationTypes } from '../types/OperationTypes';
import * as S from './style';
import { BsPencil, BsFillTrashFill } from 'react-icons/bs';

type Props = {
  handleRemove(id: string): void;
  operation: OperationTypes;
};

const OperationCard = ({ operation, handleRemove }: Props) => {
  const { setSelectedOperation } = useOperations();

  function editOperation() {
    setSelectedOperation(operation);
  }

  function handleRemoveClick() {
    handleRemove(operation.id);
  }
  return (
    <S.Table>
      <tbody>
        <tr>
          <td className="td name">{operation.name}</td>
          <td className="td inicialPrice">
            {formatCurrency(operation.valor, 'BRL')} {operation.unid}
          </td>
          <td className="td actions">
            <S.ButtonEdit onClick={editOperation}>
              <BsPencil /> Editar
            </S.ButtonEdit>
            <S.ButtonRemove onClick={handleRemoveClick}>
              <BsFillTrashFill /> Excluir
            </S.ButtonRemove>
          </td>
        </tr>
      </tbody>
    </S.Table>
  );
};

export default OperationCard;

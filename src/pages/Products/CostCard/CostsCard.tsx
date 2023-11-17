import { CostTypes } from '../types/CostTypes';
import * as S from './style';
import { BsPencil, BsFillTrashFill } from 'react-icons/bs';

type Props = {
  handleRemove(id: number): void;
  cost: CostTypes;
};

const CostsCard = ({ cost, handleRemove }: Props) => {
  function editCost() {}
  function handleRemoveClick() {
    handleRemove(cost.id);
  }
  return (
    <S.ContainerCard>
      <S.Title>
        {cost.cod} - {cost.name}
      </S.Title>
      <S.Content></S.Content>
      <S.Actions>
        <S.ButtonEdit onClick={editCost}>
          <BsPencil /> Editar
        </S.ButtonEdit>
        <S.ButtonRemove onClick={handleRemoveClick}>
          <BsFillTrashFill /> Excluir
        </S.ButtonRemove>
      </S.Actions>
    </S.ContainerCard>
  );
};

export default CostsCard;

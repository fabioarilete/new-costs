import { useEffect, useMemo } from 'react';
import { useMarkUps } from '../context/MarkUpContext';
import { MarkUpTypes } from '../types/MarkUpTypes';
import * as S from './style';
import { BsPencil, BsFillTrashFill } from 'react-icons/bs';

type Props = {
  handleRemove(id: number): void;
  markUp: MarkUpTypes;
};

const MarkUpCard = ({ markUp, handleRemove }: Props) => {
  const { setSelectedMarkUp } = useMarkUps();

  function editMarkUp() {
    setSelectedMarkUp(markUp);
  }

  function handleRemoveClick() {
    handleRemove(markUp.id);
  }
  return (
    <S.Container>
      <S.Title>{markUp.name}</S.Title>
      <S.Content>
        <p>
          Impostos: <span>{markUp.impostos} %</span>
        </p>
        <p>
          Comissão: <span>{markUp.comissao} %</span>
        </p>
        <p>
          Administração: <span>{markUp.adm} %</span>
        </p>
        <p>
          Frete: <span>{markUp.frete} %</span>
        </p>
        <p>
          Financeiro: <span>{markUp.financeiro} %</span>
        </p>
        <p>
          Marketing: <span>{markUp.marketing} %</span>
        </p>
        <p>
          Promotores: <span>{markUp.promotores} %</span>
        </p>
        <p>
          Bonificações: <span>{markUp.bonificacoes} %</span>
        </p>
        <p>
          Lucro: <span>{markUp.lucro} %</span>
        </p>
        <br />
        <p>
          Coeficiente: <span>{markUp.coeficiente.toFixed(2)}</span>
        </p>
      </S.Content>
      <S.Actions>
        <S.ButtonEdit onClick={editMarkUp}>
          <BsPencil /> Editar
        </S.ButtonEdit>
        <S.ButtonRemove onClick={handleRemoveClick}>
          <BsFillTrashFill /> Excluir
        </S.ButtonRemove>
      </S.Actions>
    </S.Container>
  );
};

export default MarkUpCard;

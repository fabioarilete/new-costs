import formatCurrency from '../../../utils/formatCurrency';
import * as S from './style';
import { BsPencil, BsFillTrashFill } from 'react-icons/bs';

type Props = {
  id: string;
  name: string;
  preco: number;
  unid: string;
  nf: number;
  icms: number;
  frete: number;
  tipoFornecedor: string;
  total: number;
  handleRemove(id: string): void;
};

export const MaterialList = ({
  id,
  name,
  preco,
  nf,
  icms,
  frete,
  unid,
  tipoFornecedor,
  total,
  handleRemove,
}: Props) => {
  function handleRemoveClick() {
    handleRemove(id);
  }

  return (
    <S.Box>
      <S.ContainerList>
        <S.ContainerTitle>
          <S.Title>{name}</S.Title>
          <S.ContainerActions>
            <S.ButtonEdit href={`materiaPrima/${id}`}>
              <BsPencil /> Editar
            </S.ButtonEdit>

            <S.ButtonRemove onClick={handleRemoveClick}>
              <BsFillTrashFill /> Excluir
            </S.ButtonRemove>
          </S.ContainerActions>
        </S.ContainerTitle>
        <S.ContainerInfo>
          <S.Container20>
            <S.Span>Preço inicial:</S.Span>
            <S.P>
              {formatCurrency(preco, 'BRL')} {unid}
            </S.P>
          </S.Container20>

          <S.Container10>
            <S.Span>Frete:</S.Span>
            <S.P>{frete} %</S.P>
          </S.Container10>

          <S.Container10>
            <S.Span>NF:</S.Span>
            <S.P>{nf} %</S.P>
          </S.Container10>

          <S.Container10>
            <S.Span>ICMS:</S.Span>
            <S.P>{icms} %</S.P>
          </S.Container10>

          <S.Container10>
            <S.Span>Fornecedor:</S.Span>
            <S.P>{tipoFornecedor === '1' ? 'Simples' : 'Presumido'}</S.P>
          </S.Container10>

          <S.Container20>
            <S.Span>Preço final:</S.Span>
            <S.P>
              {formatCurrency(total, 'BRL')} {unid}
            </S.P>
          </S.Container20>
        </S.ContainerInfo>
      </S.ContainerList>
    </S.Box>
  );
};

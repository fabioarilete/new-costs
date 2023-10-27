import * as S from './style';
import { BsPencil, BsFillTrashFill } from 'react-icons/bs';
import { MaterialTypes } from '../types/MaterialTypes';
import { useMaterials } from '../context/MaterialContext';
import formatCurrency from '../../../utils/formatCurrency';

type Props = {
  handleRemove(id: string): void;
  material: MaterialTypes;
};

export const MaterialCard = ({ material, handleRemove }: Props) => {
  const { setSelectedMaterial } = useMaterials();

  function editMaterial() {
    setSelectedMaterial(material);
  }

  function handleRemoveClick() {
    handleRemove(material.id);
  }

  return (
    <S.Table>
      <tbody>
        <tr>
          <td className="td name">{material.name}</td>
          <td className="td inicialPrice">
            {formatCurrency(material.preco, 'BRL')} {material.unid}
          </td>
          <td className="td frete">{material.frete} %</td>
          <td className="td nf">{material.nf} %</td>
          <td className="td icms">{material.icms} %</td>
          <td className="td type">{material.tipoFornecedor === '1' ? 'Simples' : 'Presumido'}</td>
          <td className="td finalPrice">
            {formatCurrency(material.total, 'BRL')} {material.unid}
          </td>
          <td className="td actions">
            <S.ButtonEdit onClick={editMaterial}>
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

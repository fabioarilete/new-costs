import formatCurrency from '../../../../../../utils/formatCurrency';
import { CostMaterial } from '../../../../types/CostTypes';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';

import * as S from './Style';
type Props = {
  removeMaterial(id: string): void;
  material: CostMaterial;
};

const ItemMaterial = ({ material, removeMaterial }: Props) => {
  return (
    <S.Container>
      <div className="material">
        <p>{material.name}</p>
      </div>
      <div className="obsMaterial">
        <p>{material.obs}</p>
      </div>
      <div className="qtMaterial">
        <p>{material.qt}</p>
      </div>
      <div className="unitMaterial">
        <p>{material.unid}</p>
      </div>
      <div className="valueMaterial">
        <p>{formatCurrency(material.total, 'BRL')}</p>
      </div>
      <div className="totalMaterial">
        <p>{formatCurrency(material.totalItemMaterial, 'BRL')}</p>
      </div>
      <button type="button" className="icon" onClick={() => removeMaterial(material.uuid)}>
        <RemoveCircleIcon />
      </button>
    </S.Container>
  );
};

export default ItemMaterial;

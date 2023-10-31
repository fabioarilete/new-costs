import { CostTypes } from '../../../types/CostTypes';
import * as S from './Style';
type Props = {
  handleRemove(id: string): void;
  material: CostTypes;
};

const ItemMaterial = ({ material, handleRemove }: Props) => {
  return (
    <S.Container>
      <div className="material">
        <p>Matéria-Prima</p>
      </div>
      <div className="obsMaterial">
        <p>obs</p>
      </div>
      <div className="qtMaterial">
        <p>Quant</p>
      </div>
      <div className="unitMaterial">
        <p>Unid</p>
      </div>
      <div className="valueMaterial">
        <p>Valor Unitário</p>
      </div>
      <div className="totalMaterial">
        <p>Valor Total</p>
      </div>
    </S.Container>
  );
};

export default ItemMaterial;

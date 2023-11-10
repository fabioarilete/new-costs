import * as S from './Style';
import ItemMaterial from '../../Costs/new/Item/ItemMaterial/ItemMaterial';
import formatCurrency from '../../../../utils/formatCurrency';
import { CostTypes } from '../../types/CostTypes';

type Props = {
  removeMaterial(materialUuid: string): void;
  cost: CostTypes;
};

const MaterialCost = ({ cost, removeMaterial }: Props) => {
  return (
    <S.Container>
      <div className="productMaterialsContainer">
        <div className="productMaterials">
          <div className="material headerT">
            <h4>Matéria-Prima</h4>
          </div>
          <div className="obsMaterial headerT">
            <h4>Observação</h4>
          </div>
          <div className="qtMaterial headerT">
            <h4>Quant</h4>
          </div>
          <div className="unitMaterial headerT">
            <h4>Unid</h4>
          </div>
          <div className="valueMaterial headerT">
            <h4>Valor Unitário</h4>
          </div>
          <div className="totalMaterial headerT">
            <h4>Valor Total</h4>
          </div>
        </div>
        {cost.materiaisProduto.map(material => (
          <ItemMaterial material={material} removeMaterial={removeMaterial} key={material.id} />
        ))}

        <div className="subtotals">
          <div className="totalTitle">Total - Materiais</div>
          <div className="total">{formatCurrency(cost.totalMaterials, 'BRL')}</div>
        </div>
      </div>
    </S.Container>
  );
};

export default MaterialCost;

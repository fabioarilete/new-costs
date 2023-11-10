import * as S from './Style';
import { CostTypes } from '../../types/CostTypes';
type Props = {
  cost: CostTypes;
};

const MarkUpCost = ({ cost }: Props) => {
  return (
    <S.Container>
      <div className="coeficiente">
        <h4 className="coefTitle">{cost.markUpProduct?.name}</h4>
        <div className="coefContent">
          <p>
            Impostos: <span>{cost.markUpProduct?.impostos}%</span>
          </p>
          <p>
            Comissão: <span>{cost.markUpProduct?.comissao}%</span>
          </p>
          <p>
            Administração: <span>{cost.markUpProduct?.adm}%</span>
          </p>
          <p>
            Frete: <span>{cost.markUpProduct?.frete}%</span>
          </p>
          <p>
            Financeiro: <span>{cost.markUpProduct?.financeiro}%</span>
          </p>
          <p>
            Marketing: <span>{cost.markUpProduct?.marketing}%</span>
          </p>
          <p>
            Promotores: <span>{cost.markUpProduct?.promotores}%</span>
          </p>
          <p>
            Bonificações: <span>{cost.markUpProduct?.bonificacoes}%</span>
          </p>
          <p>
            Lucro: <span>{cost.markUpProduct?.lucro}%</span>
          </p>
          <br />
          <p>
            Coeficiente: <span>{cost.markUpProduct?.coeficiente.toFixed(2)}</span>
          </p>
        </div>
      </div>
    </S.Container>
  );
};

export default MarkUpCost;

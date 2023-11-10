import * as S from './Style';
import Logo from '../../../../assets/img/logosf.png';
import { CostTypes } from '../../types/CostTypes';

type Props = {
  handleRemove(id: number): void;
  cost: CostTypes;
};

const HeaderCost = ({ cost, handleRemove }: Props) => {
  return (
    <S.Container>
      <div className="incialContainer">
        <div className="logoContainer">
          <img src={Logo} alt="" />
          <p>Planilha de custos de produto</p>
        </div>
        <div className="imageContainer"></div>
        <div className="infoContainer">
          <p>
            Quant. Embalagem: <span>{cost.qt}</span>
          </p>
          <p>
            Sub. Tributária: <span>{cost.st === '0' ? 'Não' : 'Sim'}</span>{' '}
          </p>
          <p>
            SFCO x STTE: <span>{cost.sf_st === '0' ? 'Não' : 'Sim'}</span>{' '}
          </p>
          <p>
            Tipo Produto: <span>{cost.tipoProduto === '0' ? 'Revenda' : 'Produzido'}</span>{' '}
          </p>
        </div>
      </div>

      <div className="descriptionProduct">
        <div className="headerDescription">
          <div className="headerT cod">
            <h4>Código</h4>
          </div>
          <div className="headerT name">
            <h4>Descrição do Produto</h4>
          </div>
        </div>

        <div className="productDescription">
          <div className="_cod">
            <p>{cost.cod}</p>
          </div>
          <div className="_name">
            <p>{cost.name}</p>
          </div>
        </div>
      </div>
    </S.Container>
  );
};

export default HeaderCost;

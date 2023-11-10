import * as S from './Style';
import { CostTypes } from '../../types/CostTypes';
import formatCurrency from '../../../../utils/formatCurrency';
type Props = {
  cost: CostTypes;
};

const ResultsCost = ({ cost }: Props) => {
  const totalCost = Number(cost.totalCost);
  const unitCost = Number(cost.unitCost);
  const coef = Number(cost.markUpProduct?.coeficiente);
  const sugestedPrice = unitCost * coef;
  const priceList = Number(cost.infoProduct?.tabela);
  const mediumPrice = Number(cost.infoProduct?.precoMedio);
  const descount = ((priceList - mediumPrice) / priceList) * 100;

  return (
    <S.Container>
      <S.Line>
        <S.Description color="var(--color2)">Custo Total - {cost.unid}</S.Description>
        <S.Value color="var(--color2)">{formatCurrency(totalCost, 'BRL')}</S.Value>
      </S.Line>
      <S.Line>
        <S.Description color="var(--color2)">Custo - Unitário</S.Description>
        <S.Value color="var(--color2)">{formatCurrency(unitCost, 'BRL')}</S.Value>
      </S.Line>
      <br />
      <S.Line>
        <S.Description color="var(--color4)">Preço de venda unitário - Sugerido</S.Description>
        <S.Value color="var(--color4)">{formatCurrency(sugestedPrice, 'BRL')}</S.Value>
      </S.Line>
      <br />
      <S.Line>
        <S.Description color="var(--color3)">Preço de Tabela - Unitário</S.Description>
        <S.Value color="var(--color3)">{formatCurrency(priceList, 'BRL')}</S.Value>
      </S.Line>
      <S.Line>
        <S.Description color="var(--color3)">Margem de Lucro - Tabela</S.Description>
        <S.Value color="var(--color3)">%</S.Value>
      </S.Line>
      <br />
      <S.Line>
        <S.Description color="var(--color1)">Desconto Médio Aplicado</S.Description>
        <S.Value color="var(--color1)">{descount.toFixed(2)}%</S.Value>
      </S.Line>
      <br />
      <S.Line>
        <S.Description color="var(--color9)">Preço médio Vendido - Unitário</S.Description>
        <S.Value color="var(--color9)">{formatCurrency(mediumPrice, 'BRL')}</S.Value>
      </S.Line>
      <S.Line>
        <S.Description color="var(--color9)">Margem de Lucro - Real</S.Description>
        <S.Value color="var(--color9)">%</S.Value>
      </S.Line>
    </S.Container>
  );
};

export default ResultsCost;

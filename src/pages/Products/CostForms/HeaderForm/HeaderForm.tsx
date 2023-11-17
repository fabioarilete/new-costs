import React, { Dispatch, SetStateAction, useMemo, useState } from 'react';
import * as S from './Style';
import { CostTypes } from '../../types/CostTypes';
import { Input } from '../../../../components/form/Input';
import { SelectUnits } from '../../../../components/form/SelectUnits';
import { RadioButton } from '../../../../components/form/RadioButton';
import { MarkUpTypes } from '../../../MarkUps/types/MarkUpTypes';
import SelectOptions from '../../../../components/form/SelectOptions/SelectOptions';
import { useFetchMarkUps } from '../../Hooks/useFetchMarkUps';
import { InfoTypes } from '../../types/InfoTypes';
import { useFetchInfo } from '../../CostComponents/Hooks/useFetchInfo';

interface CostFormProps {
  cost: CostTypes;
  setCost: Dispatch<SetStateAction<CostTypes>>;
  handleValidation(cost: CostTypes): void;
  handleNextStep(step?: number): void;
}

const HeaderForm = ({ cost, setCost, handleValidation, handleNextStep }: CostFormProps) => {
  const [selectedMarkUpId, setSelectedMarkUpId] = useState<string>();
  const { markUps, loading, error } = useFetchMarkUps();
  const { informations } = useFetchInfo();

  const selectedProduct = useMemo((): InfoTypes | null => {
    if (!cost.cod) {
      return null;
    }

    const product = informations.find(item => item.cod === Number(cost.cod));

    if (!product) {
      return null;
    }

    return product;
  }, [cost.cod, informations]);

  const selectedMarkUp = useMemo((): MarkUpTypes | null => {
    if (!selectedMarkUpId) {
      return null;
    }

    const markUp = markUps.find(item => item.id === parseInt(selectedMarkUpId));

    if (!markUp) {
      return null;
    }

    return markUp;
  }, [selectedMarkUpId, markUps]);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    setCost(state => ({
      ...state,
      markUpProduct: selectedMarkUp,
      infoProduct: selectedProduct,
    }));
    handleNextStep();
  }

  return (
    <S.Container>
      <form className="form" onSubmit={handleSubmit}>
        <h1>Informações Iniciais</h1>
        <Input
          type="text"
          label="Cód"
          name="cod"
          placeholder="Informe o código do produto"
          value={cost.cod}
          onChange={event =>
            setCost({
              ...cost,
              cod: event.currentTarget.value,
            })
          }
        />
        <Input
          type="text"
          label="Produto"
          name="name"
          placeholder="Descreva o produto"
          value={cost.name}
          onChange={event =>
            setCost({
              ...cost,
              name: event.currentTarget.value.toUpperCase(),
            })
          }
        />
        <div className="unidQt">
          <div className="unit">
            <SelectUnits
              label="Unid"
              name="unid"
              value={cost.unid}
              onChange={event =>
                setCost({
                  ...cost,
                  unid: event.currentTarget.value,
                })
              }
            />
          </div>
          <div className="qt">
            <Input
              type="number"
              label="Quant. na Embalagem"
              name="qt"
              placeholder="Informe a quantidade"
              value={cost.qt}
              onChange={event =>
                setCost({
                  ...cost,
                  qt: event.target.value,
                })
              }
            />
          </div>
        </div>
        <SelectOptions
          value={selectedMarkUpId}
          onChange={event => setSelectedMarkUpId(event.target.value)}
          label="Mark Up"
        >
          {markUps.map(item => (
            <option value={item.id} key={item.id}>
              {item.name}
            </option>
          ))}
        </SelectOptions>
        <div className="containerOptions">
          <label className="radioButtonTitle">Tipo de produto</label>
          <div className="containerRadioButton">
            <RadioButton
              name="tipoProduto"
              label="Produzido"
              value={1}
              onChange={event =>
                setCost({
                  ...cost,
                  tipoProduto: event.target.value,
                })
              }
            />
            <RadioButton
              name="tipoProduto"
              label="Revenda"
              value={0}
              onChange={event =>
                setCost({
                  ...cost,
                  tipoProduto: event.target.value,
                })
              }
            />
          </div>
        </div>

        <div className="containerOptions">
          <label className="radioButtonTitle">Substituição Tributária</label>
          <div className="containerRadioButton">
            <RadioButton
              name="st"
              label="Sim"
              value={1}
              onChange={event =>
                setCost({
                  ...cost,
                  st: event.target.value,
                })
              }
            />
            <RadioButton
              name="st"
              label="Não"
              value={0}
              onChange={event =>
                setCost({
                  ...cost,
                  st: event.target.value,
                })
              }
            />
          </div>
        </div>

        <div className="containerOptions">
          <label className="radioButtonTitle">São Francisco x Santa Tereza</label>
          <div className="containerRadioButton">
            <RadioButton
              name="sf_st"
              label="Sim"
              value={1}
              onChange={event =>
                setCost({
                  ...cost,
                  sf_st: event.target.value,
                })
              }
            />
            <RadioButton
              name="sf_st"
              label="Não"
              value={0}
              onChange={event =>
                setCost({
                  ...cost,
                  sf_st: event.target.value,
                })
              }
            />
          </div>
        </div>
        <div className="containerButtons">
          <button className="btn" type="submit">
            Adicionar Materiais
          </button>
        </div>
      </form>
    </S.Container>
  );
};

export default HeaderForm;

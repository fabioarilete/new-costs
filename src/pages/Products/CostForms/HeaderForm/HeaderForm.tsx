import React, { Dispatch, SetStateAction, useEffect } from 'react';
import * as S from './Style';
import { CostTypes } from '../../types/CostTypes';
import { useCosts } from '../../context/CostContext';
import { Input } from '../../../../components/form/Input';
import { SelectUnits } from '../../../../components/form/SelectUnits';
import { RadioButton } from '../../../../components/form/RadioButton';

interface CostFormProps {
  cost: CostTypes;
  setCost: Dispatch<SetStateAction<CostTypes>>;
  handleSubmit(cost: CostTypes): void;
}

const HeaderForm = ({ cost, setCost, handleSubmit }: CostFormProps) => {
  const { selectedCost, setSelectedCost, setHeaderForm, setSourceMaterialsForm } = useCosts();
  useEffect(() => {
    if (!selectedCost) {
      return;
    }

    setCost(selectedCost);
  }, [setCost, selectedCost]);

  function _handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    handleSubmit({ ...cost });
    handleClose();
  }

  function handleClose() {
    if (selectedCost) {
      setSelectedCost(null);
    }

    setHeaderForm(false);
  }

  function openSourceMaterialForm() {
    setHeaderForm(false);
    setSourceMaterialsForm(true);
  }

  return (
    <S.Container>
      <form className="form" onSubmit={_handleSubmit}>
        <h1>Informações iniciais</h1>
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

        <Input
          type="number"
          label="Qt Emb"
          name="qt"
          placeholder="Informe a quantidade na embalagem"
          value={cost.qt}
          onChange={event =>
            setCost({
              ...cost,
              qt: parseInt(event.target.value),
            })
          }
        />
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
          <button className="btn" type="button" onClick={openSourceMaterialForm}>
            Adicionar Materiais
          </button>
          <button className="btn" type="button" onClick={handleClose}>
            Cancelar
          </button>
        </div>
      </form>
    </S.Container>
  );
};

export default HeaderForm;

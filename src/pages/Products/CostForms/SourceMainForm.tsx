import React, { Dispatch, SetStateAction, useEffect } from 'react';
import * as S from './style';
import { CostTypes } from '../types/CostTypes';
import { useCosts } from '../context/CostContext';
import { Input } from '../../../components/form/Input';
import { SelectUnits } from '../../../components/form/SelectUnits';
import { RadioButton } from '../../../components/form/RadioButton';

interface CostMainFormProps {
  cost: CostTypes;
  setCost: Dispatch<SetStateAction<CostTypes>>;
  handleSubmit(cost: CostTypes): void;
}

const SourceMainForm = ({ cost, setCost, handleSubmit }: CostMainFormProps) => {
  const { selectedCost, setSelectedCost, setModalSourceMainForm } = useCosts();
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

    setModalSourceMainForm(false);
  }

  return (
    <S.Container>
      <S.Form onSubmit={_handleSubmit}>
        <h1 className="title">Cadastro de Produto</h1>
        <Input
          type="text"
          label="Código do Produto"
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
          label="Descrição do produto"
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
          label="Unidade"
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
          label="Quantidade"
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
      </S.Form>
    </S.Container>
  );
};

export default SourceMainForm;

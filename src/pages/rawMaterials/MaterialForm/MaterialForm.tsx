import React, { Dispatch, SetStateAction, useEffect } from 'react';
import { MaterialTypes } from '../types/MaterialTypes';
import * as S from './style';
import { Input } from '../../../components/form/Input';
import { RadioButton } from '../../../components/form/RadioButton';
import { SelectUnits } from '../../../components/form/SelectUnits';
import { useMaterials } from '../context/MaterialContext';

interface FormMaterialsProps {
  material: MaterialTypes;
  setMaterial: Dispatch<SetStateAction<MaterialTypes>>;
  handleSubmit(material: MaterialTypes): void;
}

export const MaterialForm = ({ material, setMaterial, handleSubmit }: FormMaterialsProps) => {
  const { selectedMaterial, setSelectedMaterial, setModalNewMaterial } = useMaterials();

  useEffect(() => {
    if (!selectedMaterial) {
      return;
    }

    setMaterial(selectedMaterial);
  }, [setMaterial, selectedMaterial]);

  function _handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    handleSubmit({ ...material });
    handleClose();
  }

  function handleClose() {
    if (selectedMaterial) {
      setSelectedMaterial(null);
    }

    setModalNewMaterial(false);
  }

  return (
    <S.Container>
      <S.Form onSubmit={_handleSubmit}>
        <h1 className="title">Cadastro de Materiais</h1>
        <Input
          type="text"
          label="Descrição do material"
          name="name"
          placeholder="Descreva o material"
          value={material.name}
          onChange={event =>
            setMaterial({
              ...material,
              name: event.currentTarget.value.toUpperCase(),
            })
          }
        />
        <Input
          step={0.001}
          type="number"
          label="Valor"
          name="preco"
          placeholder="Informe o valor do material"
          value={material.preco}
          onChange={event =>
            setMaterial({
              ...material,
              preco: parseFloat(event.target.value),
            })
          }
        />

        <SelectUnits
          label="Unidade"
          name="unid"
          value={material.unid}
          onChange={event =>
            setMaterial({
              ...material,
              unid: event.currentTarget.value,
            })
          }
        />

        <Input
          step={0.01}
          type="number"
          label="Frete"
          name="frete"
          placeholder="Informe o % de Frete"
          value={material.frete}
          onChange={event =>
            setMaterial({
              ...material,
              frete: parseFloat(event.target.value),
            })
          }
        />

        <Input
          step={0.01}
          type="number"
          label="NF"
          name="nf"
          placeholder="Informe o % de NF"
          value={material.nf}
          onChange={event =>
            setMaterial({
              ...material,
              nf: parseFloat(event.target.value),
            })
          }
        />

        <Input
          step={0.01}
          type="number"
          label="Aliquota de ICMS"
          name="icms"
          placeholder="Informe o % de ICMS"
          value={material.icms}
          onChange={event =>
            setMaterial({
              ...material,
              icms: parseFloat(event.target.value),
            })
          }
        />

        <label className="radioButtonTitle">Tipo de Fornecedor</label>
        <div className="containerRadioButton">
          <RadioButton
            name="tipoFornecedor"
            label="Simples"
            value={1}
            onChange={event =>
              setMaterial({
                ...material,
                tipoFornecedor: event.target.value,
              })
            }
          />
          <RadioButton
            name="tipoFornecedor"
            label="Presumido"
            value={0}
            onChange={event =>
              setMaterial({
                ...material,
                tipoFornecedor: event.target.value,
              })
            }
          />
        </div>
        <div className="containerButtons">
          <button className="btn" type="submit">
            Cadastrar Material
          </button>
          <button className="btn" type="button" onClick={handleClose}>
            Cancelar
          </button>
        </div>
      </S.Form>
    </S.Container>
  );
};

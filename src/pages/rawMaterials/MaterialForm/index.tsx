import React, { Dispatch, SetStateAction } from 'react';
import { MaterialTypes } from '../types/MaterialTypes';
import * as S from './style';
import { Input } from '../../../components/form/Input';

interface FormMaterialsProps {
  material: MaterialTypes;
  setMaterial: Dispatch<SetStateAction<MaterialTypes>>;
  isOpen: boolean;
  setOpen: (isOpen: boolean) => void;
}

export const MaterialForm = ({ setOpen, isOpen, material, setMaterial }: FormMaterialsProps) => {
  if (isOpen) {
    return (
      <S.Container>
        <S.Form>
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

          <button className="btn" type="submit" onClick={() => setOpen(!isOpen)}>
            Cadastrar Material
          </button>
        </S.Form>
      </S.Container>
    );
  }
};

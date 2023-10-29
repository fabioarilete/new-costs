import React, { ChangeEvent, Dispatch, SetStateAction, useEffect, useState } from 'react';
import * as S from './Style';
import { useCosts } from '../../context/CostContext';
import { Input } from '../../../../components/form/Input';
import SelectOptions from '../../../../components/form/SelectOptions/SelectOptions';
import api from '../../../../api/api';
import { SourceMaterialTypes } from './types/SourceMaterialTypes';
import { MaterialTypes } from '../../../rawMaterials/types/MaterialTypes';

interface SourceMaterialForm {
  handleSubmit(materialProduto: SourceMaterialTypes): void;
  materialProduto: SourceMaterialTypes;
  setMaterialProduto: Dispatch<SetStateAction<SourceMaterialTypes>>;
}

const SourceMaterialsForm = ({ materialProduto, setMaterialProduto, handleSubmit }: SourceMaterialForm) => {
  const { setHeaderForm } = useCosts();
  const [materials, setMaterials] = useState<MaterialTypes[]>([]);

  useEffect(() => {
    api
      .get('materialsList')
      .then(res => {
        setMaterials(res.data);
      })
      .catch(err => console.log(err));
  }, []);

  function _handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    handleSubmit({ ...materialProduto });
    handleClose();
  }

  function handleChange(e: ChangeEvent<HTMLSelectElement>) {
    setMaterials({ ...materials, [e.target.name]: e.target.value });
  }

  function handleClose() {
    setHeaderForm(false);
  }

  return (
    <S.Container>
      <form className="form" onSubmit={_handleSubmit}>
        <h1>Adição de Materiais</h1>

        <SelectOptions onChange={handleChange} label="Matéria-prima">
          {materials.map(item => (
            <option value={item.id} key={item.id}>
              {item.name}
            </option>
          ))}
        </SelectOptions>

        <Input
          type="text"
          label="Observação"
          name="obs"
          placeholder="Faça uma Observação"
          value={materialProduto.obs}
          onChange={event =>
            setMaterialProduto({
              ...materialProduto,
              obs: event.currentTarget.value,
            })
          }
        />

        <Input
          type="number"
          label="Quantidade"
          name="qt"
          placeholder="Informe a quantidade"
          value={materialProduto.qt}
          onChange={event =>
            setMaterialProduto({
              ...materialProduto,
              qt: parseInt(event.target.value),
            })
          }
        />

        <div className="containerButtons">
          <button className="btn" type="submit">
            Cadastrar Material
          </button>
          <button className="btn" type="button" onClick={handleClose}>
            Cancelar
          </button>
        </div>
      </form>
    </S.Container>
  );
};

export default SourceMaterialsForm;

import { ChangeEvent, Dispatch, SetStateAction, useEffect, useMemo, useState } from 'react';
import * as S from './Style';
import { Input } from '../../../../components/form/Input';
import SelectOptions from '../../../../components/form/SelectOptions/SelectOptions';
import api from '../../../../api/api';
import { MaterialTypes } from '../../../rawMaterials/types/MaterialTypes';
import { CostMaterial, CostTypes } from '../../types/CostTypes';

interface CostTypesForm {
  cost: CostTypes;
  setCost: Dispatch<SetStateAction<CostTypes>>;
  handleValidation(cost: CostTypes): void;
  handleNextStep(step?: number): void;
}

const SourceMaterialsForm = ({ cost, setCost, handleNextStep, handleValidation }: CostTypesForm) => {
  const [materials, setMaterials] = useState<MaterialTypes[]>([]);
  const [selectedMaterialId, setSelectMaterialId] = useState<string>();
  const [qt, setQt] = useState('');
  const [obs, setObs] = useState('');

  useEffect(() => {
    api
      .get('materialsList')
      .then(res => {
        setMaterials(res.data);
      })
      .catch(err => console.log(err));
  }, []);

  const selectedMaterial = useMemo((): MaterialTypes | null => {
    const material = materials.find(item => item.id === selectedMaterialId);
    console.log(selectedMaterialId);
    console.log(material);
    console.log(materials);

    if (!material) {
      return null;
    }

    return material;
  }, [selectedMaterialId, materials]);
  console.log(selectedMaterial);

  function handleClose() {}

  function handleSubmit() {
    if (!selectedMaterial) {
      return;
    }

    const totalItemMaterial = parseInt(qt) * selectedMaterial.total;

    const data: CostMaterial = {
      ...selectedMaterial,
      totalItemMaterial,
      qt,
      obs,
    };

    setCost(state => ({
      ...state,
      materiaisProduto: [...state.materiaisProduto, data],
    }));
  }

  return (
    <S.Container>
      <form className="form" onSubmit={handleSubmit}>
        <h1>Adição de Materiais</h1>

        <SelectOptions
          value={selectedMaterialId}
          onChange={event => setSelectMaterialId(event.target.value)}
          label="Matéria-prima"
        >
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
          value={obs}
          onChange={event => setObs(event.target.value)}
        />

        <Input
          type="number"
          label="Quantidade"
          name="qt"
          placeholder="Informe a quantidade"
          value={qt}
          onChange={event => setQt(event.target.value)}
        />

        <div className="containerButtons">
          <button className="btn" type="submit" onClick={handleSubmit}>
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

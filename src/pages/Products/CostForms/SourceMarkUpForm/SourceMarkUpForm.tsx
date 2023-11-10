import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import * as S from './Style';
import SelectOptions from '../../../../components/form/SelectOptions/SelectOptions';
import api from '../../../../api/api';

import { MarkUpTypes } from '../../../MarkUps/types/MarkUpTypes';
import { CostTypes } from '../../types/CostTypes';

interface CostTypesForm {
  cost: CostTypes;
  setCost: Dispatch<SetStateAction<CostTypes>>;
  handleValidation(cost: CostTypes): void;
  handleLastStep(step?: number): void;
}

const SourceMarkUpForm = ({ cost, setCost, handleLastStep, handleValidation }: CostTypesForm) => {
  const [markUps, setMarkUps] = useState<MarkUpTypes[]>([]);
  const [selectedMarkUpId, setSelectedMarkUpId] = useState<string>();

  useEffect(() => {
    api
      .get('markUpsList')
      .then(res => {
        setMarkUps(res.data);
      })
      .catch(err => console.log(err));
  }, []);

  function handleSubmit() {}

  return (
    <S.Container>
      <form className="form" onSubmit={handleSubmit}>
        <h1>Escolha o Mark Up</h1>

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

        <div className="containerObs">
          <label>Observações:</label>
          <textarea name="obs" id="obs" cols={30} rows={3}></textarea>
        </div>

        <div className="containerButtons">
          <button className="btn" type="button" onClick={() => handleLastStep()}>
            Voltar
          </button>
          <button className="btn" type="submit" onClick={handleSubmit}>
            Concluir
          </button>
        </div>
      </form>
    </S.Container>
  );
};

export default SourceMarkUpForm;

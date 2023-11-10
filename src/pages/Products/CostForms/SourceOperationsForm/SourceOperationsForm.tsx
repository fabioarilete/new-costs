import { Dispatch, SetStateAction, useEffect, useMemo, useState } from 'react';
import * as S from './Style';
import { v4 as uuidv4 } from 'uuid';
import { Input } from '../../../../components/form/Input';
import SelectOptions from '../../../../components/form/SelectOptions/SelectOptions';
import api from '../../../../api/api';
import { CostOperation, CostTypes } from '../../types/CostTypes';
import formatCurrency from '../../../../utils/formatCurrency';
import { OperationTypes } from '../../../Operations/types/OperationTypes';

interface CostTypesForm {
  cost: CostTypes;
  setCost: Dispatch<SetStateAction<CostTypes>>;
  handleValidation(cost: CostTypes): void;
  handleLastStep(step?: number): void;
  handleNextStep(step?: number): void;
}

const SourceOperationsForm = ({ cost, setCost, handleNextStep, handleLastStep, handleValidation }: CostTypesForm) => {
  const [operations, setOperations] = useState<OperationTypes[]>([]);
  const [selectedOperationId, setSelectedOperationId] = useState<string>();
  const [qt, setQt] = useState('');
  const [obs, setObs] = useState('');
  const [cav, setCav] = useState('');
  const [ciclo, setCiclo] = useState('');

  useEffect(() => {
    api
      .get('operationsList')
      .then(res => {
        setOperations(res.data);
      })
      .catch(err => console.log(err));
  }, []);

  const selectedOperation = useMemo((): OperationTypes | CostOperation | null => {
    if (!selectedOperationId) {
      return null;
    }

    const operation = operations.find(item => item.id === Number(selectedOperationId));

    if (!operation) {
      return null;
    }

    return operation;
  }, [selectedOperationId, operations]);

  function handleSubmit(e: any) {
    e.preventDefault();
    if (!selectedOperation) {
      return;
    }
    let totalItemOperation = 0;
    selectedOperation.tipoOperation === '1'
      ? (totalItemOperation = selectedOperation.valor / Number(qt))
      : (totalItemOperation = selectedOperation.valor / (((3600 / Number(ciclo)) * Number(cav)) / Number(cost.qt)));

    const data: CostOperation = {
      ...selectedOperation,
      totalItemOperation,
      qt,
      obs,
      cav,
      ciclo,
      uuid: uuidv4(),
    };

    setCost(state => ({
      ...state,
      operacoesProduto: [...state.operacoesProduto, data],
    }));
    setObs('');
    setQt('');
    setCav('');
    setCiclo('');
  }

  return (
    <S.Container>
      <form className="form" onSubmit={handleSubmit}>
        <h1>Adição de Operações</h1>

        <SelectOptions
          value={selectedOperationId}
          onChange={event => setSelectedOperationId(event.target.value)}
          label="Operação"
        >
          {operations.map(item => (
            <option value={item.id} key={item.id}>
              {item.name}
            </option>
          ))}
        </SelectOptions>

        <div className="informations">
          <p>Preço da {selectedOperation && selectedOperation.unid}......</p>
          {selectedOperation && formatCurrency(selectedOperation.valor, 'BRL')}
        </div>

        {selectedOperation?.tipoOperation === '1' ? (
          <>
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
          </>
        ) : (
          selectedOperation?.tipoOperation === '0' && (
            <>
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
                label="Cavidades"
                name="cav"
                placeholder="Informe a quantidade"
                value={cav}
                onChange={event => setCav(event.target.value)}
              />

              <Input
                type="number"
                label="Ciclo"
                name="ciclo"
                placeholder="Informe a quantidade"
                value={ciclo}
                onChange={event => setCiclo(event.target.value)}
              />
            </>
          )
        )}

        <div className="containerButtons">
          <button className="btn" type="button" onClick={() => handleLastStep()}>
            Voltar
          </button>
          <button className="btn" type="submit" onClick={handleSubmit}>
            Adiconar mais Operação
          </button>
          <button className="btn" type="submit" onClick={() => handleNextStep()}>
            Config Final
          </button>
        </div>
      </form>
    </S.Container>
  );
};

export default SourceOperationsForm;

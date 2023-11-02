import { Dispatch, SetStateAction, useEffect, useMemo, useState } from 'react';
import * as S from './Style';
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
}

const SourceOperationsForm = ({ cost, setCost, handleLastStep, handleValidation }: CostTypesForm) => {
  const [operations, setOperations] = useState<OperationTypes[]>([]);
  const [selectedOperationId, setSelectOperationId] = useState<string>();
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

  const totalOperation = useMemo((): CostTypes | any => {
    if (!cost.operacoesProduto.length) {
      return 0;
    }
    const total = cost.operacoesProduto.reduce((next, item) => {
      const subTotal = item.totalItemOperation;
      return next + subTotal;
    }, 0);
    return total;
  }, [cost.operacoesProduto]);
  console.log(totalOperation);

  const selectedOperation = useMemo((): OperationTypes | CostOperation | null => {
    if (!selectedOperationId) {
      return null;
    }

    const operation = operations.find(item => item.id === parseInt(selectedOperationId));

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
      ? (totalItemOperation = selectedOperation.valor / parseInt(qt))
      : (totalItemOperation =
          selectedOperation.valor / (((3600 / parseInt(ciclo)) * parseInt(cav)) / parseInt(cost.qt)));

    const data: CostOperation = {
      ...selectedOperation,
      totalItemOperation,
      qt,
      obs,
      cav,
      ciclo,
    };

    setCost(state => ({
      ...state,
      totalOperations: totalOperation + totalItemOperation,
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
          onChange={event => setSelectOperationId(event.target.value)}
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
        </div>
      </form>
    </S.Container>
  );
};

export default SourceOperationsForm;

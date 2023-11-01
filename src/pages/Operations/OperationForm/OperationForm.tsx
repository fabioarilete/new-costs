import React, { Dispatch, SetStateAction, useEffect } from 'react';
import * as S from './style';
import { Input } from '../../../components/form/Input';
import { SelectUnits } from '../../../components/form/SelectUnits';
import { useOperations } from '../context/OperationContext';
import { OperationTypes } from '../types/OperationTypes';
import { RadioButton } from '../../../components/form/RadioButton';

interface FormOperationsProps {
  operation: OperationTypes;
  setOperation: Dispatch<SetStateAction<OperationTypes>>;
  handleSubmit(operation: OperationTypes): void;
}

export const OperationForm = ({ operation, setOperation, handleSubmit }: FormOperationsProps) => {
  const { selectedOperation, setSelectedOperation, setModalNewOperation } = useOperations();

  useEffect(() => {
    if (!selectedOperation) {
      return;
    }

    setOperation(selectedOperation);
  }, [setOperation, selectedOperation]);

  function _handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    handleSubmit({ ...operation });
    handleClose();
  }

  function handleClose() {
    if (selectedOperation) {
      setSelectedOperation(null);
    }

    setModalNewOperation(false);
  }

  return (
    <S.Container>
      <S.Form onSubmit={_handleSubmit}>
        <h1 className="title">Cadastro de Operações</h1>
        <Input
          type="text"
          label="Descrição da operação"
          name="name"
          placeholder="Descreva a operação"
          value={operation.name}
          onChange={event =>
            setOperation({
              ...operation,
              name: event.currentTarget.value.toUpperCase(),
            })
          }
        />
        <Input
          step={0.001}
          type="number"
          label="Valor"
          name="valor"
          placeholder="Informe o valor da operação"
          value={operation.valor}
          onChange={event =>
            setOperation({
              ...operation,
              valor: parseFloat(event.target.value),
            })
          }
        />

        <SelectUnits
          label="Unidade"
          name="unid"
          value={operation.unid}
          onChange={event =>
            setOperation({
              ...operation,
              unid: event.currentTarget.value,
            })
          }
        />

        <label className="radioButtonTitle">Tipo de Operação</label>
        <div className="containerRadioButton">
          <RadioButton
            name="tipoOperation"
            label="Comum"
            value={1}
            onChange={event =>
              setOperation({
                ...operation,
                tipoOperation: event.target.value,
              })
            }
          />
          <RadioButton
            name="tipoOperation"
            label="Injeção"
            value={0}
            onChange={event =>
              setOperation({
                ...operation,
                tipoOperation: event.target.value,
              })
            }
          />
        </div>

        <div className="containerButtons">
          <button className="btn" type="submit">
            Cadastrar Operação
          </button>
          <button className="btn" type="button" onClick={handleClose}>
            Cancelar
          </button>
        </div>
      </S.Form>
    </S.Container>
  );
};

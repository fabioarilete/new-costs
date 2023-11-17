import React, { useState } from 'react';
import api from '../../../../api/api';
import Container from '../../../../components/Container';

import { useOperations } from '../../context/OperationContext';
import { OperationTypes } from '../../types/OperationTypes';
import { OperationForm } from '../../OperationForm/OperationForm';
import { toast } from 'react-toastify';

const inicialState: OperationTypes = {
  id: '' as any,
  name: '',
  valor: '' as any,
  unid: '',
  tipoOperation: '',
};

const UpdateOperation = () => {
  const [operation, setOperation] = useState<OperationTypes>(inicialState);
  const { setOperations } = useOperations();

  function handleSubmit(operation: OperationTypes) {
    api
      .put(`operationsList/${operation.id}`, operation)
      .then(res => {
        setOperations(state =>
          state.map(item => {
            if (operation.id === item.id) {
              return operation;
            }
            return item;
          }),
        );
        toast.success('Opração editada com sucesso!');
      })
      .catch(err => console.log(err));
  }

  return (
    <Container>
      <OperationForm operation={operation} setOperation={setOperation} handleSubmit={handleSubmit} />
    </Container>
  );
};

export default UpdateOperation;

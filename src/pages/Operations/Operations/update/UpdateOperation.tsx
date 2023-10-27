import React, { useState } from 'react';
import api from '../../../../api/api';
import Container from '../../../../components/Container';

import { useOperations } from '../../context/OperationContext';
import { OperationTypes } from '../../types/OperationTypes';
import { OperationForm } from '../../OperationForm/OperationForm';

const inicialState: OperationTypes = {
  id: '',
  name: '',
  valor: '' as any,
  unid: '',
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

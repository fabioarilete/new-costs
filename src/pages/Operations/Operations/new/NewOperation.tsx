import React, { useState } from 'react';
import api from '../../../../api/api';
import Container from '../../../../components/Container';

import { OperationTypes } from '../../types/OperationTypes';
import { useOperations } from '../../context/OperationContext';
import { OperationForm } from '../../OperationForm/OperationForm';
import { Modal, ModalTarget } from '../../../../components/Modal/Modal';

const inicialState: OperationTypes = {
  id: '',
  name: '',
  valor: '' as any,
  unid: '',
};

const NewOperation = () => {
  const [operation, setOperation] = useState<OperationTypes>(inicialState);
  const { setOperations } = useOperations();

  function addOperation(operation: OperationTypes) {
    const data = { ...operation };
    api
      .post('operationsList', data)
      .then(res => {
        setOperations(state => [...state, { ...data, id: res.data.id }]);
      })
      .catch(err => console.log(err));
  }

  function handleSubmit(operation: OperationTypes) {
    const { name, valor, unid } = operation;
    if (!name || !valor || !unid) {
      window.alert('Preencha todos os campos!');
      return;
    }
    addOperation(operation);
  }
  console.log(operation);

  return (
    <Modal target={ModalTarget.MODAL}>
      <Container>
        <OperationForm operation={operation} setOperation={setOperation} handleSubmit={handleSubmit} />
      </Container>
    </Modal>
  );
};

export default NewOperation;

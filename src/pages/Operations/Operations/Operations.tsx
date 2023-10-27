import * as S from './style';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Container from '../../../components/Container';

import api from '../../../api/api';
import { OperationTypes } from '../types/OperationTypes';
import OperationCard from '../OperationCard/OperationCard';
import { OperationProvider } from '../context/OperationContext';
import NewOperation from './new/NewOperation';
import UpdateOperation from './update/UpdateOperation';

const inicialState: OperationTypes = {
  id: '',
  name: '',
  valor: '' as any,
  unid: '',
};

const Operations = () => {
  const [operation, setOperation] = useState<OperationTypes>(inicialState);
  const [operations, setOperations] = useState<any[]>([]);
  const [selectedOperation, setSelectedOperation] = useState<OperationTypes | null>(null);
  const [modalNewOperation, setModalNewOperation] = useState(false);

  const location = useLocation();
  let message = '';
  if (location.state) {
    message = location.state.message;
  }

  useEffect(() => {
    api
      .get('operationsList')
      .then(res => {
        setOperations(res.data);
      })
      .catch(err => console.log(err));
  }, []);

  function openOperationForm() {
    setModalNewOperation(true);
  }

  function handleRemove(id: string) {
    api
      .delete(`operationsList/${id}`)
      .then(() => {
        setOperations(state => state.filter(operation => operation.id !== id));
      })
      .catch(err => console.log(err));
  }

  return (
    <OperationProvider
      value={{
        handleRemove,
        setOperations,
        operations,
        modalNewOperation,
        setModalNewOperation,
        selectedOperation,
        setSelectedOperation,
        operation,
        setOperation,
      }}
    >
      <Container>
        <S.Header>
          <div className="head">
            <h1 className="title">Operações</h1>
            <button className="btn" onClick={openOperationForm}>
              Cadastrar Operação
            </button>
          </div>

          <div className="headerOperations">
            <div className="td name">Descrição da Operação</div>
            <div className="td valor">Valor da Operação</div>
            <div className="td actions">Ações</div>
          </div>
          {modalNewOperation && <NewOperation />}

          {selectedOperation && <UpdateOperation />}
        </S.Header>
        <S.ContainerList>
          {operations.map(operation => (
            <OperationCard operation={operation} handleRemove={handleRemove} key={operation.id} />
          ))}
        </S.ContainerList>
      </Container>
    </OperationProvider>
  );
};

export default Operations;

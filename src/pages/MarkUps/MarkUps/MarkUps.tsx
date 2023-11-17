import * as S from './style';
import { useEffect, useState } from 'react';
import Container from '../../../components/Container';

import api from '../../../api/api';
import { MarkUpTypes } from '../types/MarkUpTypes';
import { MarkUpProvider } from '../context/MarkUpContext';
import NewMarkUp from './new/NewMarkUp';
import UpDateMarkUp from './update/UpddateMarkUp';
import MarkUpCard from '../MarkUpCard/MarkUpCard';
import { toast } from 'react-toastify';

const inicialState: MarkUpTypes = {
  id: '' as any,
  name: '',
  impostos: '',
  comissao: '',
  adm: '',
  frete: '',
  financeiro: '',
  promotores: '',
  marketing: '',
  bonificacoes: '',
  lucro: '',
  coeficiente: '' as any,
};

const MarkUps = () => {
  const [markUp, setMarkUp] = useState<MarkUpTypes>(inicialState);
  const [markUps, setMarkUps] = useState<any[]>([]);
  const [selectedMarkUp, setSelectedMarkUp] = useState<MarkUpTypes | null>(null);
  const [modalNewMarkUp, setModalNewMarkUp] = useState(false);

  useEffect(() => {
    api
      .get('markUpsList')
      .then(res => {
        setMarkUps(res.data);
      })
      .catch(err => console.log(err));
  }, []);

  function openMarkUpForm() {
    setModalNewMarkUp(true);
  }

  function handleRemove(id: number) {
    api
      .delete(`markUpsList/${id}`)
      .then(() => {
        setMarkUps(state => state.filter(markUp => markUp.id !== id));
        toast.success('Mark Up removido com sucesso!');
      })
      .catch(err => console.log(err));
  }

  return (
    <MarkUpProvider
      value={{
        handleRemove,
        setMarkUps,
        markUps,
        modalNewMarkUp,
        setModalNewMarkUp,
        selectedMarkUp,
        setSelectedMarkUp,
        markUp,
        setMarkUp,
      }}
    >
      <Container>
        <S.Header>
          <div className="head">
            <h1 className="title">Mark Ups</h1>
            <button className="btn" onClick={openMarkUpForm}>
              Cadastrar Mark Up
            </button>
          </div>

          {modalNewMarkUp && <NewMarkUp />}

          {selectedMarkUp && <UpDateMarkUp />}
        </S.Header>
        <S.ContainerList>
          {markUps.map(markUp => (
            <MarkUpCard markUp={markUp} handleRemove={handleRemove} key={markUp.id} />
          ))}
        </S.ContainerList>
      </Container>
    </MarkUpProvider>
  );
};

export default MarkUps;

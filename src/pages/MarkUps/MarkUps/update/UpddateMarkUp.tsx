import React, { useState } from 'react';
import api from '../../../../api/api';
import Container from '../../../../components/Container';
import { MarkUpTypes } from '../../types/MarkUpTypes';
import { useMarkUps } from '../../context/MarkUpContext';
import { MarkUpsForm } from '../../MarkUpsForm/MarkUpsForm';
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

const UpDateMarkUp = () => {
  const [markUp, setMarkUp] = useState<MarkUpTypes>(inicialState);
  const { setMarkUps } = useMarkUps();

  function handleSubmit(markUp: MarkUpTypes) {
    api
      .put(`markUpsList/${markUp.id}`, markUp)
      .then(res => {
        setMarkUps(state =>
          state.map(item => {
            if (markUp.id === item.id) {
              return markUp;
            }
            return item;
          }),
        );
        toast.success('Mark Up editado com sucesso!');
      })
      .catch(err => console.log(err));
  }

  return (
    <Container>
      <MarkUpsForm markUp={markUp} setMarkUp={setMarkUp} handleSubmit={handleSubmit} />
    </Container>
  );
};

export default UpDateMarkUp;

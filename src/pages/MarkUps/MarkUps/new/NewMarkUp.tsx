import React, { useState } from 'react';
import api from '../../../../api/api';
import Container from '../../../../components/Container';
import { Modal, ModalTarget } from '../../../../components/Modal/Modal';
import { MarkUpTypes } from '../../types/MarkUpTypes';
import { useMarkUps } from '../../context/MarkUpContext';
import { MarkUpsForm } from '../../MarkUpsForm/MarkUpsForm';
import { UseMarkUpCoef } from '../hooks/useMarkUpCoef';
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

const NewMarkUp = () => {
  const [markUp, setMarkUp] = useState<MarkUpTypes>(inicialState);
  const { setMarkUps } = useMarkUps();
  const coef = UseMarkUpCoef(markUp);

  function addMarkUp(markUp: MarkUpTypes) {
    const data = { ...markUp, coeficiente: coef };
    api
      .post('markUpsList', data)
      .then(res => {
        setMarkUps(state => [...state, { ...data, id: res.data.id }]);
        toast.success('Mark Up cadastrado com sucesso!');
      })
      .catch(err => console.log(err));
  }

  function handleSubmit(markUp: MarkUpTypes) {
    const { impostos, comissao, adm, frete, financeiro, marketing, promotores, bonificacoes, lucro } = markUp;
    if (
      !impostos ||
      !comissao ||
      !adm ||
      !frete ||
      !financeiro ||
      !marketing ||
      !promotores ||
      !bonificacoes ||
      !lucro
    ) {
      toast.error('Preencher todos os campos!');
      return;
    }
    addMarkUp(markUp);
  }

  return (
    <Modal target={ModalTarget.MODAL}>
      <Container>
        <MarkUpsForm markUp={markUp} setMarkUp={setMarkUp} handleSubmit={handleSubmit} />
      </Container>
    </Modal>
  );
};

export default NewMarkUp;

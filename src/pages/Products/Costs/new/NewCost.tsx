import React, { useState } from 'react';
import * as S from './Style';
import api from '../../../../api/api';
import { CostTypes } from '../../types/CostTypes';
import { useCosts } from '../../context/CostContext';
import HeaderForm from '../../CostForms/HeaderForm/HeaderForm';

const inicialCostState: CostTypes = {
  cod: '',
  name: '',
  unid: '',
  qt: '' as any,
  st: '',
  tipoProduto: '',
  sf_st: '',
  id: '',
  materiaisProduto: [],
  operacoesProduto: [],
};

const NewCost = () => {
  const [cost, setCost] = useState<CostTypes>(inicialCostState);
  const { setCosts } = useCosts();
  const totalMaterial = 0;

  function addCost(cost: CostTypes) {
    const data = { ...cost, total: totalMaterial };
    api
      .post('products', data)
      .then(res => {
        setCosts(state => [...state, { ...data, id: res.data.id }]);
      })
      .catch(err => console.log(err));
  }

  function handleSubmit(cost: CostTypes) {
    const { cod, name, unid, qt, st, tipoProduto, sf_st } = cost;
    if (!cod || !name || !unid || !qt || !st || !tipoProduto || !sf_st) {
      window.alert('Preencha todos os campos!');
      return;
    }
    addCost(cost);
  }

  return (
    <S.Container>
      <div className="containerTitle">
        <h1 className="title">Cadastro de Produto</h1>
      </div>
      <HeaderForm cost={cost} setCost={setCost} handleSubmit={handleSubmit} />
    </S.Container>
  );
};

export default NewCost;

import * as S from './style';
import React, { useEffect, useState } from 'react';
import { CostProvider } from '../context/CostContext';
import Container from '../../../components/Container';
import { CostTypes } from '../types/CostTypes';
import api from '../../../api/api';
import CostsCard from '../CostCard/CostsCard';
import NewCost from './new/NewCost';

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

const Costs = () => {
  const [cost, setCost] = useState<CostTypes>(inicialCostState);
  const [costs, setCosts] = useState<any[]>([]);
  const [selectedCost, setSelectedCost] = useState<CostTypes | null>(null);
  const [modalCostForm, setModalCostForm] = useState(false);

  useEffect(() => {
    api
      .get('products')
      .then(res => {
        setCosts(res.data);
      })
      .catch(err => console.log(err));
  }, []);

  function openCostForm() {
    setModalCostForm(true);
  }

  function handleRemove(id: string) {
    api
      .delete(`products/${id}`)
      .then(() => {
        setCosts(state => state.filter(cost => cost.id !== id));
      })
      .catch(err => console.log(err));
  }

  return (
    <CostProvider
      value={{
        selectedCost,
        setSelectedCost,
        cost,
        setCost,
        costs,
        setCosts,
        modalCostForm,
        setModalCostForm,
        handleRemove,
      }}
    >
      {modalCostForm && <NewCost />}
      {/* {selectedCost && <UpdateMaterial />} */}

      <Container>
        <S.Header>
          <h1 className="title">Custos</h1>
          <a href="/newCost">
            <button className="btn">Cadastrar Novo Custo</button>
          </a>
        </S.Header>

        <S.ContainerCards>
          {/* {costs.map(cost => (
            <CostsCard cost={cost} handleRemove={handleRemove} key={cost.id} />
          ))} */}
        </S.ContainerCards>
      </Container>
    </CostProvider>
  );
};

export default Costs;

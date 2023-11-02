import * as S from './style';
import React, { useEffect, useState } from 'react';
import Container from '../../../components/Container';
import { CostTypes } from '../types/CostTypes';
import api from '../../../api/api';
import { Link } from 'react-router-dom';

const inicialCostState: CostTypes = {
  cod: '',
  name: '',
  unid: '',
  qt: '' as any,
  st: '',
  tipoProduto: '',
  sf_st: '',
  id: '' as any,
  materiaisProduto: [],
  operacoesProduto: [],
  totalOperations: '' as any,
  totalMaterials: '' as any,
};

const Costs = () => {
  const [cost, setCost] = useState<CostTypes>(inicialCostState);
  const [costs, setCosts] = useState<any[]>([]);
  const [selectedCost, setSelectedCost] = useState<CostTypes | null>(null);

  useEffect(() => {
    api
      .get('products')
      .then(res => {
        setCosts(res.data);
      })
      .catch(err => console.log(err));
  }, []);

  function handleRemove(id: string) {
    api
      .delete(`products/${id}`)
      .then(() => {
        setCosts(state => state.filter(cost => cost.id !== id));
      })
      .catch(err => console.log(err));
  }

  return (
    <Container>
      <S.Header>
        <h1 className="title">Custos</h1>
        <Link to="/newCost">
          <button className="btn">Cadastrar Novo Custo</button>
        </Link>
      </S.Header>

      <S.ContainerCards>
        {/* {costs.map(cost => (
            <CostsCard cost={cost} handleRemove={handleRemove} key={cost.id} />
          ))} */}
      </S.ContainerCards>
    </Container>
  );
};

export default Costs;

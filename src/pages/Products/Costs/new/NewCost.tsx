import React, { useState } from 'react';
import * as S from './Style';
import api from '../../../../api/api';
import { CostTypes } from '../../types/CostTypes';
import { CostProvider } from '../../context/CostContext';
import HeaderForm from '../../CostForms/HeaderForm/HeaderForm';
import SourceMaterialsForm from '../../CostForms/SourceMaterialsForm/SourceMaterialsForm';
import { MaterialTypes } from '../../../rawMaterials/types/MaterialTypes';
import { SourceMaterialTypes } from '../../CostForms/SourceMaterialsForm/types/SourceMaterialTypes';

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
  const [costs, setCosts] = useState<any[]>([]);
  const [selectedCost, setSelectedCost] = useState<CostTypes | null>(null);
  const [headerForm, setHeaderForm] = useState(true);
  const [sourceMaterialsForm, setSourceMaterialsForm] = useState(false);
  const [materialProduto, setMaterialProduto] = useState<SourceMaterialTypes[]>([]);
  const [sourceOperationsForm, setSourceOperationsForm] = useState(false);
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

  function handleSubmit(cost: CostTypes, materialProduto: MaterialTypes) {
    const { cod, name, unid, qt, st, tipoProduto, sf_st } = cost;
    if (!cod || !name || !unid || !qt || !st || !tipoProduto || !sf_st) {
      window.alert('Preencha todos os campos!');
      return;
    }
    addCost(cost);
    addMaterials(materialProduto);
  }

  function addMaterials(materialProduto: MaterialTypes) {
    const data = { ...materialProduto, total: totalMaterial };
    api
      .post('products/materiaisProduto', data)
      .then(res => {
        setMaterialProduto(state => [...state, { ...data, id: res.data.id }]);
      })
      .catch(err => console.log(err));
  }

  function openHeaderForm() {
    setHeaderForm(true);
  }

  function handleRemove() {}

  return (
    <CostProvider
      value={{
        selectedCost,
        setSelectedCost,
        materialProduto,
        setMaterialProduto,
        cost,
        setCost,
        costs,
        setCosts,
        headerForm,
        setHeaderForm,
        sourceMaterialsForm,
        setSourceMaterialsForm,
        sourceOperationsForm,
        setSourceOperationsForm,
        handleRemove,
      }}
    >
      <S.Container>
        <div className="containerTitle">
          <h1 className="title">Cadastro de Produto</h1>
        </div>
        <div className="content">
          <div className="headers">
            {headerForm && <HeaderForm cost={cost} setCost={setCost} handleSubmit={handleSubmit} />}
            {sourceMaterialsForm && (
              <SourceMaterialsForm
                materialProduto={materialProduto}
                setMaterialProduto={setMaterialProduto}
                _handleSubmit={_handleSubmit}
              />
            )}
          </div>
          <div className="containerCost"></div>
        </div>
      </S.Container>
    </CostProvider>
  );
};

export default NewCost;

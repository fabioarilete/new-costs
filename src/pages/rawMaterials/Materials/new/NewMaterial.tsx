import React, { useState } from 'react';
import api from '../../../../api/api';
import { MaterialTypes } from '../../types/MaterialTypes';
import Container from '../../../../components/Container';
import { MaterialForm } from '../../MaterialForm/MaterialForm';
import { useMaterialTotal } from '../hooks/useMaterialTotal';
import { useMaterials } from '../../context/MaterialContext';
import { Modal, ModalTarget } from '../../../../components/Modal/Modal';

const inicialState: MaterialTypes = {
  id: '',
  name: '',
  preco: '' as any,
  frete: '' as any,
  icms: '' as any,
  nf: '' as any,
  tipoFornecedor: '',
  total: '' as any,
  unid: '',
};

const NewMaterial = () => {
  const [material, setMaterial] = useState<MaterialTypes>(inicialState);
  const { setMaterials } = useMaterials();
  const totalMaterial = useMaterialTotal(material);

  function addMaterial(material: MaterialTypes) {
    const data = { ...material, total: totalMaterial };
    api
      .post('materialsList', data)
      .then(res => {
        setMaterials(state => [...state, { ...data, id: res.data.id }]);
      })
      .catch(err => console.log(err));
  }

  function handleSubmit(material: MaterialTypes) {
    const { name, preco, icms, frete, nf, tipoFornecedor } = material;
    if (!name || !preco || !icms || !frete || !nf || !tipoFornecedor) {
      window.alert('Preencha todos os campos!');
      return;
    }
    addMaterial(material);
  }

  return (
    <Modal target={ModalTarget.MODAL}>
      <Container>
        <MaterialForm material={material} setMaterial={setMaterial} handleSubmit={handleSubmit} />
      </Container>
    </Modal>
  );
};

export default NewMaterial;

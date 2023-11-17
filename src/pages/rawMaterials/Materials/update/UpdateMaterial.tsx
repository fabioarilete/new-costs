import React, { useState } from 'react';
import api from '../../../../api/api';
import { MaterialTypes } from '../../types/MaterialTypes';
import Container from '../../../../components/Container';
import { MaterialForm } from '../../MaterialForm/MaterialForm';
import { useMaterials } from '../../context/MaterialContext';
import { useMaterialTotal } from '../hooks/useMaterialTotal';
import { toast } from 'react-toastify';

const inicialState: MaterialTypes = {
  id: '' as any,
  name: '',
  preco: '' as any,
  frete: '' as any,
  icms: '' as any,
  nf: '' as any,
  tipoFornecedor: '',
  total: '' as any,
  unid: '',
};

const UpdateMaterial = () => {
  const [material, setMaterial] = useState<MaterialTypes>(inicialState);
  const { setMaterials } = useMaterials();
  const totalMaterial = useMaterialTotal(material);

  function handleSubmit(material: MaterialTypes) {
    const data = { ...material, total: totalMaterial };
    api
      .put(`materialsList/${material.id}`, data)
      .then(res => {
        setMaterials(state =>
          state.map(item => {
            if (material.id === item.id) {
              return material;
            }
            return item;
          }),
        );
        toast.success('Material editado com sucesso!');
      })
      .catch(err => console.log(err));
  }

  return (
    <Container>
      <MaterialForm material={material} setMaterial={setMaterial} handleSubmit={handleSubmit} />
    </Container>
  );
};

export default UpdateMaterial;

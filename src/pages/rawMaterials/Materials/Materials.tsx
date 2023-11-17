import * as S from './style';
import { useEffect, useState } from 'react';
import Container from '../../../components/Container';
import { MaterialTypes } from '../types/MaterialTypes';
import { MaterialProvider } from '../context/MaterialContext';
import api from '../../../api/api';
import NewMaterial from './new/NewMaterial';
import { MaterialCard } from '../MaterialCard/MaterialCard';
import UpdateMaterial from './update/UpdateMaterial';
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

const Materials = () => {
  const [material, setMaterial] = useState<MaterialTypes>(inicialState);
  const [materials, setMaterials] = useState<any[]>([]);
  const [selectedMaterial, setSelectedMaterial] = useState<MaterialTypes | null>(null);
  const [modalNewMaterial, setModalNewMaterial] = useState(false);

  useEffect(() => {
    api
      .get('materialsList')
      .then(res => {
        setMaterials(res.data);
      })
      .catch(err => console.log(err));
  }, []);

  function openMaterialForm() {
    setModalNewMaterial(true);
  }

  function handleRemove(id: number) {
    api
      .delete(`materialsList/${id}`)
      .then(() => {
        setMaterials(state => state.filter(material => material.id !== id));
        toast.success('Material removido com sucesso!');
      })
      .catch(err => console.log(err));
  }

  return (
    <MaterialProvider
      value={{
        handleRemove,
        setMaterials,
        materials,
        modalNewMaterial,
        setModalNewMaterial,
        selectedMaterial,
        setSelectedMaterial,
        material,
        setMaterial,
      }}
    >
      <Container>
        <S.Header>
          <div className="head">
            <h1 className="title">Materiais</h1>
            <button className="btn" onClick={openMaterialForm}>
              Cadastrar Material
            </button>
          </div>

          {modalNewMaterial && <NewMaterial />}

          {selectedMaterial && <UpdateMaterial />}

          <div className="headerMaterials">
            <div className="td name">Descrição Material</div>
            <div className="td inicialPrice">Preço Inicial</div>
            <div className="td frete">Frete</div>
            <div className="td nf">NF</div>
            <div className="td icms">ICMS</div>
            <div className="td type">Fornecedor</div>
            <div className="td finalPrice">PreçoFinal</div>
            <div className="td actions">Ações</div>
          </div>
        </S.Header>
        <S.ContainerList>
          {materials.map(material => (
            <MaterialCard material={material} handleRemove={handleRemove} key={material.id} />
          ))}
        </S.ContainerList>
      </Container>
    </MaterialProvider>
  );
};

export default Materials;

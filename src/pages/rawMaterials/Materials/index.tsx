import * as S from './style';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Container from '../../../components/Container';
import { MaterialTypes } from '../types/MaterialTypes';
import { getMaterials } from '../../../api/ApiMaterials';
import { MaterialForm } from '../MaterialForm';
import { MaterialList } from '../MaterialList';

const inicialState: MaterialTypes = {
  id: '',
  name: '',
  preco: 0,
  frete: 0,
  icms: 0,
  nf: 0,
  tipoFornecedor: '',
  total: 0,
  unid: '',
};

const Materials = () => {
  const [material, setMaterial] = useState<MaterialTypes>(inicialState);
  const [materials, setMaterials] = useState<any[]>([]);
  const [open, setOpen] = useState(false);

  const location = useLocation();
  let message = '';
  if (location.state) {
    message = location.state.message;
  }

  useEffect(() => {
    setTimeout(() => {
      getMaterials().then(res => {
        setMaterials(res);
      });
    }, 300);
  }, []);

  function handleRemove() {}

  return (
    <Container>
      <MaterialForm isOpen={open} material={material} setMaterial={setMaterial} setOpen={setOpen} />
      <S.Header>
        <h1 className="title">Materiais</h1>
        <button className="btn" onClick={() => setOpen(!open)}>
          Cadastrar Material
        </button>
      </S.Header>
      <S.ContainerList>
        {materials.map(material => (
          <MaterialList
            handleRemove={handleRemove}
            id={material.id}
            name={material.name}
            preco={material.preco}
            unid={material.unid}
            frete={material.frete.toFixed(0)}
            nf={material.nf.toFixed(0)}
            icms={material.icms.toFixed(0)}
            tipoFornecedor={material.tipoFornecedor}
            total={material.total}
            key={material.id}
          />
        ))}
      </S.ContainerList>
    </Container>
  );
};

export default Materials;

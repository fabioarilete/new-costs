import { ReactNode, useMemo, useState } from 'react';
import * as S from './Style';
import Logo from '../../../../assets/img/logosf.png';
import { CostMaterial, CostTypes } from '../../types/CostTypes';
import { CostProvider } from '../../context/CostContext';
import HeaderForm from '../../CostForms/HeaderForm/HeaderForm';
import SourceMaterialsForm from '../../CostForms/SourceMaterialsForm/SourceMaterialsForm';
import ItemMaterial from './Item/ItemMaterial';
import SourceOperationsForm from '../../CostForms/SourceOperationsForm/SourceOperationsForm';
import ItemOperation from './Item/ItemOperation';
import formatCurrency from '../../../../utils/formatCurrency';

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

const NewCost = () => {
  const [cost, setCost] = useState<CostTypes>(inicialCostState);
  const [step, setStep] = useState(1);
  const [materiaisProduto, setMateriaisProduto] = useState<CostMaterial[]>([]);
  const [totalOperations, setTotalOperations] = useState<number>(0);

  function handleValidation() {}

  function handleNextStep(step?: number) {
    if (step) {
      setStep(step);
      return;
    }
    setStep(state => state + 1);
  }

  function handleLastStep(step?: number) {
    if (step) {
      setStep(step);
      return;
    }
    setStep(state => state - 1);
  }

  function handleRemove() {}

  // function handleRendering() {
  //   const options: Record<typeof step, ReactNode> = {
  //     1: (
  //       <HeaderForm handleNextStep={handleNextStep} cost={cost} setCost={setCost} handleValidation={handleValidation} />
  //     ),
  //     2: (
  //       <SourceMaterialsForm
  //         handleLastStep={handleLastStep}
  //         handleNextStep={handleNextStep}
  //         cost={cost}
  //         setCost={setCost}
  //         handleValidation={handleValidation}
  //       />
  //     ),
  //     3: (
  //       <SourceOperationsForm
  //         handleLastStep={handleLastStep}
  //         cost={cost}
  //         setCost={setCost}
  //         handleValidation={handleValidation}
  //       />
  //     ),
  //   };

  //   return options[step];
  // }

  console.log(cost);

  return (
    <CostProvider
      value={{
        step,
        setStep,
        handleNextStep,
        handleLastStep,
        cost,
        setCost,
      }}
    >
      <S.Container>
        <div className="containerTitle">
          <h1 className="title">Cadastro de Produto</h1>
        </div>
        <div className="content">
          <div className="headers">
            {step === 1 ? (
              <HeaderForm
                handleNextStep={handleNextStep}
                cost={cost}
                setCost={setCost}
                handleValidation={handleValidation}
              />
            ) : step === 2 ? (
              <SourceMaterialsForm
                handleLastStep={handleLastStep}
                handleNextStep={handleNextStep}
                cost={cost}
                setCost={setCost}
                handleValidation={handleValidation}
              />
            ) : (
              step === 3 && (
                <SourceOperationsForm
                  handleLastStep={handleLastStep}
                  cost={cost}
                  setCost={setCost}
                  handleValidation={handleValidation}
                />
              )
            )}
          </div>
          <div className="containerCost">
            <div className="costSheet">
              <div className="incialContainer">
                <div className="logoContainer">
                  <img src={Logo} alt="" />
                  <p>Planilha de custos de produto</p>
                </div>
                <div className="imageContainer"></div>
                <div className="infoContainer">
                  <div className="tipo">
                    <div className="infoTitle">
                      <p>Quant. Embalagem: </p>
                    </div>
                    <div className="info">{cost.qt}</div>
                  </div>

                  <div className="tipo">
                    <div className="infoTitle">
                      <p>Sub. Tributária: </p>
                    </div>
                    <div className="info">{cost.st === '0' ? 'Não' : 'Sim'}</div>
                  </div>

                  <div className="tipo">
                    <div className="infoTitle">
                      <p>SFCO x STTE: </p>
                    </div>
                    <div className="info">{cost.sf_st === '0' ? 'Não' : 'Sim'}</div>
                  </div>

                  <div className="tipo">
                    <div className="infoTitle">
                      <p>Tipo Produto: </p>
                    </div>
                    <div className="info">{cost.tipoProduto === '0' ? 'Revenda' : 'Produzido'}</div>
                  </div>
                </div>
              </div>

              <div className="descriptionProduct">
                <div className="headerDescription">
                  <div className="cod headerT">
                    <h4>Código</h4>
                  </div>
                  <div className="description headerT">
                    <h4>Descrição do Produto</h4>
                  </div>
                </div>
                <div className="headerDescription">
                  <div className="cod">
                    <p>{cost.cod}</p>
                  </div>
                  <div className="description">
                    <p>{cost.name}</p>
                  </div>
                </div>
              </div>

              <div className="productMaterialsContainer">
                <div className="productMaterials">
                  <div className="material headerT">
                    <h4>Matéria-Prima</h4>
                  </div>
                  <div className="obsMaterial headerT">
                    <h4>Observação</h4>
                  </div>
                  <div className="qtMaterial headerT">
                    <h4>Quant</h4>
                  </div>
                  <div className="unitMaterial headerT">
                    <h4>Unid</h4>
                  </div>
                  <div className="valueMaterial headerT">
                    <h4>Valor Unitário</h4>
                  </div>
                  <div className="totalMaterial headerT">
                    <h4>Valor Total</h4>
                  </div>
                </div>
                {cost.materiaisProduto.map(material => (
                  <ItemMaterial material={material} handleRemove={handleRemove} key={material.id} />
                ))}

                <div className="subtotals">
                  <div className="totalTitle">Total - Materiais</div>
                  <div className="total">total materiais</div>
                </div>
              </div>

              <div className="productMaterialsContainer">
                <div className="productMaterials">
                  <div className="material headerT">
                    <h4>Operação</h4>
                  </div>
                  <div className="obsOperation headerT">
                    <h4>Observação</h4>
                  </div>
                  <div className="qtMaterial headerT">
                    <h4>Quant</h4>
                  </div>

                  <div className="valueMaterial headerT">
                    <h4>Valor Hora</h4>
                  </div>
                  <div className="totalMaterial headerT">
                    <h4>Valor Total</h4>
                  </div>
                </div>
                {cost.operacoesProduto.map(operation => (
                  <ItemOperation operation={operation} handleRemove={handleRemove} key={operation.id} />
                ))}

                <div className="subtotals">
                  <div className="totalTitle">Total - Operações</div>
                  <div className="total">{formatCurrency(cost.totalOperations, 'BRL')}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </S.Container>
    </CostProvider>
  );
};

export default NewCost;

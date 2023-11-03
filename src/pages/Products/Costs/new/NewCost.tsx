import { useState, useId, useMemo, useEffect } from 'react';
import * as S from './Style';
import Logo from '../../../../assets/img/logosf.png';
import { CostMaterial, CostOperation, CostTypes } from '../../types/CostTypes';
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

  useEffect(() => {
    let total = 0;

    if (!cost.operacoesProduto.length) {
      total = 0;
    }
    total = cost.operacoesProduto.reduce((next, item) => {
      const subTotal = item.totalItemOperation;
      return next + subTotal;
    }, 0);

    setCost(state => ({
      ...state,
      totalOperations: total,
    }));
  }, [cost.operacoesProduto]);

  useEffect(() => {
    let total = 0;

    if (!cost.materiaisProduto.length) {
      total = 0;
    }
    total = cost.materiaisProduto.reduce((next, item) => {
      const subTotal = item.totalItemMaterial;
      return next + subTotal;
    }, 0);

    setCost(state => ({
      ...state,
      totalMaterials: total,
    }));
  }, [cost.materiaisProduto]);

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

  function removeOperation(operationUuid: string) {
    const operacoesProduto = cost.operacoesProduto.filter(item => item.uuid !== operationUuid);
    setCost(state => ({
      ...state,
      operacoesProduto,
    }));
  }

  function removeMaterial(materialUuid: string) {
    const materiaisProduto = cost.materiaisProduto.filter(item => item.uuid !== materialUuid);
    setCost(state => ({
      ...state,
      materiaisProduto,
    }));
  }

  const totalCost = useMemo((): CostTypes | any => {
    const total = cost.totalMaterials + cost.totalOperations;

    return total;
  }, [cost]);

  const totalCostUnit = totalCost / Number(cost.qt);

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
                  <ItemMaterial material={material} removeMaterial={removeMaterial} key={material.id} />
                ))}

                <div className="subtotals">
                  <div className="totalTitle">Total - Materiais</div>
                  <div className="total">{formatCurrency(cost.totalMaterials, 'BRL')}</div>
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
                  <ItemOperation operation={operation} removeOperation={removeOperation} key={operation.id} />
                ))}

                <div className="subtotals">
                  <div className="totalTitle">Total - Operações</div>
                  <div className="total">{formatCurrency(cost.totalOperations, 'BRL')}</div>
                </div>
              </div>

              <div className="totalsCost">
                <div className="totalsCostTitle">
                  <h4>Custo Total</h4>
                </div>
                <div className="container">
                  <div className="containerTotals">
                    <div className="totalsTitle">Total Unitário</div>
                    <div className="totals">{totalCost === 0 ? 'R$ 0,00' : formatCurrency(totalCostUnit, 'BRL')}</div>
                  </div>
                  <div className="containerTotals">
                    <div className="totalsTitle">Total {cost.unid}</div>
                    <div className="totals">{formatCurrency(totalCost, 'BRL')}</div>
                  </div>
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

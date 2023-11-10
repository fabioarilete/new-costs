import { useState, useEffect } from 'react';
import * as S from './Style';
import { CostTypes } from '../../types/CostTypes';
import { CostProvider } from '../../context/CostContext';
import HeaderForm from '../../CostForms/HeaderForm/HeaderForm';
import SourceMaterialsForm from '../../CostForms/SourceMaterialsForm/SourceMaterialsForm';
import SourceOperationsForm from '../../CostForms/SourceOperationsForm/SourceOperationsForm';
import SourceMarkUpForm from '../../CostForms/SourceMarkUpForm/SourceMarkUpForm';
import HeaderCost from '../../CostComponents/HeaderCost/HeaderCost';
import MaterialCost from '../../CostComponents/MaterialCost/MaterialCost';
import OperationCost from '../../CostComponents/OperationCost/OperationCost';
import MarkUpCost from '../../CostComponents/MarkUpCost/MarkUpCost';
import ResultsCost from '../../CostComponents/ResultsCost/ResultsCost';

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
  markUpProduct: null,
  infoProduct: null,
  totalCost: '' as any,
  unitCost: '' as any,
  priceList: '' as any,
  mediumPrice: '' as any,
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

  useEffect(() => {
    let total = 0;

    if (!cost.totalMaterials && !cost.totalOperations) {
      total = 0;
    }
    total = Number(cost.totalMaterials) + Number(cost.totalOperations);

    let unitCost = 0;
    if (!total) {
      unitCost = 0;
    }

    unitCost = total / Number(cost.qt);

    setCost(state => ({
      ...state,
      totalCost: total,
      unitCost,
    }));
  }, [cost.totalMaterials, cost.totalOperations]);

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

  function handleRemove() {}

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
            ) : step === 3 ? (
              <SourceOperationsForm
                handleLastStep={handleLastStep}
                handleNextStep={handleNextStep}
                cost={cost}
                setCost={setCost}
                handleValidation={handleValidation}
              />
            ) : (
              step === 4 && (
                <SourceMarkUpForm
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
              <HeaderCost cost={cost} handleRemove={handleRemove} />
              <MaterialCost cost={cost} removeMaterial={removeMaterial} />
              <OperationCost cost={cost} removeOperation={removeOperation} />
              <div className="containerInformations">
                <MarkUpCost cost={cost} />
                <ResultsCost cost={cost} />
              </div>
            </div>
          </div>
        </div>
      </S.Container>
    </CostProvider>
  );
};

export default NewCost;

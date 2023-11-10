import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  .productMaterialsContainer {
    margin: 15px 30px 15px 15px;
    display: flex;
    flex-direction: column;
  }

  .productMaterials {
    width: 100%;
    display: flex;
    background-color: var(--color9);
    color: #fff;
    text-align: center;
  }

  .material {
    width: 35%;
  }

  .obsMaterial {
    width: 17%;
  }

  .obsOperation {
    width: 27%;
  }

  .qtMaterial {
    width: 10%;
  }

  .unitMaterial {
    width: 6%;
  }

  .valueMaterial {
    width: 16%;
  }

  .totalMaterial {
    width: 16%;
  }

  .subtotals {
    width: 100%;
    display: flex;
  }

  .totalTitle {
    width: 80%;
    font-size: 20px;
    font-weight: bold;
    text-align: end;
    padding-right: 5px;
    color: var(--color9);
  }

  .total {
    width: 20%;
    font-size: 20px;
    font-weight: bold;
    text-align: end;
    padding-right: 5px;
    color: #fff;
    background-color: var(--color9);
  }
`;

import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  .productOperationsContainer {
    margin: 15px 30px 15px 15px;
    display: flex;
    flex-direction: column;
  }

  .productOperations {
    width: 100%;
    display: flex;
    background-color: var(--color3);
    color: #fff;
    text-align: center;
  }

  .operation {
    width: 35%;
  }

  .obsOperation {
    width: 17%;
  }

  .obsOperation {
    width: 27%;
  }

  .qtOperation {
    width: 10%;
  }

  .valueOperation {
    width: 16%;
  }

  .totalOperation {
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
    color: var(--color3);
  }

  .total {
    width: 20%;
    font-size: 20px;
    font-weight: bold;
    text-align: end;
    padding-right: 5px;
    color: #fff;
    background-color: var(--color3);
  }
`;

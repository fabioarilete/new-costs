import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  border-bottom: 0.5px solid grey;

  .operation {
    width: 35%;
    border-left: 8px solid var(--color3);
    text-align: start;
    padding-left: 5px;
  }

  .obsOperation {
    width: 23%;
    font-size: 12px;
    border-left: 0.5px solid #c0b7b7;
    text-align: center;
  }

  .qtOperation {
    width: 10%;
    border-left: 0.5px solid #c0b7b7;
    text-align: center;
  }

  .valueOperation {
    width: 16%;
    border-left: 0.5px solid #c0b7b7;
    text-align: end;
    padding-right: 5px;
  }

  .totalOperation {
    width: 16%;
    border-left: 0.5px solid #c0b7b7;
    border-right: 0.5px solid #c0b7b7;
    text-align: end;
    padding-right: 5px;
  }

  .icon {
    position: absolute;
    background: #fff;
    right: 28px;
    color: red;
    border: none;
    cursor: pointer;
  }
`;

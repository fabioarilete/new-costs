import styled from 'styled-components';

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  text-align: end;

  tr {
    color: black;
    border-bottom: 1px solid grey;
  }

  tr:hover {
    background: green;
    color: #fff;
  }

  .td {
    padding: 5px;
  }
  .name {
    text-align: start;
    width: 33%;
  }

  .actions {
    display: flex;
    width: 100%;
    justify-content: end;
  }

  .type {
    width: 12%;
    text-align: center;
  }

  .nf,
  .icms,
  .frete {
    width: 7%;
    text-align: center;
  }

  .inicialPrice,
  .finalPrice {
    width: 10%;
  }
`;

export const ButtonRemove = styled.button`
  text-decoration: none;
  border: none;
  background-color: red;
  color: #fff;
  font-size: 0.9em;
  padding: 0.4em 0.8em;
  cursor: pointer;
  margin-right: 1em;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.5s;
  border-radius: 5px;
  margin-left: 5px;

  &:hover {
    background-color: #fff;
    color: red;
    border: 2px solid red;
  }
`;

export const ButtonEdit = styled.a`
  text-decoration: none;
  border: none;
  background-color: blue;
  color: #fff;
  font-size: 0.9em;
  padding: 0.4em 0.8em;
  cursor: pointer;
  margin-right: 1em;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.5s;
  border-radius: 5px;
  margin-left: 10px;

  &:hover {
    background-color: #fff;
    color: blue;
    border: 2px solid blue;
  }
`;

import styled from 'styled-components';

export const Header = styled.div`
  width: 900px;
  height: 100px;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 2px 2px 5px #00000083;

  .head {
    align-items: center;
    padding: 5px;
    width: 100%;
    display: flex;
    justify-content: space-around;
  }

  .headerOperations {
    width: 100%;
    display: flex;
  }

  .actions {
    font-weight: bold;
    width: 30%;
    text-align: center;
  }

  .td {
    font-weight: bold;
  }

  .name {
    text-align: center;
    width: 45%;
  }

  .tipo {
    text-align: center;
    width: 15%;
  }

  .valor {
    text-align: center;
    width: 20%;
  }

  .head {
    display: flex;
  }

  .title {
    font-size: 36px;
    padding-left: 15px;
    padding-right: 15px;
    border-radius: 15px;
    align-items: center;
    background: rgb(64, 62, 62);
    color: #ffbb33;
  }

  .btn {
    width: 200px;
    height: 35px;
    border-radius: 5px;
    background-color: rgb(64, 62, 62);
    color: #fff;
    padding: auto;
    text-decoration: none;
    transition: 0.5s;
    cursor: pointer;
    border: none;
    font-size: 20px;
    font-weight: bold;
  }

  .btn:hover {
    font-weight: bold;
    color: rgb(64, 62, 62);
    background-color: #fff;
    border: 2px solid rgb(64, 62, 62);
  }
`;

export const ContainerList = styled.div`
  width: 900px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  background-color: #fff;
`;

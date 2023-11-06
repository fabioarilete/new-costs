import styled from 'styled-components';

export const Header = styled.div`
  width: 1100px;
  height: 80px;
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
    height: 100%;
    display: flex;
    justify-content: space-around;
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
  width: 1100px;
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
`;

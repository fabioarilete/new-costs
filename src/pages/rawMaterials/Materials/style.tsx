import styled from 'styled-components';

export const Header = styled.div`
  width: 80%;
  height: 100px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 2px 2px 5px #00000083;

  .title {
    color: #08a67c;
  }

  .btn {
    width: 200px;
    height: 35px;
    border-radius: 5px;
    margin-top: 20px;
    background-color: #08a67c;
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
    color: #08a67c;
    background-color: #fff;
    border: 2px solid #08a67c;
  }
`;

export const ContainerList = styled.div`
  width: 1200px;
  display: flex;
  justify-content: start;
  margin: 0 auto;
  flex-wrap: wrap;
`;

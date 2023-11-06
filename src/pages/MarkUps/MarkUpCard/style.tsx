import styled from 'styled-components';

export const Container = styled.div`
  width: 19%;
  display: flex;
  margin: 10px;
  padding: 10px;
  flex-direction: column;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 2px 2px 5px gray;
`;

export const Title = styled.div`
  width: 100%;
  background-color: #383434;
  padding: 10px;
  text-align: center;
  font-size: 14px;
  font-weight: bolder;
  color: #ffbb33;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;

  p {
    font-size: 16px;
    margin-left: 15px;
    font-weight: bold;
    color: #747272;
  }

  span {
    font-size: 16px;
    font-weight: bold;
    color: #000;
  }
`;

export const Actions = styled.div`
  display: flex;
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

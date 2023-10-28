import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`;

export const Form = styled.form`
  width: 100%;
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  box-shadow: 2px 2px 5px black;

  .containerHeader {
    display: flex;
  }

  .configuration {
    width: 100%;
    display: flex;
    justify-content: space-around;
    border: 1px solid blue;
  }

  .containerOptions {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .containerRadioButton {
    margin-bottom: 15px;
    border-radius: 5px;
    background-color: #fff;
    width: 250px;
    height: 40px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border: 1px solid rgb(64, 62, 62);
  }

  .cod {
    width: 100px;
  }

  .qt {
    width: 60px;
  }

  .unid {
    width: 40px;
  }

  .name {
    width: 200px;
  }

  .title {
    font-size: 36px;
    padding-left: 15px;
    padding-right: 15px;
    border-radius: 15px;
    align-items: center;
    background: rgb(64, 62, 62);
    color: #ffbb33;
    margin: 10px;
  }

  .btn {
    width: 200px;
    height: 35px;
    border-radius: 5px;
    margin-top: 20px;
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

  .containerRadioButton {
  }

  .radioButtonTitle {
    margin-bottom: 2px;
    font-weight: bold;
    font-size: 18px;
    color: #7b7b7b;
  }

  .containerButtons {
    padding: 10px;
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
`;

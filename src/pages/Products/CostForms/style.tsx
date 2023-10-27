import styled from 'styled-components';

export const Container = styled.div`
  z-index: 9999;
  width: 100%;
  height: 100%;
  position: absolute;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Form = styled.form`
  z-index: 9999;
  margin: 0 auto;
  width: 620px;
  top: 5%;
  bottom: 10%;
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 2px 2px 5px black;

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
    margin-bottom: 15px;
    border-radius: 5px;
    background-color: #fff;
    width: 300px;
    height: 50px;
    display: flex;
    justify-content: space-around;
    align-items: end;
    border: 1px solid rgb(64, 62, 62);
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

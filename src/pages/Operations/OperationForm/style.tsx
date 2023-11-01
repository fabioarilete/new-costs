import styled from 'styled-components';

export const Container = styled.div`
  z-index: 2000;
  width: 100%;
  height: 100%;
  right: 0;
  left: 0;
  top: 0;
  bottom: 0;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.6);
`;

export const Form = styled.form`
  margin: 10px;
  padding: 10px;
  margin-left: 50%;
  margin-top: 25%;
  transform: translate(-50%, -50%);
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 2px 2px 5px #000;

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
    color: rgb(64, 62, 62);
  }

  .containerButtons {
    padding: 10px;
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
`;

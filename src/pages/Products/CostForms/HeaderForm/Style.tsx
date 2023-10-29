import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  .form {
    margin: 10px;
    padding: 10px;
    width: 97%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 2px 2px 5px #000;
  }

  .btn {
    width: 40%;
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
    font-size: 14px;
    font-weight: bold;
  }

  .btn:hover {
    font-weight: bold;
    color: rgb(64, 62, 62);
    background-color: #fff;
    border: 2px solid rgb(64, 62, 62);
  }

  .containerOptions {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 5px;
  }

  .containerRadioButton {
    border-radius: 5px;
    background-color: #fff;
    width: 70%;
    height: 35px;
    display: flex;
    justify-content: space-around;
    border: 1px solid rgb(64, 62, 62);
  }

  .radioButtonTitle {
    font-weight: bold;
    font-size: 16px;
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

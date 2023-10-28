import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
`;

export const Form = styled.form`
  .cod {
    width: 40px;
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

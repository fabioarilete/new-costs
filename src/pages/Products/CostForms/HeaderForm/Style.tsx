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
    box-shadow: 2px 2px 5px #0000007e;
  }

  .form h1 {
    color: var(--color4);
  }

  .btn {
    width: 40%;
    height: 35px;
    border-radius: 5px;
    margin-top: 20px;
    background-color: var(--color4);
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
    color: var(--color4);
    background-color: #fff;
    border: 2px solid var(--color1);
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
    border: 1px solid var(--color1);
    color: var(--color1);
  }

  .radioButtonTitle {
    font-weight: bold;
    font-size: 16px;
    color: var(--color4);
  }

  .containerButtons {
    padding: 10px;
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  .unidQt {
    display: flex;
    width: 100%;
  }

  .unit {
    margin-right: 3px;
  }

  .qt {
    margin-left: 3px;
  }
`;

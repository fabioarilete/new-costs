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

  .form h1 {
    color: var(--color9);
  }

  .btn {
    width: 30%;
    height: 35px;
    border-radius: 5px;
    margin-top: 20px;
    background-color: var(--color9);
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
    color: var(--color9);
    background-color: #fff;
    border: 2px solid var(--color9);
  }

  .containerButtons {
    padding: 10px;
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  .informations {
    display: flex;
    font-weight: bold;
  }
`;

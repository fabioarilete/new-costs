import styled from 'styled-components';

export const Input = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  input {
    background-color: #fff;
    width: 100%;
    height: 40px;
    padding: 10px;
    margin-bottom: 10px;
    border-radius: 5px;
    border: 1px solid var(--color1);
    font-size: 18px;
  }

  input:focus {
    outline: 1px solid var(--color4);
    border-color: var(--color4);
    background-color: #d6f0f1;
  }

  input::placeholder {
    color: #7b7b7b;
  }

  label {
    font-weight: bold;
    font-size: 16px;
    color: var(--color4);
  }
`;

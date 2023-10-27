import styled from 'styled-components';

export const Input = styled.input`
  padding: 0.7em;
  margin: 10px;
  margin-bottom: 20px;
  border-radius: 5px;
  border: 0.5px solid #7b7b7b;
  font-size: 18px;

  &:focus {
    outline: 1px solid black;
    border-color: black;
  }

  &::placeholder {
    color: #7b7b7b;
  }
`;

export const Label = styled.label`
  margin-bottom: 2px;
  font-weight: bold;
  font-size: 18px;
`;

export const HelperText = styled.p`
  color: red;
  font-size: 12px;
  margin-top: 5px;
`;

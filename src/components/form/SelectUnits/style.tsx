import styled from 'styled-components';

export const Select = styled.select`
  display: flex;
  flex-direction: column;
  width: 600px;
  padding: 0.7em;
  margin-bottom: 20px;
  border-radius: 5px;
  border: 1px solid rgb(64, 62, 62);
  font-size: 18px;

  &:focus {
    outline: 1px solid rgb(64, 62, 62);
    border-color: rgb(64, 62, 62);
  }

  &::placeholder {
    color: #7b7b7b;
  }
`;

export const Label = styled.label`
  margin-bottom: 2px;
  font-weight: bold;
  font-size: 18px;
  color: #7b7b7b;
`;

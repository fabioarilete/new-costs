import styled from 'styled-components';

export const Select2 = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Select = styled.select`
  background-color: #fff;
  width: 100%;
  height: 40px;
  padding: 10px;
  justify-content: center;
  margin-bottom: 10px;
  border-radius: 5px;
  border: 1px solid rgb(64, 62, 62);
  font-size: 16px;

  &:focus {
    outline: 1px solid rgb(64, 62, 62);
    border-color: rgb(64, 62, 62);
    background-color: #d6f0f1;
  }

  &::placeholder {
    color: #7b7b7b;
  }
`;

export const Label = styled.label`
  font-weight: bold;
  font-size: 16px;
  color: #7b7b7b;
`;

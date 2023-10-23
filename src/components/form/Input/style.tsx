import styled from 'styled-components';

export const Input = styled.input`
  display: flex;
  flex-direction: column;
  width: 600px;
  padding: 0.7em;
  margin-bottom: 20px;
  border-radius: 5px;
  border: 1px solid #08a67c;
  font-size: 18px;

  &:focus {
    outline: 1px solid #08a67c;
    border-color: #08a67c;
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

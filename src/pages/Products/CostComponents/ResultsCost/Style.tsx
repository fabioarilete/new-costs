import styled from 'styled-components';

export const Container = styled.div`
  flex: 0.75;
  display: flex;
  margin: 10px;
  flex-direction: column;
`;

export const Line = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 5px;
`;

export const Description = styled.div<{ color: string }>`
  width: 60%;
  height: 35px;
  text-align: right;
  font-size: 22px;
  color: #fff;
  font-weight: bold;
  padding-right: 15px;
  background-color: ${props => props.color};
  border-radius: 20px 0 0 20px;
`;

export const Value = styled.div<{ color: string }>`
  width: 30%;
  height: 35px;
  text-align: right;
  font-size: 22px;
  color: #000;
  font-weight: bold;
  padding-right: 15px;
  border: 2px solid ${props => props.color};
`;

import styled from 'styled-components';

export const Container = styled.div`
  flex: 0.25;
  display: flex;
  margin-left: 30px;

  .coeficiente {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 10px;
    border-radius: 5px;
    box-shadow: 2px 2px 4px #1d76f7;
    background-color: #f2f6a4;
  }

  .coefTitle {
    padding: 5px;
    text-align: center;
    font-weight: bold;
    font-size: 20px;
    color: var(--color4);
    margin-bottom: 10px;
  }

  .coefContent {
    margin-bottom: 10px;
  }

  .coefContent p {
    font-size: 18px;
    color: var(--color8);
  }

  .coefContent span {
    color: var(--color4);
    font-weight: bold;
    font-size: 20px;
  }
`;

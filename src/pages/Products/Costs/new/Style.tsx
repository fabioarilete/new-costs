import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;

  .title {
    background: black;
    color: #ffbb33;
    font-size: 40px;
    text-align: center;
    padding: 5px;
  }

  .content {
    width: 100%;
    display: flex;
  }

  .headers {
    width: 40%;
    display: flex;
    flex-direction: column;
  }

  .header {
    display: flex;
    justify-content: space-around;
    flex-direction: column;
  }

  .containerCost {
    height: 100vh;
    width: 60%;
  }
`;

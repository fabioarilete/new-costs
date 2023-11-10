import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;

  .content {
    width: 100%;
    display: flex;
    margin-top: -50px;
    justify-content: end;
  }

  .headers {
    width: 30%;
    left: 0;
    position: fixed;
  }

  .containerCost {
    width: 70%;
    justify-content: end;
    padding: 10px 25px 10px 10px;
  }

  .costSheet {
    width: 100%;
    padding: 15px 0 15px 0;
    background-color: #fff;
    border-radius: 5px;
  }

  .containerInformations {
    width: 100%;
    display: flex;
  }
`;

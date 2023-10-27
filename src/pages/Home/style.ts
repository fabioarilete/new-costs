import styled from 'styled-components';

export const ContainerHome = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: auto;
  padding-bottom: 120;

  .title {
    font-size: 2.5em;
    margin-bottom: 0.5em;
    color: #000;
  }

  .span {
    font-size: 65px;
    color: #ffbb33;
    padding: 0 0.2em;
  }

  .slogan {
    font-size: 1.3em;
    color: #000;
    font-weight: bold;
  }

  .logo {
    width: 450px;
    margin: 2em 0;
  }
`;

import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  .incialContainer {
    display: flex;
    width: 100%;
    justify-content: space-around;
    align-items: center;
  }

  .logoContainer {
    width: 33%;
    height: 120px;
    margin: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .logoContainer img {
    margin: 10px;
    width: 200px;
  }

  .logoContainer p {
    color: var(--color8);
    font-weight: bold;
  }

  .imageContainer {
    width: 33%;
    height: 120px;
    margin: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid var(--color8);
    border-radius: 5px;
  }

  .infoContainer {
    width: 33%;
    height: 120px;
    margin: 5px;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
  }

  .infoContainer p {
    color: var(--color8);
    font-weight: bold;
    margin-left: 40px;
  }

  .infoContainer span {
    color: var(--color4);
    font-weight: bold;
    margin-left: 10px;
  }

  .descriptionProduct {
    margin: 10px;
    display: flex;
    flex-direction: column;
  }

  .headerDescription {
    width: 100%;
    display: flex;
  }

  .headerT {
    font-size: 16px;
    text-align: center !important;
    background-color: var(--color4);
    color: #fff;
  }

  .cod {
    width: 20%;
    text-align: center;
  }

  .name {
    width: 80%;
    text-align: center;
  }

  .productDescription {
    width: 100%;
    display: flex;
    text-align: center;
    font-size: 18px;
    margin-bottom: 20px;
  }

  ._cod {
    width: 20%;
    border-left: 8px solid var(--color4);
    border-bottom: 1px solid var(--color8);
  }

  ._name {
    width: 80%;
    text-align: center;
    border-left: 0.5px solid var(--color8);
    border-bottom: 1px solid var(--color8);
  }
`;

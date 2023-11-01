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

  .costSheet {
    width: 97%;
    height: 100vh;
    padding-top: 10px;
    margin-top: 10px;
    border-radius: 10px;
    background-color: #fff;
    box-shadow: 2px 2px 5px #000;
  }

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
    border: 1px solid grey;
    border-radius: 10px;
  }

  .infoContainer {
    width: 33%;
    height: 120px;
    margin: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .infoContainer p {
    font-weight: bold;
  }

  .tipo {
    width: 100%;
    height: 30px;
    display: flex;
  }
  .infoTitle {
    margin-right: 15px;
  }

  .descriptionProduct {
    margin: 10px;
    display: flex;
    flex-direction: column;
    border: 0.5px solid #c0b7b7;
  }

  .headerDescription {
    width: 100%;
    display: flex;
  }

  .headerT {
    text-align: center !important;
    background-color: #262323;
    color: #ffbb33;
  }

  .cod {
    width: 20%;
    border-bottom: 0.5px solid grey;
    border-right: 0.5px solid #c0b7b7;
    text-align: center;
  }

  .description {
    width: 80%;
    border-bottom: 0.5px solid #c0b7b7;
    text-align: center;
  }

  .productMaterialsContainer {
    margin: 10px;
    display: flex;
    flex-direction: column;
    border: 0.5px solid #c0b7b7;
  }

  .productMaterials {
    width: 100%;
    display: flex;
  }

  .material {
    width: 35%;
    border-bottom: 0.5px solid grey;
    border-right: 0.5px solid #c0b7b7;
    text-align: center;
    text-align: start;
    padding-right: 5px;
  }

  .obsMaterial {
    width: 17%;
    border-bottom: 0.5px solid grey;
    border-right: 0.5px solid #c0b7b7;
    text-align: center;
  }

  .qtMaterial {
    width: 10%;
    border-bottom: 0.5px solid grey;
    border-right: 0.5px solid #c0b7b7;
    text-align: center;
  }

  .unitMaterial {
    width: 6%;
    border-bottom: 0.5px solid grey;
    border-right: 0.5px solid #c0b7b7;
    text-align: center;
  }

  .valueMaterial {
    width: 16%;
    border-bottom: 0.5px solid grey;
    border-right: 0.5px solid #c0b7b7;
    text-align: end;
    padding-right: 5px;
  }

  .totalMaterial {
    width: 16%;
    border-bottom: 0.5px solid grey;
    border-right: 0.5px solid #c0b7b7;
    text-align: end;
    padding-right: 5px;
  }

  .subtotals {
    width: 100%;
    display: flex;
  }

  .totalTitle {
    width: 80%;
    font-size: 20px;
    font-weight: bold;
    text-align: end;
    padding-right: 5px;
    background-color: #262323;
    color: #ffbb33;
  }

  .total {
    width: 20%;
    font-size: 20px;
    font-weight: bold;
    text-align: end;
    padding-right: 5px;
  }
`;

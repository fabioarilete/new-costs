import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;

  .material {
    width: 35%;
    border-bottom: 0.5px solid grey;
    border-right: 0.5px solid #c0b7b7;
    text-align: start;
    padding-left: 5px;
  }

  .obsMaterial {
    width: 17%;
    font-size: 12px;
    border-bottom: 0.5px solid grey;
    border-right: 0.5px solid #c0b7b7;
    text-align: center;
  }

  .obsOperation {
    width: 27%;
    font-size: 12px;
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
`;

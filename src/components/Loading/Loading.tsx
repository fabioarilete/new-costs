import React from 'react';
import * as S from './Style';
import loading from '../../assets/img/loading.svg';

type Props = {};

const Loading = (props: Props) => {
  return (
    <S.Container>
      <img className="loader" src={loading} alt="Loading" />
    </S.Container>
  );
};

export default Loading;

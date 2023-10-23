import React from 'react';
import * as S from './style';

type Props = {
  children: React.ReactNode;
};

const Container: React.FC<Props> = ({ children, ...rest }) => {
  return <S.Container>{children}</S.Container>;
};

export default Container;

import * as S from './style';
import React, { ReactNode, SelectHTMLAttributes } from 'react';

interface SelectoptionsProps extends SelectHTMLAttributes<HTMLSelectElement> {
  children: ReactNode;
  label?: string;
}

const SelectOptions: React.FC<SelectoptionsProps> = ({ value, name, label, children, ...rest }) => {
  return (
    <S.Select2>
      <S.Label htmlFor={name}>{label}</S.Label>
      <S.Select {...rest} id={name} value={value || ''} name={name}>
        {children}
      </S.Select>
    </S.Select2>
  );
};

export default SelectOptions;

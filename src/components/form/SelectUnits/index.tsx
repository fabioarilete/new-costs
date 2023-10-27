import * as S from './style';
import { InputHTMLAttributes, FC } from 'react';

type InputProps = InputHTMLAttributes<HTMLSelectElement> & {
  label?: string;
};

export const SelectUnits: FC<InputProps> = ({ name, label, ...rest }) => {
  return (
    <div>
      <S.Label htmlFor={name}>{label}</S.Label>
      <S.Select {...rest} name={name}>
        <option>Selecione uma opção</option>
        <option>UN</option>
        <option>KG</option>
        <option>DZ</option>
        <option>CX</option>
        <option>PCT</option>
        <option>HR</option>
        <option>LT</option>
        <option>FD</option>
        <option>FX</option>
        <option>M2</option>
        <option>M3</option>
      </S.Select>
    </div>
  );
};

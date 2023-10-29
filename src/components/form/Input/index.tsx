import * as S from './style';
import { InputHTMLAttributes, forwardRef } from 'react';

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
};

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ type = 'text', name = '', label = '', ...props }, ref) => {
    return (
      <S.Input>
        <label htmlFor={name}>{label}</label>
        <input type={type} name={name} ref={ref} {...props} />
      </S.Input>
    );
  },
);

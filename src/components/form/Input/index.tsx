import * as S from './style';
import { InputHTMLAttributes, forwardRef } from 'react';

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
};

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ type = 'text', name = '', label = '', ...props }, ref) => {
    return (
      <div>
        <S.Label htmlFor={name}>{label}</S.Label>
        <S.Input type={type} name={name} ref={ref} {...props} />
      </div>
    );
  },
);

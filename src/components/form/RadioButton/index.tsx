import * as S from './style';
import { InputHTMLAttributes, forwardRef } from 'react';

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
};

export const RadioButton = forwardRef<HTMLInputElement, InputProps>(
  ({ type = 'radio', name = '', label = '', ...props }, ref) => {
    return (
      <>
        <S.Label>
          <S.Input type={type} name={name} {...props} />
          {label}
        </S.Label>
      </>
    );
  },
);

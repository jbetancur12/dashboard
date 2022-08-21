import React from 'react';
import { InputRef, Input as AntInput, InputProps as AntInputProps } from 'antd';
import * as S from './Input.styles';

export interface InputProps extends AntInputProps {
  className?: string;
}

export const { TextArea } = AntInput;

export const Input = React.forwardRef<InputRef, InputProps>(({ className, children, ...props }, ref) => (
  <S.Input ref={ref} className={className} {...props}>
    {children}
  </S.Input>
));

import { ReactNode } from 'react';
import React, { ButtonHTMLAttributes } from 'react';

import { Container } from './styles';

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children?: ReactNode;
  icon?: JSX.Element;
};

export const Button = ({ children, icon, ...props }: ButtonProps) => (
  <Container className="button" {...props}>
    {icon}
    <span>{children}</span>
  </Container>
);

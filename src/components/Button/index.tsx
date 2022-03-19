import { ReactNode } from 'react';
import { Container } from './styles';

type ButtonProps = {
  children?: ReactNode;
  icon?: JSX.Element;
};

export const Button = ({ children, icon }: ButtonProps) => (
  <Container className="button">
    {icon}
    <span>{children}</span>
  </Container>
);

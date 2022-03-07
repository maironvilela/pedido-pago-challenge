import { ReactNode } from 'react';
import { Container } from './styles';

type ButtonProps = {
  label: string;
  icon: ReactNode;
};

export const Button = ({ label, icon }: ButtonProps) => (
  <Container>
    {icon}
    <span>{label}</span>
  </Container>
);

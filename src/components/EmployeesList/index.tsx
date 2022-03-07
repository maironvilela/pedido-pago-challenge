import { FaRedoAlt } from 'react-icons/fa';
import { Button } from '../Button';
import { EmployeeCard } from '../EmployeeCard';
import { Container } from './styles';

type EmployeesListProps = {
  title: string;
};

export function EmployeesList({ title }: EmployeesListProps) {
  return (
    <Container className="employees-list">
      <h2>{title}</h2>
      <EmployeeCard />
      <EmployeeCard />
      <EmployeeCard />
      <EmployeeCard />
      <EmployeeCard />
      <Button icon={<FaRedoAlt />} label="Carregar Mais" />
    </Container>
  );
}

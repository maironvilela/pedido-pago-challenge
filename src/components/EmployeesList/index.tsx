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
    </Container>
  );
}

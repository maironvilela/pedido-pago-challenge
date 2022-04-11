import { FaRedoAlt } from 'react-icons/fa';
import { Employee } from '../../pages';
import { Button } from '../Button';
import { EmployeeCard } from '../EmployeeCard';
import { Container } from './styles';

type EmployeesListProps = {
  title: string;
  employees: Employee[];
  handleLoadEmployee(): void;
};

export function EmployeesList({
  title,
  employees,
  handleLoadEmployee
}: EmployeesListProps) {
  return (
    <Container className="employees-list">
      <h2>{title}</h2>

      {employees?.map((employee) => (
        <EmployeeCard
          key={employee.name}
          employee={employee}
          header="Nome Completo"
        />
      ))}
      <Button onClick={handleLoadEmployee} icon={<FaRedoAlt />}>
        Carregar Mais
      </Button>
    </Container>
  );
}

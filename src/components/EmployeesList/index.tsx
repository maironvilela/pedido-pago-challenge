import { FaRedoAlt } from 'react-icons/fa';
import { Button } from '../Button';
import { EmployeeCard } from '../EmployeeCard';
import { Container } from './styles';

type EmployeeInfo = {
  id: number;
  label: string;
  description: string;
};
type Employee = {
  employeesInfo: EmployeeInfo[];
  imgUrl: string;
  header: string;
  name: string;
  isActive?: boolean;
};
type EmployeesListProps = {
  title: string;
  employees: Employee[];
};

export function EmployeesList({ title, employees }: EmployeesListProps) {
  return (
    <Container className="employees-list">
      <h2>{title}</h2>

      {employees?.map((employee) => (
        <EmployeeCard
          key={employee.name}
          employeesInfo={employee.employeesInfo}
          imgUrl={employee.imgUrl}
          header="Nome Completo"
          name={employee.name}
          isActive={!!employee.isActive}
        />
      ))}

      <Button icon={<FaRedoAlt />}> Carregar Mais</Button>
    </Container>
  );
}

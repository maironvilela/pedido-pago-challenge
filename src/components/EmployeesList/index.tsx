import { FaRedoAlt } from 'react-icons/fa';
import { Button } from '../Button';
import { EmployeeCard, EmployeeInfo } from '../EmployeeCard';
import { Container } from './styles';
import { faker } from '@faker-js/faker';

type EmployeesListProps = {
  title: string;
};

export function EmployeesList({ title }: EmployeesListProps) {
  const employeesInfo: EmployeeInfo[] = [
    {
      id: 1,
      label: 'Label',
      description: 'Description'
    }
  ];
  return (
    <Container className="employees-list">
      <h2>{title}</h2>
      <EmployeeCard
        employeesInfo={employeesInfo}
        imgUrl={faker.image.avatar()}
        header="Nome Completo"
        name={faker.name.findName()}
      />

      <Button icon={<FaRedoAlt />}> Carregar Mais</Button>
    </Container>
  );
}

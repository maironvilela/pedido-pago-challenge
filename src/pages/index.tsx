import { GetServerSideProps } from 'next';
import { useCallback, useMemo, useState } from 'react';
import { EmployeesList } from '../components/EmployeesList';
import { Header } from '../components/Header';
import { Input } from '../components/Input';
import { Select } from '../components/Select';
import { Title } from '../components/Title';
import { api } from '../services/axios';

import { Container, Content, Table } from '../styles/home';
export type EmployeeInfo = {
  label: string;
  description: string;
};
export type Employee = {
  id: number;
  imgUrl: string;
  name: string;
  isActive?: boolean;
  employeeInfo?: EmployeeInfo[];
};

type HomeProps = {
  employees: Employee[];
};

export default function Home({ employees }: HomeProps) {
  const [selectedOption, setSelectedOption] = useState('Colaboradores');
  const itens = ['Colaboradores', 'Cargos'];

  const placeholder = useMemo(() => {
    const itensLabel = {
      colaboradores: 'Nome ou CPF',
      cargos: 'Descrição do cargo'
    };
    switch (selectedOption) {
      case 'Colaboradores':
        return itensLabel['colaboradores'];
        break;
      case 'Cargos':
        return itensLabel['cargos'];
        break;
      default:
        return '';
    }
  }, [selectedOption]);

  const handleLoadEmployee = useCallback(() => {
    console.log('handleLoadEmployee');
  }, []);

  return (
    <Container>
      <Header fullName="HEADER" />
      <Content>
        <Title title="Colaboradores" />
        <Table>
          <Select
            selectedOption={selectedOption}
            setSelectedOption={setSelectedOption}
            itens={itens}
          />
          <Input placeholder={placeholder} label="Pesquisar por" />
          <EmployeesList
            title="Listagem de colaboradores"
            employees={employees}
            handleLoadEmployee={handleLoadEmployee}
          />
        </Table>
      </Content>
    </Container>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const { data } = await api.get('employees');

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const employees = data.map((employee: any) => {
    return {
      id: employee.agent_id,
      imgUrl: employee.image,
      name: employee.name,
      isActive: employee.status === 'active',
      employeesInfo: []
    };
  });

  return {
    props: {
      employees
    }
  };
};

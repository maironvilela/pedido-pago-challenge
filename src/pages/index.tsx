import { useMemo, useState } from 'react';
import { EmployeesList } from '../components/EmployeesList';
import { Header } from '../components/Header';
import { Input } from '../components/Input';
import { Select } from '../components/Select';
import { Title } from '../components/Title';

import { Container, Content, Table } from '../styles/home';

type HomeProps = {
  fullName: string;
};

export default function Home({ fullName }: HomeProps) {
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

  return (
    <Container>
      <Header fullName={fullName} />
      <Content>
        <Title title="Colaboradores" />
        <Table>
          <Select
            selectedOption={selectedOption}
            setSelectedOption={setSelectedOption}
            itens={itens}
          />
          <Input placeholder={placeholder} label="Pesquisar por" />
          <EmployeesList title="Listagem de colaboradores" />
        </Table>
      </Content>
    </Container>
  );
}

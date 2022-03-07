import { Button } from '../components/Button';
import { EmployeesList } from '../components/EmployeesList';
import { Header } from '../components/Header';
import { Input } from '../components/Input';
import { Select } from '../components/Select';
import { Title } from '../components/Title';
import { AiOutlineFileAdd } from 'react-icons/ai';

import { Container, Content, Table } from '../styles/home';

export default function Home() {
  return (
    <Container>
      <Header />
      <Content>
        <Title title="Colaboradores" />
        <Table>
          <Select />
          <Input placeholder="Nome ou CPF" label="Pesquisar por" />
          <EmployeesList title="Listagem de colaboradores" />
          <Button label="Ações" icon={<AiOutlineFileAdd />} />
        </Table>
      </Content>
    </Container>
  );
}

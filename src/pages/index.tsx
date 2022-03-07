import { FaChevronUp, FaFileMedical } from 'react-icons/fa';
import { Avatar } from '../components/Avatar';

import { Header } from '../components/Header';
import { Input } from '../components/Input';
import { Select } from '../components/Select';
import { Title } from '../components/Title';
import {
  Button,
  Container,
  Content,
  EmployeeCard,
  EmployeesList,
  Table
} from '../styles/home';
export default function Home() {
  const url =
    'data:image/png;base64,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';
  return (
    <Container>
      <Header />
      <Title title="Colaboradores" />

      <Content>
        <Table>
          <Select />
          <Input placeholder="Nome ou CPF" label="Pesquisar por" />

          <EmployeesList>
            <h2>Listagem de colaboradores</h2>

            <EmployeeCard>
              <header>Nome Completo</header>
              <section>
                <div>
                  <Avatar url={url} />
                  <span>Pikachu Soares dos Santos Dias</span>
                </div>
                <FaChevronUp />
              </section>

              <section>
                <div>
                  <span>Departamento</span>
                  <span>Administrativo</span>
                </div>

                <div>
                  <span>Cargo</span>
                  <span>Diretor</span>
                </div>
              </section>

              <section>
                <div>
                  <span>Unidade</span>
                  <span>123456789</span>
                </div>

                <div>
                  <span>Unidade</span>
                  <span>Quartel General</span>
                </div>
              </section>

              <section>
                <div>
                  <span>Status</span>
                  <div className="status">
                    <span>Ativo</span>
                  </div>
                </div>
              </section>

              <Button>
                <FaFileMedical />
                <span>Açoes</span>
              </Button>
            </EmployeeCard>
          </EmployeesList>
        </Table>
      </Content>
    </Container>
  );
}

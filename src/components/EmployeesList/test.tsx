import { fireEvent, screen } from '@testing-library/react';
import { EmployeesList } from '.';
import { faker } from '@faker-js/faker';
import { renderWithTheme } from '../../utils/tests/helpers';
//import { api } from '../../services/axios';

describe('<EmployeesList />', () => {
  it('should be able render EmployeesList', () => {
    const name = faker.name.findName();
    const args = {
      title: 'Lista Colaboradores',
      employees: [
        {
          id: faker.datatype.number(),
          name,
          imgUrl: faker.image.avatar(),
          isActive: true
        }
      ],
      handleLoadEmployee: jest.fn()
    };
    renderWithTheme(<EmployeesList {...args} />);

    expect(screen.getByText(`Lista Colaboradores`)).toBeInTheDocument();
    expect(screen.getByText(`${name}`)).toBeInTheDocument();
    expect(screen.getByText(`Carregar Mais`)).toBeInTheDocument();
  });

  it('should be able to call the function to fetch more records', () => {
    const handleLoadEmployee = jest.fn();

    const args = {
      title: 'Lista Colaboradores',
      employees: [
        {
          id: faker.datatype.number(),
          name: faker.name.findName(),
          imgUrl: faker.image.avatar(),
          isActive: true
        }
      ],
      handleLoadEmployee
    };
    renderWithTheme(<EmployeesList {...args} />);

    fireEvent.click(screen.getByRole('button', { name: 'Carregar Mais' }));

    expect(handleLoadEmployee).toBeCalled();
  });
  it('should be able to call the function to fetch more records', async () => {
    const handleLoadEmployee = async () => {
      console.log('Função Chamada');
    };

    console.log('Parametros setados');

    const args = {
      title: 'Lista Colaboradores',
      employees: [],
      handleLoadEmployee
    };
    renderWithTheme(<EmployeesList {...args} />);

    fireEvent.click(screen.getByRole('button', { name: 'Carregar Mais' }));

    expect(await screen.findByText('Lista Colaboradores')).toBeInTheDocument();
  });
});

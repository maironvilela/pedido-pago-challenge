import { act, fireEvent, screen } from '@testing-library/react';
import { faker } from '@faker-js/faker';

import { EmployeeCard } from '.';
import { renderWithTheme } from '../../utils/tests/helpers';

describe('<EmployeeCard />', () => {
  it('should be able render EmployeeCard with main information', () => {
    const args = {
      header: 'Nome Completo',
      employee: {
        id: faker.datatype.number(),
        name: faker.name.findName(),
        imgUrl: faker.image.avatar(),
        isActive: true
      }
    };
    renderWithTheme(<EmployeeCard {...args} />);
    expect(
      screen.getByLabelText(`Avatar ${args.employee.name}`)
    ).toBeInTheDocument();
    expect(screen.getByText(`${args.employee.name}`)).toBeInTheDocument();
    expect(screen.getByText('Nome Completo')).toBeInTheDocument();
    expect(screen.getByTestId('btnToggleShowDetails')).toBeInTheDocument();
  });
  it('should be able to toggle the view of employee details', () => {
    const args = {
      employee: {
        id: faker.datatype.number(),
        imgUrl: faker.image.avatar(),
        name: faker.name.findName(),
        isActive: true,
        employeesInfo: [
          {
            id: 1,
            label: 'Departamento',
            description: 'Administrativo'
          },
          {
            id: 2,
            label: 'Cargo',
            description: 'Diretor'
          },
          {
            id: 3,
            label: 'Código da Unidade',
            description: '123456789'
          },
          {
            id: 4,
            label: 'Unidade',
            description: 'Quartel General'
          },
          {
            id: 5,
            label: 'Status',
            description: 'Ativo',
            isBadge: true
          }
        ]
      },
      header: 'Nome Completo'
    };
    renderWithTheme(<EmployeeCard {...args} />);
    /*
    expect(screen.queryByText('Departamento')).not.toBeInTheDocument();
    expect(screen.queryByText('Diretor')).not.toBeInTheDocument();
    expect(screen.queryByText('Status')).not.toBeInTheDocument();
    expect(screen.queryByText('Ativo')).not.toBeInTheDocument();
    expect(screen.queryByText('Código da Unidade')).not.toBeInTheDocument();
    expect(screen.queryByText('123456789')).not.toBeInTheDocument();
    expect(screen.queryByText('Unidade')).not.toBeInTheDocument();
    expect(screen.queryByText('Quartel General')).not.toBeInTheDocument();
    expect(
      screen.queryByRole('button', { name: /Editar/i })
    ).not.toBeInTheDocument();
    expect(
      screen.queryByRole('button', { name: /Excluir/i })
    ).not.toBeInTheDocument();

    fireEvent.click(screen.getByTestId('btnToggleShowDetails'));

    expect(screen.findByTestId('btnToggleShowDetails')).toBeInTheDocument();
    expect(screen.findByText('Departamento')).toBeInTheDocument();
    expect(screen.findByText('Diretor')).toBeInTheDocument();
    expect(screen.findByText('Status')).toBeInTheDocument();
    expect(screen.findByText('Ativo')).toBeInTheDocument();
    expect(screen.findByText('Código da Unidade')).toBeInTheDocument();
    expect(screen.findByText('123456789')).toBeInTheDocument();
    expect(screen.findByText('Unidade')).toBeInTheDocument();
    expect(screen.findByText('Quartel General')).toBeInTheDocument();
    expect(
      screen.findByRole('button', { name: /Editar/i })
    ).toBeInTheDocument();
    expect(
      screen.findByRole('button', { name: /Excluir/i })
    ).toBeInTheDocument();*/
  });
  it('should be able to lower the value of the opacity property if user is inactive', () => {
    const args = {
      header: 'Nome Completo',
      employee: {
        id: faker.datatype.number(),
        imgUrl: faker.image.avatar(),
        name: faker.name.findName(),
        isActive: false,
        employeesInfo: []
      }
    };
    renderWithTheme(<EmployeeCard {...args} />);

    expect(screen.getByText(`${args.employee.name}`).parentElement).toHaveStyle(
      {
        opacity: 0.5
      }
    );
  });
  it('should be able to keep the value of the opacity property on if user is active', () => {
    const args = {
      header: 'Nome Completo',
      employee: {
        id: faker.datatype.number(),
        imgUrl: faker.image.avatar(),
        name: faker.name.findName(),
        isActive: true,
        employeesInfo: []
      }
    };
    renderWithTheme(<EmployeeCard {...args} />);

    expect(screen.getByText(`${args.employee.name}`).parentElement).toHaveStyle(
      {
        opacity: 1
      }
    );
  });

  it('should be able hide edit and delete buttons and show confirm and cancel exclusion buttons when clicking delete button', async () => {
    const args = {
      employee: {
        id: 1,
        imgUrl: faker.image.avatar(),
        name: faker.name.findName(),
        isActive: true,
        employeesInfo: [
          {
            id: 1,
            label: 'Departamento',
            description: 'Administrativo'
          }
        ]
      },
      header: 'Nome Completo'
    };
    renderWithTheme(<EmployeeCard {...args} />);

    act(() => {
      fireEvent.click(screen.getByTestId('btnToggleShowDetails'));
    });

    expect(await screen.findByText('Editar')).toBeInTheDocument();

    expect(await screen.findByText('Excluir')).toBeInTheDocument();

    fireEvent.click(screen.getByText('Excluir'));

    expect(await screen.findByText('Confirmar Exclusão')).toBeInTheDocument();
    expect(await screen.findByText('Cancelar Exclusão')).toBeInTheDocument();
  });
});

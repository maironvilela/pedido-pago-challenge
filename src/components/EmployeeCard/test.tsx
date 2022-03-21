import { screen, fireEvent } from '@testing-library/react';
import { faker } from '@faker-js/faker';

import { EmployeeCard } from '.';
import { renderWithTheme } from '../../utils/tests/helpers';

describe('<EmployeeCard />', () => {
  it('should be able render EmployeeCard with main information', () => {
    const args = {
      name: faker.name.findName(),
      employeesInfo: [],
      imgUrl: faker.image.avatar(),
      isActive: true,
      header: 'Nome Completo'
    };
    renderWithTheme(<EmployeeCard {...args} />);
    expect(screen.getByLabelText(`Avatar ${args.name}`)).toBeInTheDocument();
    expect(screen.getByText(`${args.name}`)).toBeInTheDocument();
    expect(screen.getByText('Nome Completo')).toBeInTheDocument();
    expect(screen.getByTestId('btnToggle')).toBeInTheDocument();
  });
  it('should be able to toggle the view of employee details', () => {
    const args = {
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
      ],
      header: 'Nome Completo'
    };
    renderWithTheme(<EmployeeCard {...args} />);

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

    fireEvent.click(screen.getByTestId('btnToggle'));

    expect(screen.getByTestId('btnToggle')).toBeInTheDocument();
    expect(screen.getByText('Departamento')).toBeInTheDocument();
    expect(screen.getByText('Diretor')).toBeInTheDocument();
    expect(screen.getByText('Status')).toBeInTheDocument();
    expect(screen.getByText('Ativo')).toBeInTheDocument();
    expect(screen.getByText('Código da Unidade')).toBeInTheDocument();
    expect(screen.getByText('123456789')).toBeInTheDocument();
    expect(screen.getByText('Unidade')).toBeInTheDocument();
    expect(screen.getByText('Quartel General')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Editar/i })).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: /Excluir/i })
    ).toBeInTheDocument();
  });

  it('should be able change opacity property by 0.5 if isActive false', () => {
    const args = {
      header: 'Nome Completo',
      imgUrl: faker.image.avatar(),
      name: faker.name.findName(),
      isActive: false,
      employeesInfo: []
    };
    renderWithTheme(<EmployeeCard {...args} />);

    expect(screen.getByText(`${args.name}`).parentElement).toHaveStyle({
      opacity: 0.5
    });
  });
});

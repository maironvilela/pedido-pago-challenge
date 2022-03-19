import { screen } from '@testing-library/react';
import { faker } from '@faker-js/faker';

import { EmployeeCard } from '.';
import { renderWithTheme } from '../../utils/tests/helpers';

describe('<EmployeeCard />', () => {
  it('should be able render EmployeeCard with main information', () => {
    const args = {
      imgUrl: faker.image.avatar(),
      header: 'Nome Completo',
      name: faker.name.findName(),
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
    };
    renderWithTheme(<EmployeeCard {...args} />);
    expect(screen.getByText('Departamento')).toBeInTheDocument();
    expect(screen.getByText('Administrativo')).toBeInTheDocument();
    expect(screen.getByText('Cargo')).toBeInTheDocument();
    expect(screen.getByText('Diretor')).toBeInTheDocument();
    expect(screen.getByText('Status')).toBeInTheDocument();
    expect(screen.getByText('Ativo')).toBeInTheDocument();
    expect(screen.getByText('Código da Unidade')).toBeInTheDocument();
    expect(screen.getByText('123456789')).toBeInTheDocument();
    expect(screen.getByText('Unidade')).toBeInTheDocument();
    expect(screen.getByText('Quartel General')).toBeInTheDocument();
    expect(screen.getByLabelText(`Avatar ${args.name}`)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Ações/i })).toBeInTheDocument();
  });
});

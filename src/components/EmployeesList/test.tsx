import { screen } from '@testing-library/react';
import { EmployeesList } from '.';
import { faker } from '@faker-js/faker';

import { renderWithTheme } from '../../utils/tests/helpers';

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
      ]
    };
    renderWithTheme(<EmployeesList {...args} />);

    expect(screen.getByText(`Lista Colaboradores`)).toBeInTheDocument();
    expect(screen.getByText(`${name}`)).toBeInTheDocument();
    expect(screen.getByText(`Carregar Mais`)).toBeInTheDocument();
  });
});

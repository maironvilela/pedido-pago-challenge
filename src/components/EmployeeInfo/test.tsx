import { screen } from '@testing-library/react';

import { EmployeeInfo } from '.';
import { renderWithTheme } from '../../utils/tests/helpers';

describe('<EmployeeInfo />', () => {
  it('should be able render EmployeeInfo', () => {
    const args = {
      label: 'Cargo',
      description: 'Administrador'
    };
    renderWithTheme(<EmployeeInfo {...args} />);

    expect(screen.getByText(`Cargo`)).toBeInTheDocument();
    expect(screen.getByText('Administrador')).toBeInTheDocument();
  });
});

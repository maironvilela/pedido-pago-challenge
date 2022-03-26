import { screen } from '@testing-library/react';

import { EmployeeInfo } from '.';
import { renderWithTheme } from '../../utils/tests/helpers';
import { BadgeType } from '../Badge';

describe('<EmployeeInfo />', () => {
  it('should be able render EmployeeInfo', () => {
    const args = {
      label: 'Status',
      isBadge: true,
      badgeType: BadgeType.ACTIVE
    };
    renderWithTheme(<EmployeeInfo {...args} />);

    expect(screen.getByText(`Status`)).toBeInTheDocument();
    expect(screen.getByText('Ativo')).toBeInTheDocument();
  });

  it('should be able render default description without provider the isBadge property', () => {
    const args = {
      label: 'Status',
      isBadge: false,
      badgeType: BadgeType.ACTIVE
    };

    renderWithTheme(<EmployeeInfo {...args} />);

    expect(screen.getByText('Status')).not.toHaveStyle({
      background: '#EAEFED'
    });
  });

  it('should be able render badge if badge=true property is provider', () => {
    const args = {
      label: 'Status',
      isBadge: true,
      badgeType: BadgeType.ACTIVE
    };

    renderWithTheme(<EmployeeInfo {...args} />);

    expect(screen.getByText('Ativo')).toHaveStyle({
      background: '#b5f1dd'
    });
  });
});

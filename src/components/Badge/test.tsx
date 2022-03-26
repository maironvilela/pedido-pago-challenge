import { screen } from '@testing-library/react';
import { renderWithTheme } from '../../utils/tests/helpers';
import { Badge, BadgeType } from '.';

describe('<Badge />', () => {
  it('should be able to render the Badges with Active description ', () => {
    renderWithTheme(<Badge label={BadgeType.ACTIVE} />);
    expect(screen.getByText(/Ativo/i)).toBeInTheDocument();
  });

  it('should be able to render the Badges with active description end your main styles', () => {
    renderWithTheme(<Badge label={BadgeType.ACTIVE} />);
    expect(screen.getByText(/Ativo/i)).toHaveStyle({
      background: '#B5F1DD',
      color: '#34423d',
      'font-weight': 500,
      'font-size': '1.4rem'
    });
  });

  it('should be able to render the Badges with label Inactive', () => {
    renderWithTheme(<Badge label={BadgeType.INACTIVE} />);
    expect(screen.getByText(/Inativo/i)).toBeInTheDocument();
  });

  it('should be able to render the Badges with inactive description end your main styles', () => {
    renderWithTheme(<Badge label={BadgeType.INACTIVE} />);
    expect(screen.getByText(/inativo/i)).toHaveStyle({
      background: '#EAEFED',
      color: '#34423d',
      'font-weight': 500,
      'font-size': '1.4rem'
    });
  });
});

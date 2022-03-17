import { screen } from '@testing-library/react';
import { renderWithTheme } from '../../utils/tests/helpers';
import { Badge } from '.';

describe('<Badge />', () => {
  it('should be able to render the Badges with Active description ', () => {
    renderWithTheme(<Badge description="Ativo" type="active" />);
    expect(screen.getByText(/Ativo/i)).toBeInTheDocument();
  });

  it('should be able to render the Badges with active description end your main styles', () => {
    renderWithTheme(<Badge description="Ativo" type="active" />);
    expect(screen.getByText(/Ativo/i)).toHaveStyle({
      background: '#B5F1DD',
      color: '#34423d',
      'font-weight': 500,
      'font-size': '1.4rem'
    });
  });

  it('should be able to render the Badges with description Inactive', () => {
    renderWithTheme(<Badge description="Inativo" type="inactive" />);
    expect(screen.getByText(/Inativo/i)).toBeInTheDocument();
  });

  it('should be able to render the Badges with inactive description end your main styles', () => {
    renderWithTheme(<Badge description="Inativo" type="inactive" />);
    expect(screen.getByText(/inativo/i)).toHaveStyle({
      background: '#EAEFED',
      color: '#34423d',
      'font-weight': 500,
      'font-size': '1.4rem'
    });
  });
});

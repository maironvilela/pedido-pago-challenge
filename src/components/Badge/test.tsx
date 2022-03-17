import { screen } from '@testing-library/react';
import { renderWithTheme } from '../../utils/tests/helpers';
import { Badge } from '.';

describe('<Badge />', () => {
  it('should be able to render the Badges with description Active', () => {
    renderWithTheme(<Badge description="Ativo" type="active" />);
    expect(screen.getByText(/Ativo/i)).toBeInTheDocument();
  });

  it('should be able to render the Badges Active with main styles', () => {
    renderWithTheme(<Badge description="Ativo" type="active" />);
    expect(screen.getByText(/Ativo/i)).toHaveStyle({
      background: '#B5F1DD',
      color: '#34423d',
      'font-weight': 500,
      'font-size': '1.4rem'
    });
  });

  it('should be able to render the Badges with description Active', () => {
    renderWithTheme(<Badge description="Inativo" type="inactive" />);
    expect(screen.getByText(/Inativo/i)).toBeInTheDocument();
  });
});

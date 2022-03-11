import { screen } from '@testing-library/react';
import { renderWithTheme } from '../../utils/tests/helpers';
import { Input } from '../Input';

describe('<Input />', () => {
  it('should be able render the default input label ', () => {
    renderWithTheme(<Input placeholder="Nome ou CPF" label="Pesquisar por" />);
    expect(screen.getByText('Pesquisar por')).toBeInTheDocument();
  });

  it('should be able render the default input label with main styles', () => {
    renderWithTheme(<Input placeholder="Nome ou CPF" label="Pesquisar por" />);
    expect(screen.getByText('Pesquisar por')).toHaveStyle({
      color: '#A3B8B0',
      'font-weight': 500,
      'font-size': '1.4rem'
    });
  });
});

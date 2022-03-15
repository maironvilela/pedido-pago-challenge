import { screen } from '@testing-library/react';
import { renderWithTheme } from '../../utils/tests/helpers';
import { Logo } from '../Logo';

describe('<Logo />', () => {
  it('should be able to render logo icons with correct main styles', () => {
    renderWithTheme(<Logo />);

    expect(screen.getByLabelText(/logo_blue_pedido_pago/i)).toHaveStyle({
      color: '#034AFD'
    });
    expect(screen.getByLabelText(/logo_green_pedido_pago/i)).toHaveStyle({
      color: '#00E095',
      'fill-opacity': 0.85
    });
  });
});

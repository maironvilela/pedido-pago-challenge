import { screen, render } from '@testing-library/react';
import { Logo } from '../Logo';

describe('<Logo />', () => {
  it('should be able to render logo icons with correct colors', () => {
    render(<Logo />);

    expect(screen.getByLabelText(/logo_blue_pedido_pago/i)).toHaveStyle({
      color: '#034AFD'
    });
    expect(screen.getByLabelText(/logo_green_pedido_pago/i)).toHaveStyle({
      color: '#00E095',
      fillOpacity: '0.85'
    });
  });
});

import { screen } from '@testing-library/react';
import { renderWithTheme } from '../../utils/tests/helpers';
import { Button } from '.';

describe('<Button />', () => {
  it('should be able to render the Button Component with label  ', () => {
    renderWithTheme(<Button label="Salvar" />);
    expect(screen.getByText('Salvar')).toBeInTheDocument();
  });
});

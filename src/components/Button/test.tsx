import { screen } from '@testing-library/react';
import { renderWithTheme } from '../../utils/tests/helpers';
import { Button } from '.';
import { FaChevronDown as IconFaChevronDown } from 'react-icons/fa';

describe('<Button />', () => {
  it('should be able render Button Component with label', () => {
    renderWithTheme(<Button>Salvar</Button>);
    expect(screen.getByText('Salvar')).toBeInTheDocument();
  });

  it('should be able render Button Component with label and icon', () => {
    renderWithTheme(
      <Button icon={<IconFaChevronDown data-testid="icon" />}>Salvar</Button>
    );
    expect(screen.getByText('Salvar')).toBeInTheDocument();
    expect(screen.getByTestId('icon')).toBeInTheDocument();
  });
});

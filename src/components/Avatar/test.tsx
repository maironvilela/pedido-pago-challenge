import { screen } from '@testing-library/react';
import { renderWithTheme } from '../../utils/tests/helpers';
import { Avatar } from '.';

describe('<Avatar />', () => {
  it('should be able to render name initials if avatar image was not provided', () => {
    renderWithTheme(<Avatar fullName="Fulano de Tal" />);

    expect(screen.getByText(/ft/i)).toBeInTheDocument();
  });
});

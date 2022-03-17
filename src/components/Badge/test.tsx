import { screen } from '@testing-library/react';
import { renderWithTheme } from '../../utils/tests/helpers';
import { Badge } from '.';

describe('<Badge />', () => {
  it('should be able to render description Active', () => {
    renderWithTheme(<Badge description="Active" type="active" />);
    expect(screen.getByText(/Active/i)).toBeInTheDocument();
  });
});

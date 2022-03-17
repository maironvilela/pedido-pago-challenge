import { screen } from '@testing-library/react';
import { renderWithTheme } from '../../utils/tests/helpers';
import { Avatar } from '.';
import { faker } from '@faker-js/faker';

describe('<Avatar />', () => {
  it('should be able to render name initials if avatar image was not provided', () => {
    renderWithTheme(<Avatar fullName="Fulano de Tal" />);

    expect(screen.getByText(/ft/i)).toBeInTheDocument();
  });

  it('should be able to render avatar image if avatar image provided', () => {
    const imgUrl = faker.image.avatar();
    const fullName = faker.name.findName();
    renderWithTheme(<Avatar fullName={fullName} imgUrl={imgUrl} />);

    expect(screen.getByLabelText(`Avatar ${fullName}`)).toBeInTheDocument();
  });
});

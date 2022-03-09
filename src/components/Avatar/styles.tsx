import styled from '@emotion/styled';

export const Container = styled.div`
  span,
  img {
    border-radius: 50%;
    width: 3.6rem;
    height: 3.6rem;
  }

  span {
    color: ${(props) => props.theme.colors.green[600]};
    background: ${(props) => props.theme.colors.green[100]};
    padding: 0.8rem;
    font-size: ${(props) => props.theme.font.sizes.small};
  }
`;

import styled from '@emotion/styled';
import { css } from '@emotion/react';

export const Container = styled.div`
  ${({ theme }) => css`
    span,
    img {
      border-radius: 50%;
      width: 3.6rem;
      height: 3.6rem;
    }

    span {
      color: ${theme.colors.green[600]};
      background: ${theme.colors.green[100]};
      padding: 0.8rem;
      font-size: ${theme.font.sizes.small};
    }
  `}
`;

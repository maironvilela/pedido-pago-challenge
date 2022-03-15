import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Container = styled.div`
  ${({ theme }) => css`
    h1 {
      font-size: ${theme.font.sizes.x2large};
      font-weight: ${theme.font.bold};
      line-height: 100%;
    }
  `}
`;

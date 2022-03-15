import styled from '@emotion/styled';
import { css } from '@emotion/react';

export const Container = styled.div`
  ${({ theme }) => css`
    width: 100%;
    h2 {
      font-size: ${theme.font.sizes.medium};
      font-weight: ${theme.font.bold};
      text-align: left;
      margin-bottom: 2rem;
    }

    .employee-info {
      margin-top: 2rem;
    }
  `}
`;

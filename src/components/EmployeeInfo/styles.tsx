import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Container = styled.div`
  ${({ theme }) => css`
    strong {
      font-weight: ${theme.font.bold};
      font-size: ${theme.font.sizes.small};
      line-height: 140%;
    }
    span {
      color: ${theme.colors.green[500]};
      font-size: ${theme.font.sizes.small};
      font-weight: ${theme.font.normal};

      line-height: 140%;
    }
  `}
`;

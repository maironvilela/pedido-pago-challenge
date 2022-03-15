import styled from '@emotion/styled';
import { css } from '@emotion/react';

export const Container = styled.div`
  ${({ theme }) => css`
    position: relative;
    > svg {
      color: ${theme.colors.blue};
      position: relative;
      width: 3.5rem;
      height: 3.5rem;

      & + svg {
        position: relative;
        color: ${theme.colors.green[300]};
        fill-opacity: 0.85;
        top: 0.6rem;
        left: -3rem;
      }
    }
  `}
`;

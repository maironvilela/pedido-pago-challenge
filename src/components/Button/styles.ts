import styled from '@emotion/styled';
import { css } from '@emotion/react';

export const Container = styled.button`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;

    background: ${theme.colors.white[0]};

    width: 100%;

    padding: 1.6rem;
    margin-top: 1.6rem;

    border-radius: 8px;
    border: 2px solid ${theme.colors.green[100]};

    span {
      font-size: ${theme.font.medium};
      font-weight: ${theme.font.bold};
      line-height: 2.4rem;
    }

    svg {
      width: 4rem;
      height: 2.2rem;

      color: ${theme.colors.green[300]};
    }
  `}
`;

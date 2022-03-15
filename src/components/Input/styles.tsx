import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Container = styled.div`
  ${({ theme }) => css`
    height: 5.6rem;
    width: 100%;
    padding: 1rem;
    border: 2px solid ${theme.colors.white[500]};
    border-radius: 8px;
    position: relative;
    margin-top: 2rem;

    span {
      position: absolute;
      top: -13px;
      background: ${theme.colors.white[0]};
      font-size: ${theme.font.sizes.small};
      color: ${theme.colors.green[500]};
      padding: 0 0.5rem;
      font-weight: ${theme.font.medium};
    }

    div {
      display: flex;
      align-items: center;
      margin-top: 0.5rem;
      svg {
        color: ${theme.colors.green[500]};
      }

      input {
        border: none;
        width: 100%;
        margin-left: 0.5rem;
        font-family: Poppins;
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        color: ${theme.colors.green[500]};
      }
    }
  `}
`;

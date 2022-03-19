import { css } from '@emotion/react';
import styled from '@emotion/styled';

type ContainerProps = {
  isShowDetails: boolean;
  isActive: boolean;
};

export const Container = styled.div<ContainerProps>`
  ${({ theme, isShowDetails }) => css`
    padding: 1rem;
    font-weight: 600;
    font-size: 12px;
    line-height: 140%;

    border: 2px solid ${theme.colors.white[300]};
    border-radius: 8px 8px 0px 0px;

    border: ${isShowDetails && `1px solid ${theme.colors.green[300]}`};
    header {
      color: ${theme.colors.green[500]};
      font-size: ${theme.font.sizes.xsmall};
    }
    > div {
      padding: 1rem;
      display: flex;
      flex-direction: row;
      align-items: center;
      div {
        display: flex;
        flex-direction: row;
        align-items: center;

        span {
          margin-left: 1rem;
          color: ${theme.colors.green[500]};
          font-weight: ${theme.font.bold};
          font-size: ${theme.font.sizes.xsmall};
          width: 80%;
        }
      }

      > button {
        margin-left: auto;
        border: none;
        background: none;
      }
    }

    .info {
      padding: 0 2rem;
      margin-top: 2.4rem;
      display: grid;
      grid-template-columns: 50% 50%;
      column-gap: 5rem;
      row-gap: 2rem;
      font-size: 1.2rem;

      div {
        display: flex;
        width: 100%;
        flex-direction: column;
      }
    }

    .button {
      margin-top: 2rem;
    }
  `}
`;

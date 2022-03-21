import { css } from '@emotion/react';
import styled from '@emotion/styled';

type ContainerProps = {
  isShowDetails: boolean;
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
  `}
`;

type InitialInformationProps = {
  isActive: boolean;
};

export const InitialInformation = styled.button<InitialInformationProps>`
  ${({ theme, isActive }) => css`
    display: flex;
    flex-direction: column;

    width: 100%;

    background: none;
    color: ${theme.colors.green[500]};

    border: none;
    font-size: ${theme.font.sizes.xsmall};
    padding: 1rem;

    > div {
      opacity: ${isActive ? '1' : '0.5'};
      margin-top: 1rem;
      width: 100%;
      display: flex;
      align-items: center;

      span {
        margin-left: 1rem;
        color: ${theme.colors.green[500]};
        font-weight: ${theme.font.bold};
        font-size: ${theme.font.sizes.xsmall};
      }

      svg {
        margin-left: auto;
      }
    }
  `}
`;

export const Details = styled.section`
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
`;

export const Actions = styled.section`
  margin-top: 2rem;
  button {
    transition: 0.5s;

    &:hover {
      filter: brightness(0.95);
    }
    color: #6d6dd6;
    svg {
      color: #6d6dd6;
    }
    & + button {
      margin-top: 0.5rem;
      color: #d67e7e;

      svg {
        color: #d67e7e;
      }
    }
  }
`;

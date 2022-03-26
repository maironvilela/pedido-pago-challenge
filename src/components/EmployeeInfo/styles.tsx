import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { InputHTMLAttributes } from 'react';

type ContainerProps = {
  isEdit?: boolean;
} & InputHTMLAttributes<HTMLInputElement>;

const wrapperModifiers = {
  edit: () => css``
};

export const Container = styled.div<ContainerProps>`
  ${({ theme, isEdit }) => css`
    display: flex;
    flex-direction: column;
    strong {
      font-weight: ${theme.font.bold};
      font-size: ${theme.font.sizes.small};
      line-height: 140%;
    }
    span,
    input {
      display: ${isEdit ? 'none' : 'block'};
      color: ${theme.colors.green[500]};
      font-size: ${theme.font.sizes.small};
      font-weight: ${theme.font.normal};
      line-height: 140%;
    }

    input {
      background-color: inherit;
      width: 20rem;
      border: none;
      display: ${isEdit ? 'block' : 'none'};
      &::placeholder {
        background-color: inherit;
        width: 20rem;
        color: ${theme.colors.green[500]};
        border: none;
      }
    }

    ${!!isEdit && wrapperModifiers['edit']()};
  `}
`;

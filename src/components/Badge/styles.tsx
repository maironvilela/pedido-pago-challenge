import styled from '@emotion/styled';
import { css } from '@emotion/react';

type ContainerProps = {
  status?: boolean;
  isEdit: boolean;
};

export const Container = styled.button<ContainerProps>`
  ${({ theme, status, isEdit }) => css`
    height: 35px;
    width: 80px;
    border: none;
    background: ${status ? theme.colors.green[100] : theme.colors.white[300]};
    color: ${theme.colors.green[700]};
    border-radius: 999px;
    text-align: center;
    font-weight: ${theme.font.medium};
    font-size: 1.4rem;

    cursor: ${isEdit ? 'pointer' : 'auto'};
  `}
`;

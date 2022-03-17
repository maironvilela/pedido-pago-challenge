import styled from '@emotion/styled';
import { css } from '@emotion/react';

type ContainerProps = {
  type?: 'active' | 'inactive';
};

export const Container = styled.strong<ContainerProps>`
  ${({ theme, type }) => css`
    padding: 4px 8px;
    width: 7.2rem;
    background: ${type === 'inactive'
      ? theme.colors.white[300]
      : theme.colors.green[100]};
    color: ${theme.colors.green[700]};
    border-radius: 999px;
    text-align: center;
    font-weight: ${theme.font.medium};
    font-size: 1.4rem;
  `}
`;

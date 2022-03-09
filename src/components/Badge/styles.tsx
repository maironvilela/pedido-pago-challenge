import styled from '@emotion/styled';

type ContainerProps = {
  type?: 'active' | 'inactive';
};

export const Container = styled.strong<ContainerProps>`
  padding: 4px 8px;
  width: 7.2rem;
  background: ${(props) =>
    props.type === 'inactive'
      ? props.theme.colors.white[300]
      : props.theme.colors.green[100]};
  border-radius: 999px;
  text-align: center;
  font-weight: ${(props) => props.theme.font.medium};
`;

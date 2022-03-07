import styled from '@emotion/styled';

type ContainerProps = {
  type?: 'success' | 'error';
};

export const Container = styled.strong<ContainerProps>`
  padding: 4px 8px;
  width: 7.2rem;
  background: ${(props) => (props.type === 'error' ? '#fddeee' : '#B5F1DD')};
  border-radius: 999px;
  text-align: center;
  font-weight: 500;
`;

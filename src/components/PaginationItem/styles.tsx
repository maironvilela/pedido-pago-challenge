import styled from '@emotion/styled';

type ContainerProps = {
  isActive: boolean;
};
export const Container = styled.button<ContainerProps>`
  padding: 0.7rem;
  border-radius: 8px;
  border: none;
  background-color: ${(props) => (props.isActive ? '#034AFD' : '#00e095')};

  & + button {
    margin-left: 0.3rem;
  }
`;

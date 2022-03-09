import styled from '@emotion/styled';

type Container = {
  isActive: boolean;
};
export const Container = styled.button<Container>`
  margin-bottom: 1rem;
  width: 100%;
  border: none;
  background-color: ${(props) =>
    props.isActive
      ? props.theme.colors.green[100]
      : 'props.theme.colors.white[0] '};
  padding: 0.5rem;
  border-radius: 8px;
  div {
    display: flex;
    flex-direction: row;

    label {
      margin-left: 1rem;
      margin-top: 1rem;
    }
  }
`;

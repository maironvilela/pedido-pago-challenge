import styled from '@emotion/styled';

type Container = {
  isActive: boolean;
};
export const Container = styled.button<Container>`
  margin-bottom: 1rem;
  width: 100%;
  border: none;
  background-color: ${(props) => (props.isActive ? '#e5fbeb' : '#ffff ')};
  padding: 0.5rem;
  border-radius: 8px;
  border: 1px solid #eaefed;
  div {
    display: flex;
    flex-direction: row;

    label {
      margin-left: 1rem;
      margin-top: 1rem;
    }
  }
`;

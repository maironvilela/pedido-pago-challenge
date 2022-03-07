import styled from '@emotion/styled';

export const Container = styled.header`
  background-color: ${(props) => props.theme.colors.white};
  height: 6.1rem;
  border-bottom: 2px solid #eaefed; ;
`;

export const Content = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  height: 100%;

  .avatar {
    position: absolute;
    left: 2rem;
  }
`;

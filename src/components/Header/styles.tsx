import styled from '@emotion/styled';

export const Container = styled.header`
  background-color: ${(props) => props.theme.colors.white[0]};
  height: 6.1rem;
  border-bottom: 2px solid ${(props) => props.theme.colors.white[300]}; ; ;
`;

export const Content = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  height: 100%;

  .avatar {
    position: absolute;
    left: 2rem;
  }
`;

import styled from '@emotion/styled';

export const Container = styled.div`
  h1 {
    font-size: ${(props) => props.theme.font.sizes.x2large};
    font-weight: ${(props) => props.theme.font.bold};
    line-height: 100%;
  }
`;

import styled from '@emotion/styled';

export const Container = styled.div`
  position: relative;
  > svg {
    color: #034afd;
    position: relative;
    width: 3.5rem;
    height: 3.5rem;

    & + svg {
      position: relative;
      color: #00e095;
      fill-opacity: 0.85;
      top: 0.6rem;
      left: -3rem;
    }
  }
`;

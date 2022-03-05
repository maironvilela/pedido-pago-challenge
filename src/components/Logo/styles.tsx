import styled from '@emotion/styled';

export const Container = styled.div`
  position: relative;
  > img {
    float: left;
    & + img {
      position: absolute;
      top: 0.6rem;
      left: 0.7rem;
      opacity: 0.6;
    }
  }
  span {
    position: absolute;
    top: auto;
    padding: 1rem;
    border-radius: 50%;
  }
`;

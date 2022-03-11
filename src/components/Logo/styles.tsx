import styled from '@emotion/styled';

export const Container = styled.div`
  position: relative;
  > svg {
    color: #034afd;
    top: 20px;
    left: -10px;
    position: relative;

    & + svg {
      position: relative;
      color: #00e095;
      fill-opacity: 0.85;
      top: -11px;
      left: -5px;
    }
  }
`;

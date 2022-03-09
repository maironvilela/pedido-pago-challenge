import styled from '@emotion/styled';

export const Container = styled.div`
  height: 5.6rem;
  width: 100%;
  padding: 1rem;
  border: 2px solid ${(props) => props.theme.colors.white[500]};
  border-radius: 8px;
  position: relative;
  margin-top: 2rem;

  > span {
    position: absolute;
    top: -13px;
    background: ${(props) => props.theme.colors.white[0]};
    font-size: ${(props) => props.theme.font.sizes.small};
    color: ${(props) => props.theme.colors.green[400]};
    padding: 0 0.5rem;
  }

  div {
    display: flex;
    align-items: center;
    margin-top: 0.3rem;
    svg {
      color: ${(props) => props.theme.colors.green[500]};
    }

    input {
      border: none;
      width: 100%;
      margin-left: 0.8rem;
      font-weight: ${(props) => props.theme.font.medium};
      color: ${(props) => props.theme.colors.green[500]};
      &::placeholder {
        font-weight: ${(props) => props.theme.font.bold};
        color: ${(props) => props.theme.colors.green[500]};
        line-height: 150%;
      }
    }
  }
`;

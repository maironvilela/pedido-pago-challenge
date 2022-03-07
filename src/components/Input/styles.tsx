import styled from '@emotion/styled';

export const Container = styled.div`
  height: 5.6rem;
  width: 100%;
  padding: 1rem;
  border: 2px solid #cad6d1;
  border-radius: 8px;
  position: relative;
  margin-top: 2rem;

  > span {
    position: absolute;
    top: -13px;
    background: #fff;
    font-size: 1.4rem;
    color: #a3b8b0;
    padding: 0 0.5rem;
  }

  div {
    display: flex;
    align-items: center;
    margin-top: 0.3rem;
    svg {
      color: #587169;
    }

    input {
      border: none;
      width: 100%;
      margin-left: 0.8rem;
      font-family: Poppins;
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      color: #587169;
      &::placeholder {
        font-family: Poppins;
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        color: #587169;
        line-height: 150%;
      }
    }
  }
`;

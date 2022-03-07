import styled from '@emotion/styled';

type ContentProps = {
  isShowItens: boolean;
};

export const Container = styled.div<ContentProps>`
  height: ${(props) => (props.isShowItens ? '52rem' : '5.6rem')};
  width: 100%;

  padding: 1rem;
  border: 2px solid #cad6d1;
  border-radius: 8px;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;

  > span {
    font-family: Poppins;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    color: #587169;
  }
  button {
    color: #587169;
    font-size: 2rem;
    background: none;
    border: none;
    margin-left: auto;
    margin-top: 0.5rem;

    &:hover {
      color: #00e095;
    }
  }
  svg {
    margin-left: auto;
  }
  margin-bottom: 2rem;
`;

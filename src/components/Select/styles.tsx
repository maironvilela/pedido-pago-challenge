import styled from '@emotion/styled';

type ContentProps = {
  isShowItens: boolean;
};

export const Container = styled.div<ContentProps>`
  height: ${(props) => (props.isShowItens ? '15rem' : '5.6rem')};
  width: 100%;

  padding: 1rem;
  border: 2px solid ${(props) => props.theme.colors.white[500]};
  border-radius: 8px;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;

  > span {
    font-family: Poppins;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    color: ${(props) => props.theme.colors.green[500]};
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
`;

export const List = styled.div`
  .pagination {
    margin-top: 1rem;
    float: right;
  }
`;

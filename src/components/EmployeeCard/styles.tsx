import styled from '@emotion/styled';

type ContainerProps = {
  isShowDetails: boolean;
};

export const Container = styled.div<ContainerProps>`
  font-weight: 600;
  font-size: 12px;
  line-height: 140%;
  border: 2px solid #eaefed;
  padding: 1rem;
  border-radius: 8px 8px 0px 0px;

  border: ${(props) => props.isShowDetails && '1px solid #1dd195'};
  header {
    color: #587169;
  }
  > div {
    padding: 1rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    div {
      display: flex;
      flex-direction: row;
      align-items: center;

      span {
        margin-left: 1rem;
        color: #587169;
        font-weight: 600;
        font-size: 12px;
      }
    }

    button {
      margin-left: auto;
      border: none;
      background: none;
    }
  }

  .info {
    display: grid;
    grid-template-columns: 40% 60%;
    column-gap: 50px;
    font-size: 1.2rem;

    div {
      display: flex;
      width: 100%;
      flex-direction: column;

      & + div {
      }
    }
  }
`;

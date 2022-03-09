import styled from '@emotion/styled';

type ContainerProps = {
  isShowDetails: boolean;
};

export const Container = styled.div<ContainerProps>`
  padding: 1rem;

  font-weight: 600;
  font-size: 12px;
  line-height: 140%;

  border: 2px solid ${(props) => props.theme.colors.white[300]};
  border-radius: 8px 8px 0px 0px;

  border: ${(props) =>
    props.isShowDetails && `1px solid ${props.theme.colors.green[300]}`};
  header {
    color: ${(props) => props.theme.colors.green[600]};
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
        color: ${(props) => props.theme.colors.green[500]};
        font-weight: ${(props) => props.theme.font.bold};
        font-size: ${(props) => props.theme.font.sizes.xsmall};
        width: 80%;
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

import styled from '@emotion/styled';

export const Container = styled.div`
  font-weight: 600;
  font-size: 12px;
  line-height: 140%;
  border: 2px solid #eaefed;
  padding: 1rem;
  border-radius: 8px 8px 0px 0px;

  header {
    margin-top: 2rem;
    color: #587169;
  }
  section {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 2rem;
    div {
      display: flex;
      flex-direction: row;
      justify-content: center;
      span {
        margin-left: 1rem;
        width: 80%;
        color: #587169;
        font-weight: 600;
        font-size: 12px;
      }
    }

    svg {
      margin-left: auto;
    }
  }

  section + section {
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

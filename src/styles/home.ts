import styled from '@emotion/styled';

export const Container = styled.div`
  .title {
    margin-top: 4.3rem;
    padding-left: 1.6rem;
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.6rem;
`;

export const Table = styled.div`
  margin-top: 2.4rem;
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  padding: 4rem 0;
  background: #ffff;
  box-shadow: 0px 4px 8px rgba(165, 171, 179, 0.16);
  border-radius: 8px;

  .pagination {
    margin-top: 1rem;
    float: right;
  }
`;

export const TableSearch = styled.div`
  width: 100%;
  padding: 0 1.6rem;
  div {
    position: relative;
    margin-top: 2rem;

    span {
      position: absolute;
      top: -13px;
      background: #fff;
      font-size: 1.4rem;
      color: #a3b8b0;
      padding: 0 0.5rem;
    }

    input {
      border: none;
      width: 100%;

      &::placeholder {
        color: #587169;
        font-size: 1.6rem;
        font-weight: 500;
      }
    }
  }
`;

export const EmployeesList = styled.div`
  margin-top: 4rem;
  width: 100%;
  padding: 0 1.6rem;
  h2 {
    font-size: 1.6rem;
    font-weight: 600;
    text-align: left;
  }
`;

export const EmployeeCard = styled.div`
  margin-top: 1rem;
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

  .status {
    span {
      padding: 4px 8px;
      width: 7.2rem;
      background: #b5f1dd;
      border-radius: 999px;
      text-align: center;
      font-weight: 500;
    }
  }
`;

export const Button = styled.button`
  width: 100%;
  margin-top: 1.6rem;
  padding: 1.5rem;
  border-radius: 8px;
  border: 2px solid #b5f1dd;
  background: #fff;
  display: flex;
  justify-content: center;

  span {
    font-size: 1.6rem;
    line-height: 2.4rem;
    font-weight: 600;
    color: #34423d;
    margin-left: 1rem;
  }

  svg {
    color: #1dd195;
    width: 1.8rem;
    height: 2.2rem;
  }
`;

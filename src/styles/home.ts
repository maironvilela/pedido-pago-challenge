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
`;

export const TableSearch = styled.div`
  width: 100%;
  padding: 0 1.6rem;
  > div {
    height: 5.6rem;
    display: flex;
    align-items: center;
    padding: 1rem;
    border: 2px solid #cad6d1;
    border-radius: 8px;

    span {
      color: #587169;
      font-size: 1.6rem;
      font-weight: 500;
    }

    svg {
      margin-left: auto;
    }

    & + div {
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
  header {
    margin-top: 2rem;
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
      }
    }

    svg {
      margin-left: auto;
    }
  }

  section + section {
    display: grid;
    grid-template-columns: 50% 50%;
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

import styled from '@emotion/styled';

export const Container = styled.div``;

export const Content = styled.div`
  padding: 1rem;
  border-radius: 24px;
  .title {
    margin-top: 4.3rem;
    padding-left: 1.6rem;
  }
`;

export const Table = styled.div`
  padding: 2rem;
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

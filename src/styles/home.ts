import styled from '@emotion/styled';

export const Container = styled.div``;

export const Content = styled.div`
  padding: 1rem;
  border-radius: 24px;

  .title {
    margin: 4.3rem 0 3rem 0;
    padding-left: 1.6rem;
  }
`;

export const Table = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  background: #ffff;
  padding: 3rem 1rem;
  margin: 1rem;
  box-shadow: 0px 4px 8px rgba(165, 171, 179, 0.16);
  border-radius: 8px;

  .input {
    &:after {
      content: '';
      position: absolute;
      top: 9rem;
      width: 100%;
      border-bottom: 2px solid #eaefed;
      left: 0;
    }
  }

  .employees-list {
    margin-top: 5rem;
  }
`;

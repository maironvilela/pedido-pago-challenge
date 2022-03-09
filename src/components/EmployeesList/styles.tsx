import styled from '@emotion/styled';

export const Container = styled.div`
  width: 100%;
  h2 {
    font-size: ${(props) => props.theme.font.sizes.medium};
    font-weight: ${(props) => props.theme.font.bold};
    text-align: left;
    margin-bottom: 2rem;
  }

  .employee-info {
    margin-top: 2rem;
  }
`;

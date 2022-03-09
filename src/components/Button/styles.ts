import styled from '@emotion/styled';

export const Container = styled.button`
  display: flex;
  justify-content: center;

  background: ${(props) => props.theme.colors.white[0]};

  width: 100%;

  padding: 1.6rem;
  margin-top: 1.6rem;

  border-radius: 8px;
  border: 2px solid ${(props) => props.theme.colors.green[100]};

  span {
    font-size: ${(props) => props.theme.font.medium};
    font-weight: ${(props) => props.theme.font.bold};
    line-height: 2.4rem;
  }

  svg {
    width: 4rem;
    height: 2.2rem;

    color: ${(props) => props.theme.colors.green[300]};
  }
`;

import styled from '@emotion/styled';

export const Container = styled.div`
  strong {
    font-weight: ${(props) => props.theme.font.bold};
    font-size: ${(props) => props.theme.font.sizes.small};
    line-height: 140%;
  }
  span {
    color: ${(props) => props.theme.colors.green[500]};
    font-size: ${(props) => props.theme.font.sizes.small};
    font-weight: ${(props) => props.theme.font.normal};

    line-height: 140%;
  }
`;

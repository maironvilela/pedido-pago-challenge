import { Global, css, GlobalProps } from '@emotion/react';

export const GlobalStyle = (props: GlobalProps) => (
  <Global
    {...props}
    styles={css`
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
      }

      html {
        max-width: 192rem;
        min-width: 36rem;
        font-size: 62.5%;
      }
      body {
        background: #f8faf9;
        color: #587169;
        font-size: 1.6rem;
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
        -webkit-font-smoothing: antialiased;
      }

      button {
        cursor: pointer;
      }
    `}
  />
);

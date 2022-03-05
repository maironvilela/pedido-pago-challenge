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
        background: #e5e5e5;
        color: #fff;
        font-size: 1.6rem;
        font-family: 'Poppins', sans-serif;
        -webkit-font-smoothing: antialiased;
      }

      button {
        cursor: pointer;
      }
    `}
  />
);

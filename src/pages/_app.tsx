import { AppProps } from 'next/app';
import { GlobalStyle } from '../styles/global';
import { ThemeProvider } from '@emotion/react';
import theme from '../styles/theme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle styles="null" />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;

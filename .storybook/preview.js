import { ThemeProvider } from '@emotion/react';
import theme from '../src/styles/theme';
import { GlobalStyle } from '../src/styles/global';


export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <GlobalStyle styles="null" />
 	    <Story />
    </ThemeProvider>
   ),
];

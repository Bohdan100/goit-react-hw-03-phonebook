import { ThemeProvider } from '@emotion/react';
import { theme } from './components/constants/theme';
import { GlobalStyle } from './GlobalStyle';

import { AppContainer } from './App.styled';
import { Phonebook } from './components/Phonebook';

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AppContainer>
        <Phonebook />
      </AppContainer>
    </ThemeProvider>
  );
};

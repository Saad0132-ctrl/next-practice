'use client';

import { ThemeProvider as MuiThemeProvider, CssBaseline, Button } from '@mui/material';
import { ReactNode, useState } from 'react';
import { lightTheme, darkTheme } from './theme';

export default function ThemeProviderWrapper({ children }: { children: ReactNode }) {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => setDarkMode(!darkMode);

  return (
    <MuiThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <Button variant='contained' onClick={toggleTheme}>Theme Toggle</Button>
      {children}
    </MuiThemeProvider>
  );
}

import React from 'react';
import { ThemeProvider } from 'styled-components';
import { useTheme } from '../../state/useTheme';
import { lightTheme, darkTheme } from '../Themes/Theme';
import { GlobalStyles } from '../Themes/Global';
import Toggle from '../Themes/Toggle';

function ThemeToggle() {
 
  const [theme, toggleTheme, componentMounted] = useTheme();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  if(!componentMounted) {
    return <div />;
  }

  return (
    <ThemeProvider theme={themeMode}>
      <>
        <GlobalStyles />
        <Toggle theme={theme} toggleTheme={toggleTheme}/>
      </>
    </ThemeProvider>
  );
}
  
export default ThemeToggle;

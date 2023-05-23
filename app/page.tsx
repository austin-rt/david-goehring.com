'use client';

import { ThemeProvider } from '@mui/material/styles';
import { ThemeContext } from './contexts/themeContext';
import { useThemeToggle } from './hooks/useThemeToggle';
import { getTheme } from './theme';
import CssBaseline from '@mui/material/CssBaseline';
import Navbar from './components/Navbar/MobileNavbar';

const Page = () => {
  const [mode, toggleTheme] = useThemeToggle();
  const theme = getTheme(mode);

  return (
    <ThemeContext.Provider value={{ toggleTheme }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Navbar />
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default Page;

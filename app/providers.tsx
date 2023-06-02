'use client';
import './globals.css';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { ThemeContext } from './contexts/themeContext';
import { useThemeToggle } from './hooks/useThemeToggle';
import { getTheme } from './theme';

export function Providers({ children }: { children: React.ReactNode }) {
  const [mode, toggleTheme] = useThemeToggle();
  const theme = getTheme(mode);
  return (
    <ThemeContext.Provider value={{ toggleTheme }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

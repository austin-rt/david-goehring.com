import { useState, useEffect } from 'react';

import { useMediaQuery } from '@mui/material';

type ThemeToggleType = 'light' | 'dark';

export function useThemeToggle(): [ThemeToggleType, () => void] {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const [mode, setMode] = useState<ThemeToggleType>('light');

  const toggleTheme = () => {
    setMode(prevMode => {
      localStorage.setItem('dg-theme', prevMode === 'light' ? 'dark' : 'light');
      return prevMode === 'light' ? 'dark' : 'light';
    });
  };

  useEffect(() => {
    const storedTheme = localStorage.getItem('dg-theme');
    if (storedTheme) {
      setMode(storedTheme as ThemeToggleType);
    }
  }, []);

  return [mode, toggleTheme];
}

'use client';
import { useContext } from 'react';
import { IconButton } from '@mui/material';
import {
  Brightness4 as Brightness4Icon,
  Brightness7 as Brightness7Icon,
} from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';
import { ThemeContext } from '../../contexts/themeContext';

export default function ThemeToggle() {
  const theme = useTheme();
  const colorMode = useContext(ThemeContext);

  return (
    <IconButton
      onClick={colorMode.toggleTheme}
      color='inherit'
      aria-label='toggle theme'
    >
      {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
    </IconButton>
  );
}

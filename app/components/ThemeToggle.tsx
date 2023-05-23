import { useContext } from 'react';
import { IconButton, Box } from '@mui/material';
import {
  Brightness4 as Brightness4Icon,
  Brightness7 as Brightness7Icon
} from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';
import { ThemeContext } from '../contexts/themeContext';

const ThemeToggle = () => {
  const theme = useTheme();
  const colorMode = useContext(ThemeContext);

  return (
    <IconButton
      sx={{ ml: 1 }}
      onClick={colorMode.toggleTheme}
      color='inherit'
    >
      {theme.palette.mode === 'dark' ? (
        <Brightness7Icon />
      ) : (
        <Brightness4Icon />
      )}
    </IconButton>
  );
};

export default ThemeToggle;

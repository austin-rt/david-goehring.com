import { colors, createTheme } from '@mui/material';

export const getTheme = (mode: 'light' | 'dark') =>
  createTheme({
    palette: {
      primary: {
        main: colors.grey[50]
      },
      mode
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: ({ ownerState }) => ({
            ...(ownerState.variant === 'text' &&
              ownerState.color === 'primary' &&
              mode === 'light' && {
                color: colors.grey[900]
              })
          })
        }
      }
    }
  });

// button colors reverse
// text field floating label color reverse

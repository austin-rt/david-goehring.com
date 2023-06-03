import { colors, createTheme } from '@mui/material';

export const getTheme = (mode: 'light' | 'dark') =>
  createTheme({
    palette: {
      primary: {
        main: colors.grey[50],
      },
      mode,
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: ({ ownerState }) => ({
            // nav links
            ...(ownerState.variant === 'text' &&
              ownerState.color === 'primary' &&
              mode === 'light' && {
                color: colors.grey[900],
              }),
            // form buttons light mode
            ...(ownerState.variant === 'outlined' &&
              ownerState.color === 'primary' &&
              mode === 'light' && {
                color: colors.grey[600],
                borderColor: colors.grey[600],
                '&:hover': {
                  color: colors.grey[800],
                  borderColor: colors.grey[900],
                },
              }),
            // form buttons dark mode
            ...(ownerState.variant === 'outlined' &&
              ownerState.color === 'primary' &&
              mode === 'dark' && {
                color: colors.grey[400],
                '&:hover': {
                  backgroundColor: 'transparent',
                  color: colors.grey[100],
                },
              }),
          }),
        },
      },
      MuiTextField: {
        styleOverrides: {
          root: ({ ownerState }) => ({
            ...(ownerState.variant === 'outlined' &&
              ownerState.color === 'primary' &&
              mode === 'light' && {
                '& .MuiOutlinedInput-root': {
                  '&:hover fieldset': {
                    border: `solid 1px ${colors.grey[600]}`,
                  },
                  '&.Mui-focused fieldset': {
                    border: `solid 1px ${colors.grey[600]}`,
                  },
                  '& Mui-focused': {
                    color: colors.grey[600],
                  },
                },
                '& .MuiInputLabel-root': {
                  color: colors.grey[600],
                },
                '& .MuiInputLabel-root.Mui-focused': {
                  color: colors.grey[600],
                },
              }),
          }),
        },
      },
    },
  });

// text field floating label color reverse
// grid items aspect ration 1:1 grid/card/paper ?

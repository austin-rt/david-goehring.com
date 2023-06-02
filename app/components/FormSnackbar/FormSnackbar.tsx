import { forwardRef } from 'react';
import { Alert, AlertProps, Snackbar } from '@mui/material';

type Props = {
  open: boolean;
  autoHideDuration: number;
  handleClose: (_evt: React.SyntheticEvent | Event, reason?: string) => void;
  severity: 'success' | 'info' | 'warning' | 'error';
  text: string;
};

const SnackbarAlert = forwardRef<HTMLDivElement, AlertProps>(
  function SnackbarAlert(props, ref) {
    return (
      <Alert
        elevation={6}
        ref={ref}
        {...props}
      />
    );
  },
);

const FormSnackbar = ({
  open,
  autoHideDuration,
  handleClose,
  severity,
  text,
}: Props) => {
  return (
    <Snackbar
      open={open}
      autoHideDuration={autoHideDuration}
      onClose={handleClose}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}
      sx={{ bottom: '-75%' }}
    >
      <SnackbarAlert
        onClose={handleClose}
        severity={severity}
      >
        {text}
      </SnackbarAlert>
    </Snackbar>
  );
};
export default FormSnackbar;

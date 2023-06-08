'use client';

import { ChangeEvent, useState } from 'react';
import { Button, Container, Paper, Stack, TextField, Typography } from '@mui/material';
import FormSnackbar from '../components/FormSnackbar/FormSnackbar';

/* 
add blurb
wrap in grid
extract form functionality to hook
choose lib for email
*/

export default function Contact() {
  const initialFormValues: {
    name: string;
    email: string;
    message: string;
  } = {
    name: '',
    email: '',
    message: '',
  };

  const [formValues, setValues] = useState<typeof initialFormValues>(initialFormValues);
  const [error, setError] = useState<typeof initialFormValues>(initialFormValues);
  const [sent, setSent] = useState<boolean>(false);

  // ====== extract validation logic to custom hook ====== //

  const validate = (values: { name: string; email: string; message: string }) => {
    let err = { ...error };

    if ('name' in values) {
      err.name = formValues.name ? '' : 'Name is required.';
    }

    if ('email' in values) {
      if (formValues.email === '') {
        err.email = 'Email is required.';
      } else if (!/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,})$/.test(values.email)) {
        err.email = 'Email is not valid.';
      } else {
        err.email = '';
      }
    }

    if ('message' in values) {
      err.message = formValues.message ? '' : 'Message is required.';
    }

    setError({
      ...err,
    });

    if (values === formValues) {
      return Object.values(err).every(x => x === '');
    }
  };

  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    if (validate(formValues)) {
      // send email – emailJS?
      console.log(formValues);
      setValues(initialFormValues);
      setSent(true);
    }
  };

  const handleChange = (evt: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = evt.target;
    setValues({ ...formValues, [name]: value });
  };

  const handleCloseSnackbar = (_evt: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setSent(false);
  };

  return (
    <Container
      maxWidth='md'
      sx={{
        display: 'flex',
        justifyContent: 'center',
        minHeight: '90vh',
        my: '10%',
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{ maxWidth: '500px', minWidth: '250px', width: '80%' }}
      >
        <Paper
          elevation={6}
          sx={{ p: 4 }}
        >
          <Stack
            direction='column'
            spacing={2}
            alignItems='center'
          >
            <Typography
              variant='h4'
              align='center'
              fontWeight={700}
              sx={{
                letterSpacing: '.2rem',
              }}
            >
              REACH OUT
            </Typography>
            <TextField
              name='name'
              label='Name'
              variant='outlined'
              fullWidth
              value={formValues.name}
              onChange={handleChange}
              helperText={error.name}
              error={!!error.name}
            />
            <TextField
              name='email'
              label='Email'
              variant='outlined'
              fullWidth
              value={formValues.email}
              onChange={handleChange}
              helperText={error.email}
              error={!!error.email}
            />
            <TextField
              name='message'
              label='Message'
              variant='outlined'
              fullWidth
              multiline
              minRows={4}
              value={formValues.message}
              onChange={handleChange}
              helperText={error.message}
              error={!!error.message}
            />
            <Button
              variant='outlined'
              type='submit'
              sx={{ width: '100px' }}
            >
              Submit
            </Button>
          </Stack>
        </Paper>
      </form>
      <FormSnackbar
        open={sent}
        autoHideDuration={100000}
        handleClose={handleCloseSnackbar}
        severity='success'
        text='Message sent!'
      />
    </Container>
  );
}

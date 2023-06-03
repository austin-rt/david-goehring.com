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
  const initialFormValues = {
    name: '',
    email: '',
    message: '',
  };

  const [values, setValues] = useState(initialFormValues);
  const [errors, setErrors] = useState(initialFormValues);
  const [sent, setSent] = useState(false);

  const validate = (values: { name: string; email: string; message: string }) => {
    let temp = { ...errors };

    if ('name' in values) {
      temp.name = values.name ? '' : 'Name is required.';
    }

    if ('email' in values) {
      if (values.email === '') {
        temp.email = 'Email is required.';
      } else if (!/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,})$/.test(values.email)) {
        temp.email = 'Email is not valid.';
      } else {
        temp.email = '';
      }
    }

    if ('message' in values) {
      temp.message = values.message ? '' : 'Message is required.';
    }

    setErrors({
      ...temp,
    });

    if (values === values) {
      return Object.values(temp).every(x => x === '');
    }
  };

  const handleSubmit = (evt: any) => {
    evt.preventDefault();
    if (validate(values)) {
      console.log(values);
      setValues(initialFormValues);
      setSent(true);
    }
  };

  const handleChange = (evt: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = evt.target;
    setValues({ ...values, [name]: value });
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
              value={values.name}
              onChange={handleChange}
              helperText={errors.name}
              error={!!errors.name}
            />
            <TextField
              name='email'
              label='Email'
              variant='outlined'
              fullWidth
              value={values.email}
              onChange={handleChange}
              helperText={errors.email}
              error={!!errors.email}
            />
            <TextField
              name='message'
              label='Message'
              variant='outlined'
              fullWidth
              multiline
              minRows={4}
              value={values.message}
              onChange={handleChange}
              helperText={errors.message}
              error={!!errors.message}
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

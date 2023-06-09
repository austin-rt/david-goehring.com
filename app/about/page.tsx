'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Box, Button, Container, Grid, Paper, Stack, Typography } from '@mui/material';
import { MailOutline as MailOutlineIcon, Call as CallIcon } from '@mui/icons-material/';

export default function About() {
  return (
    <Container maxWidth='md'>
      <Paper
        elevation={6}
        sx={{
          p: 0,
          my: { xs: '2rem', md: '5rem' },
        }}
      >
        <Grid
          container
          direction={{ xs: 'column', md: 'row' }}
          sx={{ py: '1rem' }}
        >
          <Grid
            item
            xs={12}
            md={6}
            display='flex'
            justifyContent='center'
            alignItems='center'
          >
            <Image
              src='/images/david-operating-camera.jpeg'
              alt='David Goehring'
              width={340}
              height={500}
            />
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            display='flex'
            flexDirection='column'
            justifyContent='space-evenly'
            alignItems='center'
          >
            <Typography
              variant='body1'
              p={'1rem'}
            >
              {`Hey there, my name is David Goehring and I'm a Los Angeles based
              Video Editor. I've been editing professionally for over 10 years and have worked on a wide variety of projects.`}
            </Typography>
            <Typography
              variant='body1'
              p={'1rem'}
            >
              To see some of my favorite projects from behind the camera, check out{' '}
              <Link
                href='https://vimeo.com/davidgoehring'
                target='_blank'
              >
                {/* remove inline */}
                <u>my Vimeo</u>
              </Link>
              .
            </Typography>
            <Box>
              <Typography
                variant='h6'
                component='p'
                textAlign='center'
                mb={'1rem'}
              >
                Contact:
              </Typography>
              <Stack
                direction='row'
                spacing={1}
              >
                <Button
                  variant='outlined'
                  component={Link}
                  href='mailto:dagoehring@gmail.com'
                >
                  <MailOutlineIcon />
                </Button>
                <Button
                  variant='outlined'
                  component={Link}
                  href='tel:6786342067'
                >
                  <CallIcon />
                </Button>
              </Stack>
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
}

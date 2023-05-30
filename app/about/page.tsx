'use client';

import Image from 'next/image';
import {
  Box,
  Button,
  Container,
  Grid,
  IconButton,
  Paper,
  Stack,
  Typography
} from '@mui/material';
import {
  MailOutline as MailOutlineIcon,
  Call as CallIcon
} from '@mui/icons-material/';
import Link from 'next/link';

const About = () => {
  return (
    <Container maxWidth='md'>
      <Paper
        elevation={3}
        sx={{
          p: '1rem',
          my: { xs: '2rem', md: '5rem' }
        }}
      >
        <Grid
          container
          rowSpacing={{ xs: 0, md: 4 }}
          columnSpacing={{ xs: 4, md: 0 }}
          direction={{ xs: 'column', md: 'row' }}
          sx={{ py: '1rem' }}
        >
          <Grid
            item
            xs={12}
            md={6}
            display='flex'
            justifyContent='center'
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
              variant='h6'
              component='p'
            >
              {`Hey there, my name is David Goehring and I'm a Los Angeles based
              Video Editor. I've been editing professionally for over 10 years and have worked on a wide variety of projects.`}
            </Typography>
            <Typography
              variant='h6'
              component='p'
            >
              To see some of my favorite projects from behind the camera, check
              out{' '}
              <Link href='https://vimeo.com/davidgoehring'>
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
                sx={{ mb: '1rem' }}
              >
                Contact:
              </Typography>
              <Stack
                direction='row'
                spacing={1}
              >
                <Button
                  variant='contained'
                  component={Link}
                  href='mailto:dagoehring@gmail.com'
                >
                  <MailOutlineIcon />
                </Button>
                <Button
                  variant='contained'
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
};
export default About;

import { Typography } from '@mui/material/';

const DefaultNavbar = () => {
  return (
    <Typography
      variant='h6'
      noWrap
      component='a'
      href='/'
      sx={{
        mr: 2,
        display: { xs: 'none', md: 'flex' },
        fontWeight: 700,
        letterSpacing: '.2rem',
        color: 'inherit',
        textDecoration: 'none'
      }}
    >
      DAVID GOEHRING
    </Typography>
  );
};

export default DefaultNavbar;

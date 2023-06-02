import Link from 'next/link';
import { Typography } from '@mui/material';

export default function NavTitle() {
  return (
    <Typography
      variant='h5'
      component='h1'
      noWrap
      sx={{
        fontSize: { xs: '1.5rem', md: '1.75rem' },
        width: 'max-content',
        fontWeight: 700,
        letterSpacing: '.2rem',
      }}
    >
      <Link href='/'>DAVID GOEHRING</Link>
    </Typography>
  );
}

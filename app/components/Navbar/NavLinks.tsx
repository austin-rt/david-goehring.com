import { NAVIGATION } from '@/lib/constants';
import { Box, Button } from '@mui/material/';
import Link from 'next/link';

type Props = {
  pages: string[];
};

const NavLinks = ({ pages }: Props) => {
  return (
    <Box
      sx={{
        flexGrow: 1,
        justifyContent: 'flex-end',
        display: { xs: 'none', md: 'flex' },
        mr: '1rem'
      }}
    >
      {/* duplicate code. replace with {pages} */}
      {pages
        .map(page => (
          <Button
            key={page}
            component={Link}
            href={NAVIGATION[page]}
            sx={{
              fontSize: { xs: '1.25rem', md: '1.1rem' }
            }}
          >
            {page}
          </Button>
        ))
        .filter(page => page.key !== NAVIGATION.HOME.toUpperCase())}
    </Box>
  );
};

export default NavLinks;

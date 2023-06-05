import Link from 'next/link';
import { NAVIGATION } from '@/lib/constants';
import { Box, Button } from '@mui/material/';

type Props = {
  pages: string[];
};

export default function NavLinks({ pages }: Props) {
  return (
    <Box
      sx={{
        flexGrow: 1,
        justifyContent: 'flex-end',
        display: 'flex',
        mr: '1rem',
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
              fontSize: '1.1rem',
            }}
          >
            {page}
          </Button>
        ))
        .filter(page => page.key !== 'HOME')}
    </Box>
  );
}

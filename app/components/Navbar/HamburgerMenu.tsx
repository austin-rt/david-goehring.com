import { Box, IconButton, Drawer, Button } from '@mui/material/';
import MenuIcon from '@mui/icons-material/Menu';
import { useDrawer } from '../../hooks/useDrawer';
import Link from 'next/link';
import { NAVIGATION } from '@/lib/constants';

type Props = {
  pages: string[];
};

function HamburgerMenu({ pages }: Props) {
  const { isDrawerOpen, toggleDrawer } = useDrawer();

  return (
    <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
      <IconButton
        size='large'
        aria-label='hamburger menu'
        aria-controls='menu-appbar'
        aria-haspopup='true'
        onClick={toggleDrawer}
        color='inherit'
      >
        <MenuIcon />
      </IconButton>
      <Drawer
        anchor='left'
        open={isDrawerOpen}
        onClose={toggleDrawer}
      >
        <Box
          p={2}
          py={3}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            textAlign: 'left',
            width: '33vw',
            minWidth: '9rem'
          }}
        >
          {pages.map(page => (
            <Button
              key={page}
              component={Link}
              href={NAVIGATION[page]}
              sx={{
                fontSize: { xs: '1.25rem', md: '1.1rem' }
              }}
              onClick={toggleDrawer}
            >
              {page}
            </Button>
          ))}
        </Box>
      </Drawer>
    </Box>
  );
}

export default HamburgerMenu;

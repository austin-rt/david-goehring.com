'use client';

import Link from 'next/link';
import MenuIcon from '@mui/icons-material/Menu';
import { Box, IconButton, Drawer, Button } from '@mui/material/';
import { NAVIGATION } from '@/lib/constants';
import { useDrawer } from '../../hooks/useDrawer';

type Props = {
  pages: string[];
};

export default function HamburgerMenu({ pages }: Props) {
  const { isDrawerOpen, toggleDrawer } = useDrawer();

  return (
    <Box sx={{ display: 'flex' }}>
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
            minWidth: '9rem',
          }}
        >
          {/* duplicate code. replace with {pages} */}
          {pages.map(page => (
            <Button
              key={page}
              component={Link}
              href={NAVIGATION[page]}
              sx={{
                fontSize: '1.25rem',
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

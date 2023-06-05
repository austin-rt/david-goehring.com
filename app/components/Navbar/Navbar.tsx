'use client';

import { AppBar, Container, Toolbar, useMediaQuery, useTheme } from '@mui/material/';
import { NAVIGATION } from '../../../lib/constants';
import HamburgerMenu from './HamburgerMenu';
import NavLinks from './NavLinks';
import NavTitle from './NavTitle';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  // make pages: JSX.Element[] and map through here, adding toggleDrawer
  const pages: string[] = Object.keys(NAVIGATION);
  const theme = useTheme();

  return (
    <AppBar position='static'>
      <Container>
        <Toolbar
          disableGutters
          sx={{
            justifyContent: 'space-between',
          }}
        >
          {useMediaQuery(theme.breakpoints.down('md')) && <HamburgerMenu pages={pages} />}
          <NavTitle />
          {useMediaQuery(theme.breakpoints.up('md')) && <NavLinks pages={pages} />}
          <ThemeToggle />
        </Toolbar>
      </Container>
    </AppBar>
  );
}

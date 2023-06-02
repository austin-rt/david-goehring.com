'use client';
import { AppBar, Container, Toolbar } from '@mui/material/';
import { NAVIGATION } from '../../../lib/constants';
import HamburgerMenu from './HamburgerMenu';
import NavLinks from './NavLinks';
import NavTitle from './NavTitle';
import ThemeToggle from './ThemeToggle';

function Navbar() {
  // make pages JSX.Element[] and map through here, adding toggleDrawer
  const pages: string[] = Object.keys(NAVIGATION);

  return (
    <AppBar position='static'>
      <Container>
        <Toolbar
          disableGutters
          sx={{
            justifyContent: 'space-between',
          }}
        >
          <HamburgerMenu pages={pages} />
          <NavTitle />
          <NavLinks pages={pages} />
          <ThemeToggle />
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;

import Link from 'next/link';
import { AppBar, Toolbar, Container, Button } from '@mui/material/';
import { NAVIGATION } from '../../../lib/constants';
import HamburgerMenu from './HamburgerMenu';
import NavTitle from './NavTitle';
import NavLinks from './NavLinks';
import ThemeToggle from './ThemeToggle';
import { useDrawer } from '@/app/hooks/useDrawer';

function Navbar() {
  const { isDrawerOpen, toggleDrawer } = useDrawer();

  const pages: string[] = Object.keys(NAVIGATION);

  return (
    <AppBar position='static'>
      <Container>
        <Toolbar
          disableGutters
          sx={{
            justifyContent: 'space-between'
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

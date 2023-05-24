import Link from 'next/link';
import { AppBar, Toolbar, Container, Button } from '@mui/material/';
import { NAVIGATION } from '../../../lib/constants';
import HamburgerMenu from './HamburgerMenu';
import NavTitle from './NavTitle';
import NavLinks from './NavLinks';
import ThemeToggle from './ThemeToggle';

const pages: JSX.Element[] = Object.keys(NAVIGATION)
  .map(page => (
    <Link
      href={NAVIGATION[page]}
      key={page}
    >
      <Button key={page}>{page}</Button>
    </Link>
  ))
  .filter(page => page.key !== NAVIGATION.HOME.toUpperCase());

function Navbar() {
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

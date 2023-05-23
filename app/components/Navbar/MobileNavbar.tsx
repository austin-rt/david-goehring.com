import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Container,
  Button,
  Drawer
} from '@mui/material/';
import MenuIcon from '@mui/icons-material/Menu';
import ThemeToggle from '../ThemeToggle';
import { useNavbarMenu } from '../../hooks/useNavbarMenu';
import { useTheme } from '@emotion/react';
import { NAVIGATION } from '../../../lib/constants';
import Link from 'next/link';

const pages = Object.keys(NAVIGATION);

function Navbar() {
  const { isDrawerOpen, handleNavMenu } = useNavbarMenu();
  const theme = useTheme();

  return (
    <AppBar position='static'>
      <Container maxWidth='xl'>
        <Toolbar disableGutters>
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
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size='large'
              aria-label='hamburger menu'
              aria-controls='menu-appbar'
              aria-haspopup='true'
              onClick={handleNavMenu}
              color='inherit'
            >
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor='left'
              open={isDrawerOpen}
              onClose={handleNavMenu}
            >
              <Box
                p={2}
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  textAlign: 'left',
                  width: '8rem'
                }}
              >
                {pages.map(
                  page =>
                    page !== 'HOME' && (
                      <Link
                        href={NAVIGATION[page]}
                        key={page}
                      >
                        <Button key={page}>{page}</Button>
                      </Link>
                    )
                )}
              </Box>
            </Drawer>
          </Box>
          <Typography
            variant='h5'
            noWrap
            component='a'
            href={NAVIGATION.HOME}
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontWeight: 700,
              letterSpacing: '.2rem',
              color: 'inherit',
              textDecoration: 'none'
            }}
          >
            DAVID GOEHRING
          </Typography>

          <Box
            sx={{
              flexGrow: 1,
              justifyContent: 'flex-end',
              display: { xs: 'none', md: 'flex' }
            }}
          >
            {pages.map(
              page =>
                page !== 'HOME' && (
                  <Link
                    href={NAVIGATION[page]}
                    key={page}
                  >
                    <Button key={page}>{page}</Button>
                  </Link>
                )
            )}
          </Box>
          <ThemeToggle />
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;

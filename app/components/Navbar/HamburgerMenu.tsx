import { Box, IconButton, Button, Drawer } from '@mui/material/';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavbarMenu } from '../../hooks/useNavbarMenu';

type Props = {
  pages: JSX.Element[];
};

function HamburgerMenu({ pages }: Props) {
  const { isDrawerOpen, handleNavMenu } = useNavbarMenu();

  return (
    <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
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
          {pages}
        </Box>
      </Drawer>
    </Box>
  );
}

export default HamburgerMenu;

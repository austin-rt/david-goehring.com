import { Box } from '@mui/material/';

type Props = {
  pages: JSX.Element[];
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
      {pages}
    </Box>
  );
};

export default NavLinks;

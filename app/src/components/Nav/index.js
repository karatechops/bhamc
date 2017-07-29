import React, { PropTypes } from 'react';
import Box from 'grommet/components/Box';
import Header from 'grommet/components/Header';
import Heading from 'grommet/components/Heading';
import Anchor from '../Anchor';

const links = [
  {
    label: 'Home',
    path: '/home',
  },
  {
    label: 'Doctors',
    path: '/doctors',
  },
  {
    label: 'News',
    path: '/news',
  },
  {
    label: 'Pet Care',
    path: '/pet-care',
  },
  {
    label: 'Links',
    path: '/links',
  },
  {
    label: 'Store',
    path: '/store',
  },
  {
    label: 'About Us',
    path: '/about-us',
  },
];

export const Nav = ({ path: currentPath }) =>
  <Header
    pad={{
      horizontal: 'medium',
      vertical: 'medium',
    }}
    colorIndex="neutral-1"
  >
    <Heading tag="h3" margin="none">
      Belle Haven Animal Medical Centre
    </Heading>
    <Box
      flex
      justify="end"
      direction="row"
      responsive={false}
      pad={{
        between: 'medium',
      }}
      size={{ width: 'xlarge' }}
    >
      { links.map(({ label, path }) =>
        <Anchor
          label={label}
          path={path}
          style={{
            textDecoration: (path === currentPath)
              ? 'underline'
              : 'none',
            color: (path === currentPath)
              ? '#fff'
              : '',
          }}
        />,
      )}
    </Box>
  </Header>;

Nav.propTypes = {
  path: PropTypes.string.isRequired,
};

export default Nav;

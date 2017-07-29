import React, { PropTypes } from 'react';
import Heading from 'grommet/components/Heading';
import Menu from 'grommet/components/Menu';
import MenuIcon from 'grommet/components/icons/base/Menu';
import Anchor from '../Anchor';
import { DesktopNav, MobileNav, Header } from './styles';

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
    <MobileNav
      flex
      align="end"
      alignSelf="end"
    >
      <Menu
        responsive={false}
        inline={false}
        icon={<MenuIcon />}
        dropAlign={{ right: 'right', top: 'top' }}
      >
        { links.map(({ label, path }) =>
          <Anchor
            label={label}
            path={path}
            style={{
              textAlign: 'right',
              color: (path === currentPath)
                ? '#fff'
                : '',
              background: (path === currentPath)
                ? '#38424e'
                : '',
            }}
          />,
        )}
      </Menu>
    </MobileNav>
    <Heading tag="h3" margin="none">
      Belle Haven Animal Medical Centre
    </Heading>
    <DesktopNav
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
    </DesktopNav>
  </Header>;

Nav.propTypes = {
  path: PropTypes.string.isRequired,
};

export default Nav;

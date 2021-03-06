import React, { Component, PropTypes } from 'react';
import Box from 'grommet/components/Box';
import Button from 'grommet/components/Button';
import Heading from 'grommet/components/Heading';
import Layer from 'grommet/components/Layer';
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
    label: 'Careers',
    path: '/careers',
  },
  {
    label: 'About Us',
    path: '/about-us',
  },
];

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      layer: false,
    };
  }
  getPathRoot(path) {
    return `/${path.split('/')[1]}`;
  }
  render() {
    const { layer } = this.state;
    const { path: currentPath } = this.props;
    const currentPathRoot = this.getPathRoot(currentPath);
    return (
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
          <Button onClick={() => this.setState({ layer: !layer })} icon={<MenuIcon />} />
          { layer &&
            <Layer
              closer
              onClose={() => this.setState({ layer: !layer })}
            >
              <Box full justify="center">
                <Box pad="large" />
                { links.map(({ label, path }, index) =>
                  <Anchor
                    label={label}
                    path={path}
                    key={`mobile-link-${index}`}
                    onClick={() => this.setState({ layer: !layer })}
                    style={{
                      padding: '12px',
                      fontSize: '24px',
                      textAlign: 'center',
                      color: (path === currentPathRoot)
                        ? '#fff'
                        : '',
                      background: (path === currentPathRoot)
                        ? '#38424e'
                        : '',
                    }}
                  />,
                )}
              </Box>
            </Layer>
          }
        </MobileNav>
        <Heading className="header-title" tag="h3" margin="none">
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
          { links.map(({ label, path }, index) =>
            <Anchor
              label={label}
              path={path}
              key={`desktop-link-${index}`}
              style={{
                textDecoration: (path === currentPathRoot)
                  ? 'underline'
                  : 'none',
                color: (path === currentPathRoot)
                  ? '#fff'
                  : '',
              }}
            />,
          )}
        </DesktopNav>
      </Header>
    );
  }
}

Nav.propTypes = {
  path: PropTypes.string.isRequired,
};

export default Nav;

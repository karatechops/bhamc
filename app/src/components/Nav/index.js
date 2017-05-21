import React from 'react';
import Box from 'grommet/components/Box';
import Header from 'grommet/components/Header';
import Heading from 'grommet/components/Heading';
import Anchor from '../Anchor';

export const Nav = () => // eslint-disable-line
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
      <Anchor label="Home" />
      <Anchor label="Doctors" />
      <Anchor label="News" />
      <Anchor label="Pet Care" />
      <Anchor label="Forms" />
      <Anchor label="Store" />
      <Anchor label="About Us" />
    </Box>
  </Header>;

export default Nav;

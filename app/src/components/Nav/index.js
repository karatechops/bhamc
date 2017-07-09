import React from 'react';
import Box from 'grommet/components/Box';
import Header from 'grommet/components/Header';
import Heading from 'grommet/components/Heading';
import Anchor from '../Anchor';

export const Nav = () =>
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
      <Anchor
        label="Home"
        path="/"
      />
      <Anchor
        label="Doctors"
        path="/doctors"
      />
      <Anchor
        label="News"
        path="news"
      />
      <Anchor
        label="Pet Care"
        path="pet-care"
      />
      <Anchor
        label="Links"
        path="links"
      />
      <Anchor
        label="Store"
        path="store"
      />
      <Anchor
        label="About Us"
        path="about-us"
      />
    </Box>
  </Header>;

export default Nav;

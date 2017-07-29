import React, { PropTypes } from 'react';
import Box from 'grommet/components/Box';
import Heading from 'grommet/components/Heading';
import defaultHero from '../../../images/bhamc-hero.jpg';

const PageMarquee = ({ image }) =>
  <Box
    full="horizontal"
    colorIndex="grey-1"
    texture={image}
    size={{ height: 'medium' }}
    align="center"
    justify="center"
  >
    <Heading
      tag="h1"
      strong
      margin="none"
    >
      Belle Haven Animal Medical Centre
    </Heading>
  </Box>;

PageMarquee.propTypes = {
  image: PropTypes.string,
};

PageMarquee.defaultProps = {
  image: defaultHero,
};

export default PageMarquee;

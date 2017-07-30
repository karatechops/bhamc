import React, { PropTypes } from 'react';
import Heading from 'grommet/components/Heading';
import { PageMarqueeContainer } from './styles'; 
import defaultHero from '../../../images/bhamc-hero.jpg';

const PageMarquee = ({ image }) =>
  <PageMarqueeContainer
    full="horizontal"
    colorIndex="grey-1"
    texture={image}
    align="center"
    justify="center"
    textAlign="center"
  >
    <Heading
      tag="h1"
      strong
      margin="none"
    >
      Belle Haven Animal Medical Centre
    </Heading>
  </PageMarqueeContainer>;

PageMarquee.propTypes = {
  image: PropTypes.string,
};

PageMarquee.defaultProps = {
  image: defaultHero,
};

export default PageMarquee;

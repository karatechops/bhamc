import React, { PropTypes } from 'react';
import Heading from 'grommet/components/Heading';
import { MarqueeContainer } from './styles';
import defaultHero from '../../../images/bhamc-hero.jpg';

const Marquee = ({ image }) =>
  <MarqueeContainer
    full="horizontal"
    colorIndex="grey-1"
    texture={image.src}
    align="center"
    justify="center"
    textAlign="center"
    backgroundPosition={image.backgroundPosition}
  >
    { image.title &&
      <Heading>
        {image.title}
      </Heading>
    }
  </MarqueeContainer>;

Marquee.propTypes = {
  image: PropTypes.shape({
    src: PropTypes.string,
    backgroundPosition: PropTypes.string,
    title: PropTypes.string,
  }),
};

Marquee.defaultProps = {
  image: {
    src: defaultHero,
    backgroundPosition: 'center',
  },
};

export default Marquee;

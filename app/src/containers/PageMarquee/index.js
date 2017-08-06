import React, { Component, PropTypes } from 'react';
import { Marquee } from 'components';
import imageMap from './imageMap';

class PageMarquee extends Component {
  getPathRoot(path) {
    return `${path.split('/')[1]}`;
  }
  render() {
    const { path } = this.props;
    return (
      <Marquee
        image={imageMap[this.getPathRoot(path)]}
      />
    );
  }
}

PageMarquee.propTypes = {
  path: PropTypes.string,
};

export default PageMarquee;

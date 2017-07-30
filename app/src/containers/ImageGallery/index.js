import React, { Component, PropTypes } from 'react';
import Box from 'grommet/components/Box';
import Button from 'grommet/components/Button';
import Image from 'grommet/components/Image';
import Paragraph from 'grommet/components/Paragraph';
import { ImageThumb } from 'components';

export class ImageGallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
    };
    this.onImageClick = this.onImageClick.bind(this);
  }
  onImageClick(activeIndex) {
    this.setState({ activeIndex });
  }
  render() {
    const { images } = this.props;
    const { activeIndex } = this.state;
    const imageThumbs = (images && images.length > 0)
      ? images.map((image, imageIndex) =>
        <Button
          onClick={this.onImageClick.bind(this, imageIndex)}
          key={`gallery-thumb-${imageIndex}`}
        >
          <ImageThumb
            path={image.original}
          />
        </Button>)
      : undefined;
    return (
      <Box full="horizontal">
        <Box
          full="horizontal"
          colorIndex="light-2"
          pad="medium"
          align="center"
        >
          <Image src={images[activeIndex].original} />
        </Box>
        { images[activeIndex].description &&
          <Box
            align="center"
            colorIndex="light-2"
            pad={{
              horizontal: 'small',
            }}
            textAlign="center"
          >
            <Paragraph size="large" margin="small">
              {images[activeIndex].description}
            </Paragraph>
          </Box>
        }
        { imageThumbs &&
          <Box
            pad={{
              vertical: 'medium',
            }}
            direction="row"
            justify="center"
            responsive={false}
            wrap
          >
            {imageThumbs}
          </Box>
        }
      </Box>
    );
  }
}

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.string,
      original: PropTypes.string,
      thumb: PropTypes.string,
      icon: PropTypes.string,
    }),
  ),
};

export default ImageGallery;
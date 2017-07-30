import React, { Component, PropTypes } from 'react';
import { findDOMNode } from 'react-dom';
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
      galleryHeight: 'auto',
      imageOpacity: 1,
    };
    this.onImageClick = this.onImageClick.bind(this);
  }
  onImageClick(activeIndex) {
    this.setState({
      imageOpacity: 0,
    }, () => {
      setTimeout(() => {
        this.setState({
          activeIndex,
        }, () => {
          this.setState({
            galleryHeight: findDOMNode(this.imageRef).offsetHeight + 24,
            imageOpacity: 1,
            activeIndex,
          });
        });
      }, 500);
    });
  }
  render() {
    const { images } = this.props;
    const { activeIndex, galleryHeight, imageOpacity } = this.state;
    const imageThumbs = (images && images.length > 0)
      ? images.map((image, imageIndex) =>
        <Button
          onClick={this.onImageClick.bind(this, imageIndex)}
          key={`gallery-thumb-${imageIndex}`}
        >
          <ImageThumb
            path={image.original}
            active={imageIndex === activeIndex}
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
          style={{
            height: galleryHeight,
            transition: 'height .25s ease-out',
            overflow: 'hidden',
          }}
        >
          <Image
            onLoad={() =>
              this.setState({
                galleryHeight: findDOMNode(this.imageRef).offsetHeight + 24,
              },
            )}
            ref={imageRef => this.imageRef = imageRef}
            src={images[activeIndex].original}
            style={{
              transition: 'opacity .5s linear',
              opacity: imageOpacity,
            }}
          />
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
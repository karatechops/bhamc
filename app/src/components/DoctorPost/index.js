import React, { PropTypes } from 'react';
import Box from 'grommet/components/Box';
import Button from 'grommet/components/Button';
import Heading from 'grommet/components/Heading';
import Image from 'grommet/components/Image';
import Paragraph from 'components/Paragraph';

export const DoctorPost = ({ biography, name, profile, images, onImageClick }) =>
  <Box
    direction="row"
    pad={{
      between: 'medium',
    }}
  >
    <Box>
      <img
        src={profile.original}
        style={{
          minHeight: '150px',
          minWidth: '150px',
        }}
        alt={name}
      />
    </Box>
    <Box>
      <Heading tag="h2" margin="none">
        {name}
      </Heading>
      <Paragraph
        dangerouslySetInnerHTML={{ __html: biography }}
        margin="none"
      />
      {
        images && images.length > 0 &&
        images.map((image, imageIndex) =>
          <Button onClick={onImageClick.bind(this, imageIndex)}>
            <Image
              src={image.thumb}
              size="small"
            />
          </Button>)
      }
    </Box>
  </Box>;

DoctorPost.propTypes = {
  biography: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  profile: PropTypes.shape({
    original: PropTypes.string,
  }),
  images: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.string,
      original: PropTypes.string,
      thumb: PropTypes.string,
      icon: PropTypes.string,
    }),
  ),
  onImageClick: PropTypes.function,
};

export default DoctorPost;

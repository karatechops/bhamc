import React, { PropTypes } from 'react';
import Box from 'grommet/components/Box';
import Heading from 'grommet/components/Heading';
import Paragraph from 'components/Paragraph';

export const DoctorPost = ({ biography, name, profile }) =>
  <Box>
    <Box align="center">
      <img
        src={profile.original}
        style={{
          maxWidth: '100%',
          width: '200px',
          height: 'auto',
        }}
        alt={name}
      />
      <Heading tag="h2" margin="none">
        {name}
      </Heading>
    </Box>
    <Box>
      <Paragraph
        dangerouslySetInnerHTML={{ __html: biography }}
        margin="none"
      />
    </Box>
  </Box>;

DoctorPost.propTypes = {
  biography: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  profile: PropTypes.shape({
    original: PropTypes.string,
  }),
};

export default DoctorPost;

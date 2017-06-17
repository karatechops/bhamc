import React, { PropTypes } from 'react';
import Box from 'grommet/components/Box';
import Heading from 'grommet/components/Heading';
import Paragraph from 'components/Paragraph';

export const DoctorListItem = ({ biography, name, profile }) =>
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
    </Box>
  </Box>;

DoctorListItem.propTypes = {
  biography: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  profile: PropTypes.shape({
    original: PropTypes.string,
  }),
};

export default DoctorListItem;

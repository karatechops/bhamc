import React, { PropTypes } from 'react';
import Box from 'grommet/components/Box';
import Button from 'grommet/components/Button';
import Heading from 'grommet/components/Heading';
import defaultProfile from './default-user-image.png';

export const DoctorListItem = ({ name, profile, id }) =>
  <Box
    pad={{
      between: 'medium',
      vertical: 'medium',
      horizontal: 'medium',
    }}
    textAlign="center"
    basis="1/3"
  >
    <Button path={`/doctor/${id}`}>
      <Box align="center">
        <div
          style={{
            minHeight: '150px',
            minWidth: '150px',
            height: '150px',
            width: '150px',
            borderRadius: '150px',
            background: `url("${profile && profile.original ? profile.original : defaultProfile}")  no-repeat`,
            backgroundSize: 'cover',
          }}
        />
      </Box>
      <Box>
        <Heading tag="h3" margin="small">
          {name}
        </Heading>
      </Box>
    </Button>
  </Box>;

DoctorListItem.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  profile: PropTypes.shape({
    original: PropTypes.string,
  }),
};

export default DoctorListItem;

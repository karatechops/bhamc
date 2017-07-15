import React, { PropTypes } from 'react';
import Box from 'grommet/components/Box';
import Button from 'grommet/components/Button';
import Heading from 'grommet/components/Heading';

export const DoctorListItem = ({ name, profile, id }) =>
  <Box
    pad={{
      between: 'medium',
      vertical: 'medium',
    }}
    textAlign="center"
    basis="1/3"
  >
    <Button path={`/doctor/${id}`}>
      <Box align="center">
        <img
          src={profile.original}
          style={{
            minHeight: '150px',
            minWidth: '150px',
            height: '150px',
            width: '150px',
          }}
          alt={name}
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

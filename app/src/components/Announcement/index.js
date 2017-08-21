import React, { PropTypes } from 'react';
import Box from 'grommet/components/Box';
import Heading from 'grommet/components/Heading';

/* eslint-disable react/no-danger */
const Announcement = ({ title, paragraph }) =>
  <Box
    pad={{
      horizontal: 'medium',
      vertical: 'small',
    }}
    style={{
      overflow: 'hidden',
    }}
  >
    <Heading tag="h3" margin="none">
      {title}
    </Heading>
    <div dangerouslySetInnerHTML={{ __html: paragraph }} />
  </Box>;

Announcement.propTypes = {
  title: PropTypes.string,
  paragraph: PropTypes.string,
};

export default Announcement;
